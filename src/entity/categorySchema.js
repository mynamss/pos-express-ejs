import { EntitySchema } from "typeorm";

export const CategorySchema = new EntitySchema({
	name: "Category",
	tableName: "categories",
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
	},
	relations: {
		product: {
			target: "Product",
			type: "one-to-many",
			inverseSide: "category",
		},
	},
});
