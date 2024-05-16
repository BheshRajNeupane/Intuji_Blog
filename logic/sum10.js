// Find a pair with the given sum in an array. Given an unsorted integer array, print a pair
// with the given sum in it.
// For example,
// Input:
// nums = [8, 7, 2, 5, 3, 1]
// target = 10


let  nums = [8, 7, 2, 5, 3, 1]
let target = 10
let size = nums.length
let countPair = 0;


	function Pair(nums , size , target) {
	
		for (i = 0; i < (size - 1); i++) {
			for (j = (i + 1); j < size; j++) {
	
				if (nums[i] + nums[j] == target) {
                    countPair ++;
					console.log("Pair with a given sum " + target + " is (" + nums[i] + ", " + nums[j] + ")");

                    if( countPair== 0) return false
                    if( countPair== 2) return true;
				
				}
			}
		}

		return false;
	}

		

		if (Pair(nums, size, target)) {
			console.log(" Valid pair exists");
		}
		else {
			console.log("No valid pair exists for " + target);
		}


