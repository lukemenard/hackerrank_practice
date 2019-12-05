// SOCK MERCHANT

function sockMerchant(n, ar) {
    let arr_sorted = arr.sort((a, b) => a - b)
    let pairs = 0

    for (let i = 0; i < n - 1; i++) {
        if (arr_sorted[i] === arr_sorted[i +1]){
            pairs++
            i += 1
        }
    }
    return pairs
}


// COUNTING VALLEYS

function countingValleys(n, s) {
    let elevation = 0
    let valleys = 0

    for (let i = 0; i < n; i ++) {
        if (s[i] === "D"){
            --elevation
        }
        else if (s[i] === "U"){
            if (++elevation === 0){
                valleys++
            }
        }
    }
    return valleys
}