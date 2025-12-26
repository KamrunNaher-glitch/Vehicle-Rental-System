import { Router } from "express";
import { bookingController } from "./booking.controller";
import auth from "../../middleware/auth";

const router = Router();


router.post("/", auth("admin", "customer"), bookingController.createBookings);


router.get("/", auth("admin", "customer"), bookingController.getBookings);


router.put("/:id", auth("admin", "customer"), bookingController.updateBookings);

export const bookingRoute = router;
