import { Router } from "express";
import sessionRoutes from "./sessionRoutes"; // Import session-related routes
import flowRoutes from "./flowRoutes"; // Import flow-related routes
import unitRoutes from "./unitRoutes";
import dbRoutes from "./dbRoutes";
import logRoutes from "../routes/logRoutes"; // Add this import
import configRoutes from "./configRoute";

const router = Router();

// Mount session-related routes
router.use("/sessions", sessionRoutes);
router.use("/flow", flowRoutes);

router.use("/unit", unitRoutes);
router.use("/db", dbRoutes);
router.use("/logs", logRoutes); // Add this line
router.use("/config", configRoutes);

export default router;
