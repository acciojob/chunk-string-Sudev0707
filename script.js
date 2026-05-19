function chunkString(str, len) {
  if (str === null) return [];
  
  const result = [];
  for (let i = 0; i < str.length; i += len) {
    result.push(str.slice(i, i + len));
  }
  return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
