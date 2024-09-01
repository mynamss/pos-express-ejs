import { EntitySchema } from "typeorm";

export const PaymentMethodSchema = new EntitySchema({
	name: "PaymentMethod",
	tableName: "payment_methods",
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
			target: "products",
			type: "one-to-many",
			inverseSide: "payment_method"
		}
	}
});
