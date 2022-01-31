export const catchErrors = (func) => {
  return function (...args) {
    return func(...args).catch((err) => {
      console.error(err);
    });
  };
};

export const formatDuration = (ms) => {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};