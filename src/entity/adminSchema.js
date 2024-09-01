import { EntitySchema } from "typeorm";

export const AdminSchema = new EntitySchema({
	name: "Admin",
	tableName: "admins",
	columns: {
		id: {
			primary: true,
			type: "uuid",
			generated: "uuid",
		},
		fullname: {
			type: "varchar",
		},
		username: {
			type: "varchar",
		},
		email: {
			type: "varchar",
			unique: true,
		},
		password: {
			type: "varchar",
			length: 20,
		},
		phone: {
			type: "varchar",
			unique: true,
			length: 15,
		},
		birthdate: {
			type: "date",
		},
		gender: {
			type: "enum",
			enum: ["male", "female"],
			nullable: true,
		},
		status: {
			type: "enum",
			enum: ["active", "inactive"],
			default: "active",
		},
	},
	relations: {
		order: {
			target: "Order",
			type: "one-to-many",
			inverseSide: "admin",
		},
	},
});
