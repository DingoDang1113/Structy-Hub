const substituteSynonyms = (sentence, synonyms) => {
  const words = sentence.split(' ');
  const final = generate(words, synonyms);
  return final.map(sub => sub.join(' '));


};


const generate = (words, synonyms) => {
  if (words.length === 0) return [[]];


  const firstWord = words[0];
  const remaining = words.slice(1);


  if (firstWord in synonyms) {
    const result = [];
    const subArrays = generate(remaining, synonyms);
    for (let synonym of synonyms[firstWord]) {
      for (let subArray of subArrays) {
        result.push([synonym, ...subArray]) 
      }
    }
    
    
    return result;
  } else {
    
    const result = [];
    const subArrays = generate(remaining, synonyms);


    for (let subArray of subArrays) {
      result.push([firstWord,...subArray]);
    }
    
    return result;
    
  }


  


  
}


module.exports = {
  substituteSynonyms,
};

