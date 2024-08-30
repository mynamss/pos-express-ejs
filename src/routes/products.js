import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
	res.render("product.ejs", { titlePage: "Products" });
});

export default router;
