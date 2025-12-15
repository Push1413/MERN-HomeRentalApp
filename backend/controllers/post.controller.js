import prisma from "../lib/prisma.js";

export const getPosts = async (req, res) => {
  const query = req.query;

  try {
    // Build filter object based on query parameters
    const filter = {};
    
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

    const posts = await prisma.post.findMany({
      where: filter,
      include: {
        postDetail: true
      }
    });
    
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
   
      res.status(200).json({ ...post, isSaved: false });
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