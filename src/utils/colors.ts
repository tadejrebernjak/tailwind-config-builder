import { v4 } from 'uuid';

import { Color, ColorVariant } from '@/types/colorsTypes';
import { getLastItem, isEmpty } from './arrays';

const DEFAULT_COLOR_CODE = '#ffffff';

const getColorVariantTag = (index: number) => {
  if (index === 0) {
    return '50';
  }

  if (index === 10) {
    return '950';
  }

  return (index * 100).toString();
};

export const getVisibleForegroundColor = (backgroundColor: string) => {
  const hex = backgroundColor.replace('#', '');

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
    variants: [{ id: v4(), tag: '50', colorCode: DEFAULT_COLOR_CODE }],
  };

  return newColor;
};

export const removeColorByID = (colors: Color[], colorID: string) => {
  return colors.filter((color) => color.id !== colorID);
};

export const editColorName = (colors: Color[], colorID: string, newName: string) => {
  const color = colors.find((color) => color.id === colorID);
  if (!color) {
    return colors;
  }

  color.name = newName;

  return colors;
};

export const addColorVariant = (colors: Color[], colorID: string): Color[] => {
  const color = colors.find((color) => color.id === colorID);
  if (!color) {
    return colors;
  }

  const colorCode = getLastItem(color.variants)?.colorCode ?? DEFAULT_COLOR_CODE;

  const newVariant: ColorVariant = {
    id: v4(),
    colorCode,
    tag: getColorVariantTag(color.variants.length),
  };

  color.variants.push(newVariant);

  return [...colors.filter((color) => color.id !== colorID), color].sort(
    (a, b) => a.createdAt.getTime() - b.createdAt.getTime(),
  );
};

export const removeColorVariant = (colors: Color[], colorID: string, variantID: string) => {
  const color = colors.find((color) => color.id === colorID);
  if (!color) {
    return colors;
  }

  color.variants = color.variants.filter((variant) => variant.id !== variantID);

  if (isEmpty(color.variants)) {
    return removeColorByID(colors, colorID);
  }

  color.variants = color.variants.map((variant, index) => ({
    id: variant.id,
    tag: getColorVariantTag(index),
    colorCode: variant.colorCode,
  }));

  return colors;
};

export const editColorVariant = (colors: Color[], colorID: string, variantID: string, newColor: string) => {
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
