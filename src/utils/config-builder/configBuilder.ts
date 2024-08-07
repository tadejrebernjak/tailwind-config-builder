import { Color } from '@/types/colorsTypes';
import { isEmpty } from '@/utils/arrays';
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

export const generateConfig = (colors: Color[]) => {
  if (isEmpty(colors)) {
    return DEFAULT_CONFIG;
  }

  return DEFAULT_CONFIG.replace(
    'extend: {}',
    `extend: {${generateColorsConfig(colors)}
    }`,
  );
};
