import { EntitySchema } from "typeorm";

export const OrderSchema = new EntitySchema({
	name: "Order",
	tableName: "orders",
	columns: {
		id: {
			primary: true,
			type: "uuid",
			generated: "uuid",
		},
		customer_name: {
			type: "varchar",
		},
		payment_time: {
			type: "timestamp without time zone",
		},
		total_price: {
			type: "float",
			default: 0,
		},
		amount_paid: {
			type: "float",
			default: 0
		},
		discount: {
			type: "float",
			default: 0
		},
		change: {
			type: "float",
			default: 0
		},
		status: {
			type: "enum",
			enum: ["paid", "unpaid", "pending", "canceled"],
		},
	},
	relations: {
		admin: {
			target: "Admin",
			type: "many-to-one",
			joinColumn: {
				name: "admin_id",
				referencedColumnName: "id",
			},
		},
		payment_method: {
			target: "PaymentMethod",
			type: "many-to-one",
			joinColumn: {
				name: "payment_method_id",
				referencedColumnName: "id",
			},
		},
		product_order: {
			target: "ProductOrder",
			type: "one-to-many",
			inverseSide: "order",
		},
	},
});
