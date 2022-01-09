const buildPolicyModel = require("../db/models/testPolicyModel");

class Fetcher {
    /**
	 * @param {string} [filter=''] - set a filter to search for in Mongo
	 * @returns {Promise<void>}
	 */
    static async fetch(filter = '') {
        const policyModel = await buildPolicyModel();
        return await policyModel.find({$text: {$search: filter}}).sort('-timestamp').exec();
    }
}

module.exports = Fetcher;