import express from "express";
import morgan from "morgan";

const app = express();

// Import routes
import userRoutes from "./routes/users.routes.js";
import semesterRoutes from "./routes/semesters.routes.js";
import courseRoutes from "./routes/course.routes.js";
import taskRoutes from "./routes/tasks.routes.js";

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/semesters", semesterRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/tasks", taskRoutes);

export default app;
