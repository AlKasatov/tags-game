export const getRandomInteger = (min:number, max:number) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};
