import express, { Request, Response } from "express";
import { authRouter } from "./modules/auth/auth.route";
import { userRoutes } from "./modules/users/users.route";
import { vehiclesRoute } from "./modules/vehicles/vehicles.route";
import { bookingRoute } from "./modules/bookinngs/booking.route";
import initDB from "./config/db";



const app = express();

// parser
app.use(express.json());

initDB();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world!!");
});

app.use("/api/v1/auth",authRouter );
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/vehicles", vehiclesRoute);
app.use("/api/v1/bookings", bookingRoute);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
    path: req.path,
  });
});
export default app;