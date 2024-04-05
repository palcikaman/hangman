export const getRandomArrayElement = (array: any[]) =>
  array[(array.length * Math.random()) | 0];
