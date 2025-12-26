import { Router } from "express";
import auth from "../../middleware/auth";
import { vehiclesController } from "./vehicles.contoller";

const router = Router();

router.post("/", auth("admin"), vehiclesController.createVehicles);
router.get("/", vehiclesController.getVehicles);
router.get("/:id", vehiclesController.getSingleVehicles);
router.put("/:id", auth("admin"), vehiclesController.updateVehicles);
router.delete(
  "/:id",
  auth("admin"),
  vehiclesController.deleteVehicles
);

export const vehiclesRoute = router;