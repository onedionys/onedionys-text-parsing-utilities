/**
 * ParseText utility function to parse text and extract specific information.
 * @param {string} text - The text to be parsed.
 * @returns {Object} An object containing the parsed information.
 */
function parseText(text) {
    // Implement parsing logic here
    // Example parsing logic:
    const words = text.split(' ');
    const wordCount = words.length;
    const characters = text.length;
    const sentences = text.split(/[.!?]/).filter(Boolean).length;

    return {
        wordCount,
        characters,
        sentences
    };
}

module.exports = {
    parseText
};
