export const randomNumber = (min = 0, max = 1) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const getRandomArrayElement = (array: any[]) =>
  array[randomNumber(0, array.length - 1)];

export const range = (min: number, max: number, step = 1) =>
  Array.from({ length: (max - min) / step + 1 }, (_, i) => min + i * step);
