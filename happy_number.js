var countSumofDigits = function(n) {
    let sum = 0;
    while (n > 0){
        let remainder = n % 10;
        sum += remainder * remainder;
        n = Math.floor(n / 10);
    }
    return sum;
};

var isHappy = function(n) {
    let sum_array = [n];
    let sum = countSumofDigits(n);
    while (sum != 1) {
        if (sum_array.indexOf(sum) != -1)
            return false;
        sum_array.push(sum);
        sum = countSumofDigits(sum_array[sum_array.length - 1]);
    }
    return true;
};

console.log(isHappy(19));