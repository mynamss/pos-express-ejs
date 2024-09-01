import { EntitySchema } from "typeorm";

export const entitySchema = new EntitySchema({
	name: "Product",
	tableName: "products",
	columns: {
		id: {
			primary: true,
			type: "uuid",
			generated: "uuid",
		},
		code: {
			type: "varchar",
			unique: true,
		},
		name: {
			type: "varchar",
		},
		weigth: {
			type: "float",
			default: 0
		},
		stock: {
			type: "int",
			default: 0
		},
		unit_price: {
			type: "float",
			default: 0
		},
		sell_price: {
			type: "float",
			default: 0
		},
		description: {
			type: "text",
			nullable: true
		},
	},
	relations: {
		category: {
			target: "Category",
			type: "many-to-one",
			joinColumn: {
				name: "category_id",
				referencedColumnName: "id",
			},
		},
		product_order: {
			target: "ProductOrder",
			type: "one-to-many",
			inverseSide: "product"
		}
	},
});
