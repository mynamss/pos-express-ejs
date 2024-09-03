import { Router } from "express";
import {
	getProducts,
	addProduct,
	updateProduct,
} from "../controllers/product.controller.js";
// import {authenticate } from '../middlewares/authentication.js'
// import {authorize } from '../middlewares/authentication.js'

const router = Router();

router.get("/", getProducts);
router.post("/", addProduct);
router.put("/:id", () => console.log("siap UPDATE"), updateProduct);

export default router;
