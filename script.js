function threeSum(arr, target) {
// write your code here
	arr.sort();
		let mindiff =Number.MAX_VALUE;
	let resultSum=arr[0]+arr[1]+arr[2];
	for(let i=0;i<arr.length-2;i++){
let left =i+1;
		let right =arr.length-1;

		while(left<right){
			let sum =arr[i]+arr[left]+arr[right];
			if(sum==target){
				return sum;
			}
			else if (sum<target){
				left++;
			}
			else{
				right--;
			}
let difftarget=Math.abs(sum-target);
			if(difftarget<mindiff){
				resultSum = sum;
				mindiff =difftarget;
			}
			
		}
		
	}
  return resultSum;
}

module.exports = threeSum;
