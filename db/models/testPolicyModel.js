const mongoose = require("mongoose");
const policySchema = require("../schemas/testPolicySchema");
const Connector = require("../connector/Connector");

/**
 * @returns {mongoose.Model}
 */
async function buildPolicyModel() {
    await Connector.connect();
    const policyModel = mongoose.model('policyModel', policySchema);
    await policyModel.createIndexes();
    return policyModel;
}

module.exports = buildPolicyModel;
