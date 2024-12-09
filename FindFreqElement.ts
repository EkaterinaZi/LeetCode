//For example: Input: [1, 2, 1, 2, 3, 4, 5, 6, 7]
//Output: 1 or 2
//Input: []
//Output: null
//Input: [3, 1, -4, -4, -4, 2, 2, -4, -4]
//Output: -4

function findFrequentElement(array: number[]): number | null {
    let counter = new Map<number, number>();
        if(array.length === 0){
            return null 
        }
        for (let i = 0; i < array.length; i++) {
            if (!counter.has(array[i])) {
                counter.set(array[i], 1);
                } else {
                counter.set(array[i], (counter.get(array[i]) || 0) + 1); 
                }
        }
    let biggestValue = 0;
    let k;
    for (const [key, value] of counter) {
      if (value > biggestValue) {
        biggestValue = value;
        k = key;
      }
    }
  
    return k;
}
   

  console.log(findFrequentElement([]));
  