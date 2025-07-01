function arrRotation(arr, numOfRotation) {
    for (let i = 0; i < numOfRotation; i++) {
        let firstEl = arr.shift();
        arr.push(firstEl);
    }
   return arr.join(' ')
}


arrRotation([51, 47, 32, 61, 21], 2)