export const catchErrors = (func) => {
  return function (...args) {
    return func(...args).catch((err) => {
      console.error(err);
    });
  };
};
