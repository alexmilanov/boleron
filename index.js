const Seeder = require("./db/Seeder");
const Fetcher = require("./db/Fetcher");
const process = require('process');

//IIFE so we can use async/await
(async () => {
    try {
        //step 1 - seed the db with randomly generated docs
        const DOCUMENTS_COUNT = 10000;
        const DOCUMENTS_WITH_KNOWN_VALUES = 50;
        await Seeder.seed(DOCUMENTS_COUNT, DOCUMENTS_WITH_KNOWN_VALUES);
        console.log(`Successfully saved ${DOCUMENTS_COUNT}`);

        //step 2 - fetch the first 50 documents that contain string XXXX (match )
        const searchString = 'Ivan';
        const docs = await Fetcher.fetch(searchString);
        console.log(`Showing all documents that contain '${searchString}': `);
        console.log(docs);
        console.log("Everything is done, now exit...")
        process.exit(0);
    }
    catch(e) {
        console.log("Oops, something went wrong");
        console.log(e);
        process.exit(42);
    }
})();
