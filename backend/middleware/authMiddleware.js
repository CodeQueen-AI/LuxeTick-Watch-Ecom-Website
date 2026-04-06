// import jwt from "jsonwebtoken";

// const authMiddleware = (req, res, next) => {
//   try {
//     const authHeader = req.headers.authorization;

//     // check header
//     if (!authHeader || !authHeader.startsWith("Bearer ")) {
//       return res.status(401).json({ message: "No token provided" });
//     }

//     // extract token
//     const token = authHeader.split(" ")[1];

//     // verify token
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     console.log(`id from middleware ${decoded}`);
//     // attach user to request
//     req.user = {
//       id: decoded.id,
//     };

//     next();
//   } catch (error) {
//     console.error("Auth error:", error.message);
//     return res.status(401).json({ message: "Invalid token" });
//   }
// };

// export default authMiddleware;
import jwt from "jsonwebtoken";
import User from "../Models/user.js"

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // decoded may contain entire payload, let's log safely
    console.log("Decoded token:", decoded);

    // Fetch user from DB to ensure it exists
    const user = await User.findById(decoded.id).select("_id name email");
    if (!user) return res.status(401).json({ message: "User not found" });

    // Attach user to request
    req.user = { id: user._id.toString(), name: user.name, email: user.email };

    console.log("id from middleware:", req.user.id); // ✅ now logs proper ID

    next();
  } catch (error) {
    console.error("Auth error:", error.message);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

export default authMiddleware;