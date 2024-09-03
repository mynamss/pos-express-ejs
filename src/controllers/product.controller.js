import { getAllData, insertData } from "../services/repository.js";

// entity
import Product from "../entity/productSchema.js";
import Category from "../entity/categorySchema.js";

export const getProducts = async (req, res) => {
	try {
		const products = await getAllData(Product);
		const categories = await getAllData(Category);
		res.render("product.ejs", {
			titlePage: "Products",
			products,
			categories,
		});
	} catch (error) {
		console.log("ERROR GET DATA: ", error);
	}
};

export const addProduct = async (req, res) => {
	try {
		const inputData = req.body;

		// generate code
		let productCode =
			inputData.category_id.substring(0, 2).toUpperCase() + Date.now();

		const data = {
			code: productCode,
			category_id: inputData.category_id,
			name: inputData.name,
			weight: Number(inputData.weight),
			stock: parseFloat(inputData.stock),
			unit_price: parseFloat(inputData.unit_price),
			sell_price: parseFloat(inputData.sell_price),
			description: inputData.description,
		};

		const newProduct = await insertData(Product, data);

		if (!newProduct) {
			throw error;
		}

		res.redirect("/api/products");
	} catch (error) {
		console.log("ERROR INSERT DATA: ", error);
	}
};

export const getProductById = async (req, res) => {};

export const updateProduct = async (req, res) => {
	try {
		console.log("Masuk sini", req.params.id);
	} catch (error) {}
};

export const deleteProduct = async (req, res) => {
	try {
	} catch (error) {}
};
