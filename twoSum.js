// my first solution
const twoSum = (nums, target) => {
    for (let j = 0; j < nums.length; j++) {
        for (let k = 0; k < nums.length; k++) {
            if (j !== k) {
                if (nums[j] + nums[k] === target) {
                    return [j, k];
                }
            }
        }
    }
};

// optimal solution
// const twoSum = (nums, target) => {
//     let obj = {};
//     for (let i = 0; i < nums.length; i++) {
//         if (target - nums[i] in obj) {
//             return [obj[target - nums[i]], i];
//         }
//         obj[nums[i]] = i;
//     }
// };
