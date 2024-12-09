//appears more than ⌊n / 2⌋
//Input: nums = [3,2,3]
//Output: 3
//Input: nums = [2,2,1,1,3,3]
//Output: null

function majorityElement(nums: number[]): number | null {
  if (nums.length === 0) {
    return null;
  }
  let counter = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    if (counter.has(nums[i])) {
      counter.set(nums[i], (counter.get(nums[i]) || 0) + 1);
    } else {
      counter.set(nums[i], 1);
    }
  }

  let biggestValue = 0;
  let biggestKey;
  for (const [k, v] of counter) {
    if (v > biggestValue) {
      biggestValue = v;
      biggestKey = k;
    }
  }
  if (biggestValue > nums.length / 2) {
    return biggestKey;
  }
  return null;
}
