// not my solution. I'm going to need to go back to this and really try to understand this
const maxProfit = (prices) => {
    let minPrice = 100000000;
    let max = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if (prices[i] - minPrice > max) {
            max = prices[i] - minPrice;
        }
    }
    return max;
};
