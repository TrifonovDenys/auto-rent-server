import express from "express";
const router = express.Router()

router.get("/", ctrl.getAll);

export default router