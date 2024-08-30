import { Router } from "express";
const router = Router();

// register
router.get("/register", (req, res) => {
	res.render("register.ejs", { titlePage: "Register Admin" });
});

router.post("/register", (req, res) => {
	res.render("register.ejs", { titlePage: "Register Admin" });
});

// login
router.get("/login", (req, res) => {
	console.log("MASUK GET");
	res.render("login.ejs", { titlePage: "Login Admin" });
});

router.post("/login", (req, res) => {
	const { email, password } = req.body;
	console.log("POST", req.body);
	if (email && password) {
		res.redirect("/api/");
	} else {
		res.render("login.ejs", { titlePage: "Login Admin" });
	}
});

export default router;
