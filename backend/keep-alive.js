// Optional: Keep-alive script for Render free tier
// This can be called periodically to prevent sleeping

import fetch from 'node-fetch';

const RENDER_URL = process.env.RENDER_URL || 'https://your-app.onrender.com';

export const keepAlive = async () => {
  try {
    const response = await fetch(RENDER_URL);
    console.log(`Keep-alive ping: ${response.status}`);
  } catch (error) {
    console.error('Keep-alive failed:', error.message);
  }
};

// Ping every 14 minutes to prevent sleeping
if (process.env.NODE_ENV === 'production') {
  setInterval(keepAlive, 14 * 60 * 1000);
}