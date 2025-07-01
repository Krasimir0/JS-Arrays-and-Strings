function PrintEveryElementFromAnArray(arr, rotationNum) {
        let arrOfNthElements = [];
        for (let index = 0; index < arr.length; index+=rotationNum) {
            const number = arr[index];
            arrOfNthElements.push(number)
        }

        return arrOfNthElements;
        
}

PrintEveryElementFromAnArray(['5','20', '31', '4', '20'], 2)