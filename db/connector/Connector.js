const mongoose = require("mongoose");
const cfg = require('../../cfg/cfg.json');

class Connector {
    static #connection;

    /**
	 * @returns {Promise<typeof mongoose>}
	 */
    static async connect() {
        if(!this.#connection) {
            this.#connection = await mongoose.connect(cfg.db.connURI);
        }

        return this.#connection;
    }

    /**
	 * @returns {Promise<typeof mongoose>}
	 */
    static getConnection() {
        return this.#connection;
    }
}

module.exports = Connector;