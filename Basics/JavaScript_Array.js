
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

removeDuplicates(names);
