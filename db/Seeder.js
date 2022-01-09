const casual = require('casual');
const buildPolicyModel = require("./models/testPolicyModel");

class Seeder {
	/**
	 * @param {number} [numEntries=100] - set how many entries would be generated and saved to MongoDB
	 * @param {number} [numEntriesWithKnownValues=50] - numEntriesWithKnownValues - set how many entries with known values would be generated and saved to MongoDB
	 * @returns {Promise<void>}
	 */
	static async seed(numEntries = 100, numEntriesWithKnownValues = 50) {
		let docs = [];

		for(let counter = 0; counter < numEntries; counter++) {
			const document = this.#composeDocument();
			docs.push(document);
		}

		for(let counter = 0; counter < this.numEntriesWithKnownValues; counter++) {
			const document = this.#composeDocsWithKnownValues();
			docs.push(document);
		}

		console.log(`Trying to bulk save total ${docs.length} documents`);
		const policyModel = await buildPolicyModel();
		await policyModel.insertMany(docs);
	}

	/**
	 * @returns {JSON} Object that contain name, policyNo, email, regNumber, phone and timestamp
	 */
	static #composeDocument() {
		return {
			name: casual.full_name,
			policyNo: casual.integer(100000, 999999).toString().padStart(10, '0'),
			email: casual.email,
			regNumber: 'CB1234AA', //just random reg number
			phone: casual.phone,
			timestamp: new Date()
		}
	}

	/**
	 * @returns {JSON} Object that contain name, policyNo, email, regNumber, phone and timestamp
	 */
	static #composeDocsWithKnownValues() {
		return {
			name: 'Ivan Ivanov',
			policyNo: casual.integer(100000, 999999).toString().padStart(10, '0'),
			email: 'ivan.ivanov@example.com',
			regNumber: 'CB1234AA', //just random reg number
			phone: casual.phone,
			timestamp: new Date()
		}
	}
}

module.exports = Seeder;