import { EntitySchema } from "typeorm";

export const ProductOrderSchema = new EntitySchema({
	name: "ProductOrder",
	tableName: "product_orders",
	columns: {
		id: {
			primary: true,
			type: "uuid",
			generated: "uuid",
		},
		order_code: {
			type: "varchar",
		},
		quantity: {
			type: "int",
			default: 1,
		},
		amount_price: {
			type: "float",
			default: 0,
		},
	},
	relations: {
		order: {
			target: "Order",
			type: "many-to-one",
			joinColumn: {
				name: "order_id",
				referencedColumnName: "id",
			},
		},
		product: {
			target: "Product",
			type: "many-to-one",
			joinColumn: {
				name: "product_id",
				referencedColumnName: "id",
			},
		},
	},
});
