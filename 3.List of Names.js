function ListOfNames(arr) {
    arr.sort().forEach((name, index) => {
        console.log(`${index + 1}.${name}`);
    });
}

ListOfNames(["John", "Bob", "Christina", "Ema"])