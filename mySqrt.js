const mySqrt = (num) => {
    // if num is 0
    if (!num) {
        return num;
    }

    // split num by half until you get a more manageable number so we won't have to loop forever if the number is really high
    // this isn't technically necessary to do, but it could save a ton of time
    let split = num;
    while (split * split > num) {
        split = split / 2;
        // return split if it's the sqrt of num
        if (split * split === num) {
            return split;
        }
        // if split squared is less than num, multiply it by two so we can use the backward for loop below to eventually find the sqrt
        if (split * split < num) {
            split = split * 2;
            break;
        }
    }

    // round up split so i remains an integer
    for (let i = Math.ceil(split); i >= 0; i--) {
        // if quotient === i, then quotient/i is our sqrt
        const quotient = num / i;
        if (quotient === i) {
            return i;
        }
        // if i < quotient, then the sqrt is i.xxxx, and we just return i
        if (i < quotient) {
            return i;
        }
    }
};
