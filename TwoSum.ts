// nums=[1,2,5,7,3], target = 10
// output [3,4]

function findIndexes (nums: number[], target: number) :number[]{

let numbers = new Map<number, number>();
for (let i = 0; i < nums.length; i++){

let addend1 = target - nums[i];

if(numbers.has(addend1)){
return [numbers.get(addend1) || 0, i]
}else{
    numbers.set(nums[i], i)
}


}
    return []
}