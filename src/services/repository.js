import dataSource from "../configs/database.js";

const getAllData = async (entitySchema) => {
	try {
		const schemaRepository = dataSource.getRepository(entitySchema);

		const allDatas = await schemaRepository.find();

		return allDatas;
	} catch (error) {
		console.log("ERROR BOSS: ", error);
	}
};

const insertData = async (entitySchema, data) => {
	try {
		const schemaRepository = dataSource.getRepository(entitySchema);

		const newProduct = await schemaRepository.insert(data);

		return newProduct;
	} catch (error) {
		console.log("ERROR BOSS: ", error);
	}
};

export { getAllData, insertData };
