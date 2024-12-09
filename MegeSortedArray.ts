//nums1=[1,2,3,0,0]  m = 3
//nums2=[2,4]        n = 2
//expected output [1,2,2,3,4]

function mergeSortedArrays(
    num1: number[],
    m: number,
    num2: number[],
    n: number
  ): number[] {
    let indexNum1 = m - 1;
    let indexNum2 = n - 1;
    let indexReplace = num1.length - 1;
    

    while (indexNum2 >= 0) {

        if (indexNum1 >= 0 && num1[indexNum1] > num2[indexNum2]) {
          num1[indexReplace] = num1[indexNum1];
          indexNum1--;
        } else {
          num1[indexReplace] = num2[indexNum2];
          indexNum2--;
        }
        indexReplace--;
      }
    return num1;
  }
  
  console.log(mergeSortedArrays([1, 2, 3, 0, 0], 3, [2, 4], 2));
  