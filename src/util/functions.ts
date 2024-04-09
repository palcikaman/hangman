export const randomNumber = (min = 0, max = 1) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const getRandomArrayElement = (array: any[]) =>
  array[randomNumber(0, array.length - 1)];
