import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
	res.render("transaction.ejs", { titlePage: "Transactions" });
});

export default router;
