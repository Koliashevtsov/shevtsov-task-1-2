// TASK 1
// function takes string and returning the longest substring
// with non-repeating symbols
const getSubsting1 = (str) => {
    const newArray = []
    for(let i = 0; i < str.length; i ++){
        // if (!newArray.includes(str[i])){
        //     newArray.push(str[i])
        // }
        if(i === 0){
            newArray.push(str[i])
        }
        let dif = str[i]
        for (let j = 0; j < newArray.length; j ++){
            if ( newArray[j] !== str[i]){
                dif = str[i]
            } else {
                dif = null
                break
            }
        }
        if(dif){
            newArray.push(dif)
        }
    }
    return newArray.join('');
}

const getSubstring2 = (str) => {
    const newArray = []
    for(let i = 0; i < str.length; i ++){
        if (!newArray.includes(str[i])){
            newArray.push(str[i])
        }
    }
    return newArray.join('');
}




// TASK 2
// function takes numb and returning numder of numeral in reverse order

const getReverse = (n) => {
    let numbInner = n
    let numbOuter = 0
    while (numbInner > 0){
        let num = numbInner % 10;
        numbInner = Math.floor(numbInner / 10);
        numbOuter = numbOuter * 10 + num
    }
    return numbOuter;
}
