import { Table, TableForeignKey } from "typeorm";

export default class Product1725188704323 {
	async up(queryRunner) {
		await queryRunner.createTable(
			new Table({
				name: "products",
				columns: [
					{
						name: "id",
						type: "uuid",
						isPrimary: true,
						isGenerated: true,
						generationStrategy: "uuid",
					},
					{
						name: "category_id",
						type: "uuid",
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
					{
						name: "weight",
						type: "float",
						default: 0,
					},
					{
						name: "stock",
						type: "int",
						default: 0,
					},
					{
						name: "unit_price",
						type: "float",
						default: 0,
					},
					{
						name: "sell_price",
						type: "float",
						default: 0,
					},
					{
						name: "description",
						type: "text",
						isNullable: true,
					},
				],
			})
		);

		await queryRunner.createForeignKey(
			"products",
			new TableForeignKey({
				columnNames: ["category_id"],
				referencedColumnNames: ["id"],
				referencedTableName: "categories",
			})
		);
	}

	async down(queryRunner) {
		// await queryRunner.dropTable("products");

		const table = await queryRunner.getTable("products");
		const foreignKey = table.foreignKeys.find(
			(fk) => fk.columnNames.indexOf("category_id") !== -1
		);
		await queryRunner.dropForeignKey("products", foreignKey);
		await queryRunner.dropTable("products");
	}
}
