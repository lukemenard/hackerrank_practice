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

// JUMPING ON THE CLOUDS

function findPaths(c, paths) {
    if (c.length > 1){
        let path1 = paths.slice()
        let path2 = paths.slice()

        path1 = (c[1] !== 1)
        ? [...path1, 1]
        : 0

        path2 = (c[2] !== 2)
        ? [...path2, 2]
        : 0

        if (path1 === 0 && path2 === 0){
            paths = 0
        } else if (path1 !== 0 && path2 === 0){
            return findPaths(c.slice(1), path1)
        } else if (path1 === 0 && path2 !== 0){
            return findPaths(c.slice(2), path2)
        } else if (path1 !== 0 && path2 !== 0){
            path1 = findPaths(c.slice(1), path1)
            path2 = findPaths(c.slice(2), path2)
            return (path1.length < path2.length)
            ? path1
            : path2
        }
    }
    return paths
}

function jumpingOnClouds(c){
    const min = 2
    const max = 100
    let jumps = 0

    if (c.length >= min && c.length <= max){
        jumps = findPaths(c, [])
    }

    return ((typeof jumps === "number")
    ? jumps
    : jumps.length
    )
}