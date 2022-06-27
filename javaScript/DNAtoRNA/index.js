function DNAtoRNA(dna) {
 
  // create a function which returns an RNA sequence from the given DNA sequence
  
  while(dna.indexOf('T') !== -1 ){
    dna = dna.replace('T', 'U');
  }
  
  return dna;

}