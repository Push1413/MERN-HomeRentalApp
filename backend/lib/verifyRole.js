export const verifyRealtor = (req, res, next) => {
    // Assuming verifyToken has already run and populated req.userId
    // However, verifyToken (usually) only decodes the token.
    // We need to verify the user's role from the token payload OR fetch it.
    // For efficiency, we should include the role in the JWT token.

    // Checking if the token payload has the role (we will update login to include it)
    // req.user is usually set by verifying the token.

    // BUT the existing verifyToken might not set req.user in a convenient way, 
    // or checks strictly for `id` and `isAdmin`.

    // Let's look at verifyToken.js first to ensure compatibility.
    // For now, I'll write a generic check assuming req.user or similar exists.

    if (req.user && req.user.role === "REALTOR") {
        next();
    } else {
        return res.status(403).json({ message: "Not Authorized! Realtors only." });
    }
};
