export const randomColor = (type: 'hex' | 'rgb'): string => {
  if (type === 'hex') {
    return `#${Math.round(Math.random() * 16_777_216).toString(16)}`;
  }
  return `rgb(${Math.round(Math.random() * 256)}, ${Math.round(
    Math.random() * 256,
  )}, ${Math.round(Math.random() * 256)})`;
};
