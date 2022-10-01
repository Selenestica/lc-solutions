const removeDuplicates = (nums) => {
    let index = 1;
    if (nums.length < 2) {
        return index;
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i + 1] === "hi") {
            return index;
        }
        if (nums[i + 1] === nums[i]) {
            nums.splice(i + 1, 1);
            nums.push("hi");
            i--;
            continue;
        }
        if (nums[i + 1] > nums[i]) {
            ++index;
        }
    }
};
