// probably not the best solution, but it gets the job done

const getRow = (rowIndex) => {
    const rowIndexPlus = rowIndex + 1;
    if (!rowIndex) {
        return [1];
    }
    if (rowIndex === 1) {
        return [1, 1];
    }

    let solution = [[1], [1, 1]];
    for (let i = 2; i < rowIndexPlus; i++) {
        const comparator = solution[i - 1];
        let current = [1];
        for (let j = 0; j < comparator.length - 1; j++) {
            current.push(comparator[j] + comparator[j + 1]);
        }
        current.push(1);
        solution.push(current);
        console.log(i, rowIndexPlus);
        if (i === rowIndex) {
            return solution[i];
        }
    }
    return solution;
};
