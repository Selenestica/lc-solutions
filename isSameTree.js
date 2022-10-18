// not my solution, but I did get close to this solution. still new to binary trees
const isSameTree = (p, q) => {
    if (!p && !q) {
        return true;
    }
    if (!p || !q) {
        return false;
    }
    if (p.val !== q.val) {
        return false;
    }
    return isSameTree(p.right, q.right) && isSameTree(p.left, q.left);
};
