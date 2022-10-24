// it's slow, but it's mine :)
// might be able to move the alphanumerics filter into the for loop

const isPalindrome = (str) => {
    if (str === "") {
        return true;
    }
    const alphanumerics = /^[a-z0-9]+$/i;
    const strArr = str.split("");
    const onlyAns = strArr.filter((s) => s.match(alphanumerics));
    if (onlyAns.length === 0) {
        return true;
    }

    let r = onlyAns.length - 1;
    for (let i = 0; i < onlyAns.length / 2; i++) {
        if (onlyAns[i].toLowerCase() !== onlyAns[r].toLowerCase()) {
            return false;
        }
        r--;
    }
    return true;
};
