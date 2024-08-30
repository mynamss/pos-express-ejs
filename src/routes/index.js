import { Router } from "express";

import authRouter from "./auths.js";
import productRouter from "./products.js";
import transactionRouter from "./transactions.js";

const router = Router();

router.get("/", (req, res) => {
	res.render("index.ejs", { titlePage: "Dashboard" });
});

router.use("/auth", authRouter);
router.use("/products", productRouter);
router.use("/transactions", transactionRouter);

export default router;
