import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";

export const getPosts = async (req, res) => {
  const query = req.query;

  try {
    // Build filter object based on query parameters
    const filter = {};

    console.log("Received Query:", query);

    if (query.city) {
      filter.city = {
        contains: query.city,
        mode: 'insensitive'
      };
    }

    if (query.minPrice && query.minPrice !== "" && parseInt(query.minPrice) > 0) {
      filter.price = {
        ...filter.price,
        gte: parseInt(query.minPrice)
      };
    }

    if (query.maxPrice && query.maxPrice !== "" && parseInt(query.maxPrice) > 0) {
      filter.price = {
        ...filter.price,
        lte: parseInt(query.maxPrice)
      };
    }

    if (query.property) {
      filter.property = query.property;
    }

    if (query.bedroom) {
      filter.bedroom = parseInt(query.bedroom);
    }

    console.log("Constructed Filter:", JSON.stringify(filter, null, 2));

    const posts = await prisma.post.findMany({
      where: filter,
      include: {
        postDetail: true
      }
    });

    console.log(`Found ${posts.length} posts`);

    res.status(200).json(posts);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get posts" });
  }
};

export const getPost = async (req, res) => {
  const id = req.params.id;
  try {
    const post = await prisma.post.findUnique({
      where: { id },
      include: {
        postDetail: true
      },
    });

    let isSaved = false;
    const token = req.cookies.token;

    if (token) {
      // Decode token but don't verify strict signature here to just get ID (or use verifyToken middleware if strictly needed)
      // For simplicity/speed we'll assume valid if present or use a utility
      // Actually, cleaner to rely on jwt.verify inside a try/catch or helper
      try {
        const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const saved = await prisma.savedPost.findUnique({
          where: {
            userId_postId: {
              postId: id,
              userId: payload.id,
            },
          },
        });
        isSaved = saved ? true : false;
      } catch (e) {
        // ignore invalid token
      }
    }

    res.status(200).json({ ...post, isSaved });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get post" });
  }
};

export const getStats = async (req, res) => {
  try {
    const totalProperties = await prisma.post.count();
    const totalUsers = await prisma.user.count();

    // Calculate some basic stats
    const stats = {
      totalProperties,
      totalUsers,
      yearsOfExperience: 16, // This could be calculated from the oldest post date
      awards: 200 // This could be stored in a separate table or calculated
    };

    res.status(200).json(stats);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get statistics" });
  }
};

export const getSimilarPosts = async (req, res) => {
  const id = req.params.id;
  const PYTHON_SERVICE_URL = process.env.PYTHON_SERVICE_URL || "http://localhost:5000";

  try {
    const response = await fetch(`${PYTHON_SERVICE_URL}/recommend/similar/${id}`);

    if (!response.ok) {
      throw new Error(`Python service responded with ${response.status}`);
    }

    const recommendedIds = await response.json();

    if (!Array.isArray(recommendedIds) || recommendedIds.length === 0) {
      return res.status(200).json([]);
    }

    const posts = await prisma.post.findMany({
      where: {
        id: { in: recommendedIds }
      },
      include: {
        postDetail: true
      }
    });

    res.status(200).json(posts);
  } catch (err) {
    console.log("Error in getSimilarPosts:", err);
    // Fallback: return empty array or handle gracefully
    res.status(200).json([]); // Returning empty list so frontend doesn't break
  }
};

export const getNearbyPosts = async (req, res) => {
  const { lat, lng } = req.query;
  const PYTHON_SERVICE_URL = process.env.PYTHON_SERVICE_URL || "http://localhost:5000";

  if (!lat || !lng) {
    return res.status(400).json({ message: "Latitude and Longitude are required" });
  }

  try {
    const response = await fetch(`${PYTHON_SERVICE_URL}/recommend/nearby?lat=${lat}&lng=${lng}`);

    if (!response.ok) {
      throw new Error(`Python service responded with ${response.status}`);
    }

    const recommendedIds = await response.json();

    if (!Array.isArray(recommendedIds) || recommendedIds.length === 0) {
      return res.status(200).json([]);
    }

    const posts = await prisma.post.findMany({
      where: {
        id: { in: recommendedIds }
      },
      include: {
        postDetail: true
      }
    });

    res.status(200).json(posts);
  } catch (err) {
    console.log("Error in getNearbyPosts:", err);
    res.status(200).json([]);
  }
};