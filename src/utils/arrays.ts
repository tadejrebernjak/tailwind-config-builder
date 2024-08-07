export const getLastItem = <T>(array: T[]): T | undefined => {
  return array[array.length - 1];
};

export const isEmpty = <T>(array: T[]) => {
  return array.length === 0;
};
