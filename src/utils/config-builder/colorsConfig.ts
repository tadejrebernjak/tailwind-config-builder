import { Color, ColorVariant } from '../../types/colorsTypes';
import { formatAttribute } from './configBuilder';

const mapVariants = (variants: ColorVariant[]) => {
  return variants.map((variant: ColorVariant) => `\n          ${variant.tag}: '${variant.colorCode}'`);
};

const mapColors = (colors: Color[]) => {
  return colors.map(({ name, variants }: Color) => {
    if (variants.length === 0) {
      return '';
    }

    if (variants.length < 2) {
      return `\n        ${formatAttribute(name)}: '${variants[0].colorCode}'`;
    }

    return `\n        ${formatAttribute(name)}: {${mapVariants(variants)}
        }`;
  });
};

const generateColorsConfig = (colors: Color[]) => {
  if (colors.length === 0) {
    return '';
  }

  const colorConfig = `\n      colors: {${mapColors(colors)}
      },`;

  return colorConfig;
};

export default generateColorsConfig;
