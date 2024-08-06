const substituteSynonyms = (sentence, synonyms) => {
  // split sentence by words 
  const words = sentence.split(' ');
  // helper function to recursively populate the sentence
  const final = generate(words, synonyms);
  return final.map(sub => sub.join(' '))
};


const generate = (words, synonyms) => {
  //basecase words is empty 
  if (words.length === 0) return [[]]; 


  const firstWord = words[0]; 
  const remaining = words.slice(1);


  // if first word is in synonyms, iterate every word to sentence
  if (firstWord in synonyms) {
    const result = []; 
    const subarrays = generate(remaining, synonyms);
    for (let synonym of synonyms[firstWord]) {
      for (let subarray of subarrays) {
        result.push([synonym, ...subarray])
      }
    }
    return result;
    
  } else {
    const result = []; 
    const subarrays = generate(remaining, synonyms);
    for (let subarray of subarrays) {
      result.push([firstWord, ...subarray])
    }
    return result;
  }


  
}


module.exports = {
  substituteSynonyms,
};

