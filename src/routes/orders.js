import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    // Contoh data pesanan (seharusnya diambil dari database)
    const orders = [
        { id: '12345', customerName: 'John Doe', date: '2024-08-28', status: 'Completed', total: 150.00 },
        { id: '12346', customerName: 'Jane Smith', date: '2024-08-28', status: 'Pending', total: 200.00 },
        // Tambahkan pesanan lainnya di sini
    ];
	res.render("order.ejs", { titlePage: "Orders", orders : orders });
});

export default router;
