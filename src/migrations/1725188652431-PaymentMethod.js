import { Table } from "typeorm";

export default class PaymentMethod1725188652431 {
	async up(queryRunner) {
		await queryRunner.createTable(
			new Table({
				name: "payment_methods",
				columns: [
					{
						name: "id",
						type: "uuid",
						isPrimary: true,
						isGenerated: true,
						generationStrategy: "uuid",
					},
					{
						name: "code",
						type: "varchar",
						isUnique: true,
					},
					{
						name: "name",
						type: "varchar",
					},
				],
			})
		);
	}

	async down(queryRunner) {
		await queryRunner.dropTable("payment_methods");
	}
}
