import { Table, TableForeignKey } from "typeorm";

export default class Order1725188715885 {
	async up(queryRunner) {
		await queryRunner.createTable(
			new Table({
				name: "orders",
				columns: [
					{
						name: "id",
						type: "uuid",
						isPrimary: true,
						isGenerated: true,
						generationStrategy: "uuid",
					},
					{
						name: "admin_id",
						type: "uuid"
					},
					{
						name: "payment_method_id",
						type: "uuid"
					},
					{
						name: "customer_name",
						type: "varchar",
					},
					{
						name: "payment_time",
						type: "timestamp without time zone",
					},
					{
						name: "total_price",
						type: "float",
						default: 0,
					},
					{
						name: "amount_paid",
						type: "float",
						default: 0,
					},
					{
						name: "discount",
						type: "float",
						default: 0,
					},
					{
						name: "change",
						type: "float",
						default: 0,
					},
					{
						name: "status",
						type: "enum",
						enum: ["paid", "unpaid", "pending", "canceled"],
						default: "'pending'",
					},
				],
			})
		);
		await queryRunner.createForeignKey(
			"orders",
			new TableForeignKey({
				columnNames: ["admin_id"],
				referencedColumnNames: ["id"],
				referencedTableName: "admins",
			})
		);
		await queryRunner.createForeignKey(
			"orders",
			new TableForeignKey({
				columnNames: ["payment_method_id"],
				referencedColumnNames: ["id"],
				referencedTableName: "payment_methods",
			})
		);
	}

	async down(queryRunner) {
		// await queryRunner.dropTable("orders");
		let table = await queryRunner.getTable("orders");
		let foreignKey = table.foreignKeys.find(
			(fk) => fk.columnNames.indexOf("admin_id") !== -1
		);
		await queryRunner.dropForeignKey("orders", foreignKey);

		table = await queryRunner.getTable("orders");
		foreignKey = table.foreignKeys.find(
			(fk) => fk.columnNames.indexOf("payment_method_id") !== -1
		);
		await queryRunner.dropForeignKey("orders", foreignKey);

		await queryRunner.dropTable("orders");
	}
}
