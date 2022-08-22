const isPalindrome = (int) => {
    const str = int.toString();
    const half = Math.ceil(str.length / 2);
    let firstHalf = str.slice(0, half);
    let secondHalf = str.slice(half);
    let secondHalfRev = "";
    for (let i = secondHalf.length - 1; i >= 0; i--) {
        secondHalfRev += secondHalf[i];
    }
    if (str.length % 2 === 0) {
        if (firstHalf === secondHalfRev) {
            return true;
        }
    } else {
        secondHalfRev += firstHalf[firstHalf.length - 1];
        if (firstHalf === secondHalfRev) {
            return true;
        }
    }
    return false;
};
