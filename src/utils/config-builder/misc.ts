const capitalize = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const formatAttribute = (attribute: string) => {
  const name = attribute.toLowerCase();
  const words = name.replace(/\s\s+/g, ' ').split(' ');

  const formattedName = words.map((word, index) => (index !== 0 ? capitalize(word) : word)).join('');
  return formattedName;
};
