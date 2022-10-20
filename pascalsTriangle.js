// finally, a coding challenge that makes me feel smart again

const generate = (numRows) => {
    if (numRows === 1) {
        return [[1]];
    }
    let solution = [[1], [1, 1]];
    for (let i = 2; i < numRows; i++) {
        const comparator = solution[i - 1];
        let current = [1];
        for (let j = 0; j < comparator.length - 1; j++) {
            current.push(comparator[j] + comparator[j + 1]);
        }
        current.push(1);
        solution.push(current);
    }
    return solution;
};
