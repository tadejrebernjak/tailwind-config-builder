import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import useColorsStore from '../../store/colors/colorsStore';
import { generateConfig } from '../../utils/config-builder/configBuilder';

const ConfigOutput: React.FC = () => {
  const { colors } = useColorsStore();

  const config = generateConfig(colors);

  return (
    <div className="flex w-full justify-center">
      <SyntaxHighlighter language="typescript" style={vs2015}>
        {config}
      </SyntaxHighlighter>
    </div>
  );
};

export default ConfigOutput;
