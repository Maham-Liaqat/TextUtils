export const textOperations = {
  toUppercase: (text) => text.toUpperCase(),
  toLowercase: (text) => text.toLowerCase(),
  capitalize: (text) => {
    return text
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  },
  removeExtraSpaces: (text) => {
    return text.replace(/\s+/g, ' ').trim();
  },
  // Add more operations here
  reverseText: (text) => {
    return text.split('').reverse().join('');
  },
  countWords: (text) => {
    return text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
  },
  countCharacters: (text) => {
    return text.length;
  },
  estimateReadingTime: (text) => {
    const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
    return Math.ceil(wordCount / 200); // 200 wpm average
  },
};