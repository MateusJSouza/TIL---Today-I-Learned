function isValid(s, stack = []) {
  for (const brackets of s.split('')) {
    const isParenthesis = brackets === '(';
    if (isParenthesis) stack.push(')');

    const isCurlyBrace = brackets === '{';
    if (isCurlyBrace) stack.push('}');

    const isSquareBracket = brackets === '[';
    if (isSquareBracket) stack.push(']');

    const isOpenPair = isParenthesis || isCurlyBrace || isSquareBracket;
    if (isOpenPair) continue;

    const isEmpty = !stack.length;
    const isWrongPair = stack.pop() !== brackets;
    const isInvalid = isEmpty || isWrongPair;
    if (isInvalid) return false;
  }

  return (stack.length === 0);
}