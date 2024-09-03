document.addEventListener("DOMContentLoaded", () => {
	// Ambil data produk dari elemen script
	const productsData = JSON.parse(
		document.getElementById("products-data").textContent
	);

	// Tangani klik tombol edit
	document.querySelectorAll('button[data-action="edit"]').forEach((button) => {
		button.addEventListener("click", (event) => {
			let productId = event.target.getAttribute("data-id");

			// Temukan produk yang sesuai dengan ID
			let product = productsData.find((p) => p.id === productId);

			if (product) {
				// Isi form dengan data produk
				document.querySelector('input[name="name"]').value = product.name;
				document.querySelector('select[name="category_id"]').value =
					product.category_id;
				document.querySelector('input[name="weight"]').value = product.weight;
				document.querySelector('input[name="stock"]').value = product.stock;
				document.querySelector('input[name="unit_price"]').value =
					product.unit_price;
				document.querySelector('input[name="sell_price"]').value =
					product.sell_price;
				document.querySelector('input[name="description"]').value =
					product.description;

				// Ubah action form untuk pengeditan
				document
					.querySelector("form")
					.setAttribute("action", `/api/products/${productId}`);
				document.querySelector("form").setAttribute("method", "PUT");
				document.querySelector('button[type="submit"]').textContent =
					"Update Product";

				let methodInput = document.createElement("input");
				methodInput.setAttribute("type", "hidden");
				methodInput.setAttribute("name", "_method");
				methodInput.setAttribute("value", "PUT");
				document.querySelector("form").appendChild(methodInput);

				document.querySelector('button[type="submit"]').textContent =
					"Update Product";
			}
		});
	});
});
