// solution with recursion
let lcp = "";

const longestCommonPrefix = (strs) => {
    let newStrs = [];
    let compareTo = "";
    for (let i = 0; i < strs.length; i++) {
        if (strs[i] === "") {
            const temp = lcp;
            lcp = "";
            return temp;
        }
        compareTo = strs[0][0];
        if (strs[i][0] === compareTo) {
            newStrs.push(strs[i].substring(1, strs[i].length));
            if (i === strs.length - 1) {
                lcp += compareTo;
                return longestCommonPrefix(newStrs);
            }
        } else {
            const temp = lcp;
            lcp = "";
            return temp;
        }
    }
};

// solution with double for loop
// const longestCommonPrefix = (strs) => {
//   // store running lcp here, to be returned when finished
//   let lcp = ""
//   let compareTo = ""
//   // return "" if first item is ""
//   if (strs[0] === "") {
//     return ""
//   }
//   for (let i = 0; i < strs[0].length; i++) {
//     if (strs[i] !== "") {
//       // letter to compare the next letters to
//       compareTo = strs[0][i]
//       for (let j = 0; j < strs.length; j++) {
//         // if letter doesnt match compareTo, we're done
//         if (strs[j][i] !== compareTo) {
//           return lcp
//         }
//         // when we're at the end of the list of words, add compareTo to lcp
//         if (j === strs.length - 1) {
//           lcp += compareTo
//         }
//         if (i === strs[0].length - 1 && j === strs.length - 1) {
//           return lcp
//         }
//       }
//     }
//   }
// }
