function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  return dna.replace(/T/g, "U");
}

// replace() -> substitui a palavra T por U, pois no RNA não contém timina (T)
// /T/g -> é uma expressão regular (Regex) que substituirá globalmente cada instância T e a substituirá por U