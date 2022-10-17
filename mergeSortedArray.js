// very brute force... very ugly. but, it is my solution
const l1 = [-1, -1, 0, 0, 0, 0];
const l2 = [-1, 0];
const m = 3;
const n = 3;

const merge = (nums1, m, nums2, n) => {
    for (let k = nums1.length - 1; k >= 0; k--) {
        if (nums1[k] === 0) {
            nums1[k] = null;
            continue;
        }
        break;
    }

    for (let i = 0; i < m + n; i++) {
        if (nums1[i] === null) {
            nums1.splice(i, 1, nums2[0] ?? 0);
            nums2.shift();
        } else {
            for (let j = 0; j < nums2.length; j++) {
                if (nums1[i] < nums2[j]) {
                    break;
                }
                if (nums1[i] >= nums2[j]) {
                    nums1.splice(i, 0, nums2[j]);
                    nums1.pop();
                    nums2.shift();
                    j--;
                    continue;
                }
            }
        }
    }
    return nums1;
};

console.log(merge(l1, m, l2, n));
