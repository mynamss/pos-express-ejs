import { Table } from "typeorm";

export default class Category1725116259338 {
	async up(queryRunner) {
		await queryRunner.createTable(
			new Table({
				name: "categories",
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
					}
				],
			})
		);
	}

	async down(queryRunner) {
		await queryRunner.dropTable("categories");
	}
}
