// completed with help :/
// i'll end up going back through these binary tree challenges at a later time

// const isSymmetric = (root) => {
//     return isMirror(root.left, root.right);
// };

// const isMirror = (left, right) => {
//     if (!left && !right) {
//         return true;
//     }
//     if (!left || !right) {
//         return false;
//     }
//     return (
//         left.val === right.val &&
//         isMirror(left.left, right.right) &&
//         isMirror(left.right, right.left)
//     );
// };

// iterative solution that i also didn't come up with
// this is probably similar to what i would have figured out on my own
// it checks for symmetry on each level of the binary tree
const isSymmetric = (root) => {
    let leftQueue = [];
    let rightQueue = [];

    // initialize
    leftQueue.push({ node: root.left });
    rightQueue.push({ node: root.right });

    while (leftQueue.length && rightQueue.length) {
        let left = leftQueue.pop().node;
        let right = rightQueue.pop().node;

        // false if one is null and not the other
        if (
            (left !== null && right === null) ||
            (right !== null && left === null)
        ) {
            return false;
        }

        // false if one val doesn't equal the other
        if (left !== null) {
            if (left.val !== right.val) {
                return false;
            }
        }

        //
        if (left !== null) {
            leftQueue.push({ node: left.left });
            leftQueue.push({ node: left.right });
            rightQueue.push({ node: right.right });
            rightQueue.push({ node: right.left });
        }
    }
    return true;
};
