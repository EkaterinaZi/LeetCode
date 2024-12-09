// nums = [0,0,1,1,1,2,2,3,3,4]
// output = 5, nuns=[0,1,2,3,4,_,_,_,_,_]

function removeDuplicates(nums:any[]): any[] {
let nextIndex = 1;

for (let i = 0; i < nums.length-1; i ++){

    if (nums[i] < nums[i+1]){
        nums[nextIndex] = nums[i+1];
        nextIndex +=1;
    } 
}
nums.fill('_', nextIndex)

return nums

}

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))