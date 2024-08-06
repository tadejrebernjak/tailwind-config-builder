import { v4 } from 'uuid';

import { Color, ColorVariant } from '../types/colorsTypes';

export const getTextColor = (bgColor: string): string => {
  const hex = bgColor.replace('#', '');

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  return luminance > 0.5 ? '#000000' : '#FFFFFF';
};

export const createNewColor = (colors: Color[]): Color => {
  const newColor: Color = {
    id: v4(),
    createdAt: new Date(),
    name: `Color ${colors.length + 1}`,
    variants: [{ id: v4(), tag: undefined, colorCode: '#ffffff' }],
  };

  return newColor;
};

export const editColorName = (colors: Color[], colorID: string, newName: string) => {
  const color = colors.find((color) => color.id === colorID);

  if (!color) {
    return colors;
  }

  color.name = newName;

  return colors;
};

export const addNewVariantToColor = (colors: Color[], colorID: string): Color[] => {
  const color = colors.find((color) => color.id === colorID);

  if (!color) {
    return colors;
  }

  if (color.variants.length === 1) {
    color.variants[0].tag = '100';
  }

  const newVariant: ColorVariant = {
    id: v4(),
    colorCode: color.variants[0].colorCode,
    tag: ((color.variants.length + 1) * 100).toString(),
  };

  color.variants.push(newVariant);

  return [...colors.filter((color) => color.id !== colorID), color].sort(
    (a, b) => a.createdAt.getTime() - b.createdAt.getTime(),
  );
};

export const changeVariantColor = (colors: Color[], colorID: string, variantID: string, newColor: string) => {
  const color = colors.find((color) => color.id === colorID);
  if (!color) {
    return colors;
  }

  const variant = color.variants.find((variant) => variant.id === variantID);
  if (!variant) {
    return colors;
  }

  variant.colorCode = newColor;

  return colors;
};
