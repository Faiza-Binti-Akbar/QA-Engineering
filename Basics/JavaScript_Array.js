
let names = ["Alice", "Bob", "Faiza", "Charlie", "David", "Eve", "Faiza"];

function removeDuplicates(names) {
    let uniqueNames = [];
    let duplicateNames = [];

    for (let i = 0; i < names.length; i++) {

        if (uniqueNames.includes(names[i])) {
            if (!duplicateNames.includes(names[i])) {
                duplicateNames.push(names[i]);
            }
        } else {
            uniqueNames.push(names[i]);
        }
    }

    console.log("Duplicate names are: " + duplicateNames);
    console.log("Unique names are: " + uniqueNames);
}

let numbers = [50, 10, 40, 20, 30];
function sortAscending(numbers) {
    let sortedNumbers = numbers.sort((a, b) => a - b);
    console.log("Sorted numbers in ascending order: " + sortedNumbers);
}
sortAscending(numbers);
removeDuplicates(names);
