// Good Luck 💪🏾
function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  
  console.log(removeDuplicates([1, 0, 1, 0])); // [1, 0]
  console.log(removeDuplicates(["New", "York", "City"])); // ["New", "York", "City"]
  console.log(removeDuplicates(["Hassan", "Aisha", "Aisha"])); // ["Hassan", "Aisha"]
  