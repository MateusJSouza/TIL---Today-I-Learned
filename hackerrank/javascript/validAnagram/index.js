const isAnagram = (s, t) => {
  const isEqual = s.length === t.length
  if (!isEqual) return false

  return reorder(s) === reorder(t)
};

const reorder = (str) => str
  .split('')
  .sort((a, b) => a.localeCompare(b))
  .join('')