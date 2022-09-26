// this solution merges two arrays. it was created as a solution to a leetcode problem, except i didn't understand the problem correctly
// the lc problem wants two node lists merged, not two arrays.

// regardless, here is a solution to a nonexistent problem, using recursion!

let arr1 = [];
let arr2 = [];
let solution = [];

const mergeTwoLists = (list1, list2) => {
    // when both arrays empty, return solution and be done
    if (list1.length === 0 && list2.length === 0) {
        return solution;
    }

    // if one array is empty, concat non empty array to solution and be done
    if (list1.length === 0) {
        const newArr = solution.concat(list2);
        return newArr;
    }
    if (list2.length === 0) {
        const newArr = solution.concat(list1);
        return newArr;
    }

    // else look at the first element of both arrays, if one is smaller then remove it from the list and push it to solution
    // in case of tie just remove the one in list1. it doesnt matter
    if (list1[0] >= list2[0]) {
        solution.push(list2.shift());
        return mergeTwoLists(list1, list2);
    }
    solution.push(list1.shift());
    return mergeTwoLists(list2, list1);
};

console.log(mergeTwoLists(arr1, arr2));
