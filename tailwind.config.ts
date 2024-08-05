import { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        vscode: '#1e1e1e',
      },
    },
  },
  plugins: [],
};

export default config;
