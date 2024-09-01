import { Table, TableForeignKey } from "typeorm";

export default class ProductOrder1725188730757 {
	async up(queryRunner) {
		await queryRunner.createTable(
			new Table({
				name: "product_orders",
				columns: [
					{
						name: "id",
						type: "uuid",
						isPrimary: true,
						isGenerated: true,
						generationStrategy: "uuid",
					},
					{
						name: "product_id",
						type: "uuid",
					},
					{
						name: "order_id",
						type: "uuid",
					},
					{
						name: "order_code",
						type: "varchar",
					},
					{
						name: "quantity",
						type: "int",
						default: 1,
					},
					{
						name: "amount_price",
						type: "float",
						default: 0,
					},
				],
			})
		);

		await queryRunner.createForeignKey(
			"product_orders",
			new TableForeignKey({
				columnNames: ["product_id"],
				referencedColumnNames: ["id"],
				referencedTableName: "products",
			})
		);
		await queryRunner.createForeignKey(
			"product_orders",
			new TableForeignKey({
				columnNames: ["order_id"],
				referencedColumnNames: ["id"],
				referencedTableName: "orders",
			})
		);
	}

	async down(queryRunner) {
		let table = await queryRunner.getTable("product_orders");
		let foreignKey = table.foreignKeys.find(
			(fk) => fk.columnNames.indexOf("product_id") !== -1
		);
		await queryRunner.dropForeignKey("product_orders", foreignKey);

		table = await queryRunner.getTable("product_orders");
		foreignKey = table.foreignKeys.find(
			(fk) => fk.columnNames.indexOf("order_id") !== -1
		);
		await queryRunner.dropForeignKey("product_orders", foreignKey);

		await queryRunner.dropTable("product_orders");
	}
}
