// input 121
//output true
//input 4565
// output false


function isPalindrom(array: string[]):boolean{
    let iL = 0;
    let iR = array.length - 1;
while(iL < iR){
    if (array[iL] === array[iR]){
        iL ++;
        iR --;
    }else{
return false
    } 
}
    return true
}

function isPossiblePalindrom(str: string):boolean{
    const array = Array.from(str)
     let leftLetterIndex = 0;
     let rightLetterIndex = array.length - 1;
     let oneLetterDeleted = 0;

     while (leftLetterIndex < rightLetterIndex && oneLetterDeleted < 2){
        if (array[leftLetterIndex] === array[rightLetterIndex]){
            leftLetterIndex ++;
            rightLetterIndex --;
        }else{
        const arrayWithoutLeft = array.slice(leftLetterIndex + 1, rightLetterIndex + 1);
        const arrayWithoutRight = array.slice(leftLetterIndex, rightLetterIndex); 
           if( isPalindrom(arrayWithoutLeft)){
                oneLetterDeleted +=1;
                leftLetterIndex ++;
                 }
           else if (isPalindrom(arrayWithoutRight)){
            oneLetterDeleted +=1;
            rightLetterIndex --;
                 }
            else {return false}
    
    }
       
    }
    return true
}

console.log(isPossiblePalindrom("abac"))
