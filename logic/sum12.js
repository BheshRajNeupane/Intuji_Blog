// Input:
// nums = [5, 2, 6, 8, 1, 9]
// target = 12
// Output: Pair not found.


let  nums =  [5, 2, 6, 8, 1, 9]
let target = 12
let size = nums.length
let countPair = 0;


	function Pair(nums , size , target) {
	
		for (i = 0; i < (size - 1); i++) {
			for (j = (i + 1); j < size; j++) {
	
				if (nums[i] + nums[j] == target)
                 {
                    countPair ++; // if pair found ,count ++
				}
			}
		}

        if(countPair !=0 ) return true;

		return false;
	}

		

		if (Pair(nums, size, target)) {
			console.log(" Valid pair exists");
		}
		else {
			console.log("Output: Pair not found for target =  " + target);
		}