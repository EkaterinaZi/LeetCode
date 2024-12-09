// 2 strings s and t
// input "anagram" and "nagaram" 
// output true
// nput "car","tar"
// output false

function isValidAnagram(s:string, t: string) :boolean{
 const arrayS =  Array.from(s);
 const arrayT = Array.from(t);

if (arrayS.length != arrayT.length){
    return false
   }

 let lettersS = new Map<string, number>();
 let lettersT = new Map<string, number>();

for(let i = 0; i < arrayS.length; i++){
    if (lettersS.has(arrayS[i])){
        lettersS.set(arrayS[i], lettersS.get(arrayS[i]) || 0 + 1 )
    }else{
        lettersS.set(arrayS[i] , 1 )
    }
}
for(let i = 0; i < arrayT.length; i++){
    if (lettersT.has(arrayT[i])){
        lettersT.set(arrayT[i], lettersS.get(arrayT[i]) || 0 + 1 )
    }else{
        lettersT.set(arrayT[i] , 1 )
    }
}

for( const [k,v] of lettersS)
    {
        if(lettersT.has(k)){
            if(lettersT.get(k) !== v){
                return false
            }
        }else
        {return false}
    }
    return true
}