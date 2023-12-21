/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  let myMap = new Map();
  for(let i = 0; i < str1.length; i++) {
    if(myMap.has(str1[i])) {
      myMap.set(str1[i], myMap.get(str1[i])+1);
    }
    else {
      myMap.set(str1[i], 1);
    }
  }

  for(let i=0; i<str2.length; i++) {
    if(myMap.has(str2[i])) {
      if(myMap.get(str2[i]) == 0 ) return false;
      else {
        myMap.set(str2[i], myMap.get(str2[i]) -1);
      }
    }
    else return false;
  }

  for( let [key, value] of myMap) {
    if(value != 0) return false;
  }
  return true;
}


module.exports = isAnagram;
