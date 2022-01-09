const mongoose = require("mongoose");
const { Schema } = mongoose;

const policySchema = new Schema ({
	name: String,
	policyNo: String,
	email: String,
	regNumber: String,
	phone: String,
	timestamp: Date
});

policySchema.index({'$**': 'text'});

module.exports = policySchema;
