import { Color } from '../../types/colorsTypes';
import generateColorsConfig from './colorsConfig';

const DEFAULT_CONFIG = `import { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
`;

const capitalize = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const formatAttribute = (attribute: string) => {
  const name = attribute.toLowerCase();
  const words = name.replace(/\s\s+/g, ' ').split(' ');

  const formattedName = words.map((word, index) => (index !== 0 ? capitalize(word) : word)).join('');
  return formattedName;
};

export const generateConfig = (colors: Color[]) => {
  if (colors.length === 0) {
    return DEFAULT_CONFIG;
  }

  return DEFAULT_CONFIG.replace(
    'extend: {}',
    `extend: {${generateColorsConfig(colors)}
    }`,
  );
};
