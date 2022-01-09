/**
 * @param {string} inputText - return true if inputText is string, false otherwise
 * @returns {Boolean}
 */
function isString(inputText){
    if(typeof inputText === 'string' || inputText instanceof String) {
        return true;    
    }

    return false;
}

module.exports = {
    isString
};