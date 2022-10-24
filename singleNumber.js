// it's not fast, but... it is mine
// time complexity is O(n^2), quadratic, since we're basically doing a double for loop
// later we will learn how to do this with linear run time... hash table, math, and bit manipulation... fuck...

const singleNumber = (nums) => {
    let holder = [];
    for (let i = 0; i < nums.length; i++) {
        if (holder.includes(nums[i])) {
            const dIndex = holder.indexOf(nums[i]);
            holder.splice(dIndex, 1);
            continue;
        }
        holder.push(nums[i]);
    }
    return holder[0];
};
