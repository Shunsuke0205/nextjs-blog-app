// define the function to hash the id
const hash = (s: string): number => {
  let hashNumber = 0;
  if (s.length == 0) {
    return hashNumber;
  }
  for (let i = 0; i < s.length; ++i) {
    const char = s.charCodeAt(i);
    hashNumber = (hashNumber * 31 + char);
  }
  return hashNumber;
}

export { hash };
