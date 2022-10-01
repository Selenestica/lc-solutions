const removeElement = (nums, val) => {
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === "hi") {
            return index;
        }
        if (nums[i] !== val) {
            ++index;
            continue;
        }
        if (nums[i] === val) {
            nums.splice(i, 1);
            nums.push("hi");
            i--;
        }
    }
};
