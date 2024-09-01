import { Table } from "typeorm";

export default class Admin1725188676274 {
	async up(queryRunner) {
		await queryRunner.createTable(
			new Table({
				name: "admins",
				columns: [
					{
						name: "id",
						type: "uuid",
						isPrimary: true,
						isGenerated: true,
						generationStrategy: "uuid",
					},
					{
						name: "fullname",
						type: "varchar",
					},
					{
						name: "username",
						type: "varchar",
					},
					{
						name: "email",
						type: "varchar",
						isUnique: true,
					},
					{
						name: "password",
						type: "varchar",
						length: 20,
					},
					{
						name: "phone",
						type: "varchar",
						length: 15,
					},
					{
						name: "birthdate",
						type: "date",
					},
					{
						name: "gender",
						type: "enum",
						enum: ["male", "female"],
						isNullable: true,
					},
					{
						name: "status",
						type: "enum",
						enum: ["active", "inactive"],
						default: "'active'",
					},
				],
			})
		);
	}

	async down(queryRunner) {
		await queryRunner.dropTable("admins");
	}
}
