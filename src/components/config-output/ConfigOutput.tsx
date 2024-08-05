import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const TEMP_CONFIG = `import { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
`;

const ConfigOutput: React.FC = () => {
  return (
    <div className="flex w-full justify-center">
      <SyntaxHighlighter language="typescript" style={vs2015}>
        {TEMP_CONFIG}
      </SyntaxHighlighter>
    </div>
  );
};

export default ConfigOutput;
