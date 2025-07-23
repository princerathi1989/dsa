function two_sum(numbers, target) {
  const numMap = new Map();
  
  for(let i=0; i< numbers.length; i++) {
      const complement = target - numbers[i];
      
      if(numMap.has(complement)){
          return [numMap.get(complement), i]
      }
      numMap.set(numbers[i], i)
      
  }
  return [-1,-1];
}