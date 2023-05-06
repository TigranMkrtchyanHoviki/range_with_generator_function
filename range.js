function* range (start, end, range) {
    for(let i = start; i <= end; i+=range) {
        yield i
    }
}

let iter = range(0, 100, 5)

// let objIter = iter.next()

// while(objIter.done === false) {
//     console.log(objIter.value)
//     objIter = iter.next()
// }

// 10 - 15 տողերի միջակայքում գրվածը նույնպես ճիշտ ա, բայց քանի որ generator function-նը վերադարձնում է iterator object, նշանակում է, որ այդ օբյկեկտի վրա կարող ենք for of ցիկլը ֆռալ

for(val of iter) {
    console.log(val)
}