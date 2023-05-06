function* range (start, end, range) {
    for(let i = start; i < end; i+=range) {
        yield i
    }
}

let iter = range(0, 500, 9)

for(val of iter) {
    console.log(val)
}