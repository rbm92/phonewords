const phoneWords = digits => {

    // Reading the input value
    const value = document.getElementById('input').value;

    // Assigning the value to 'digits'
    digits = value;

    // Condition of not introducing any input
    if (!digits.length) return [];

    // Number to letter object
    const numToLetter = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    };

    // Initialising global result
    let result = [];

    // Working on the tree
    const tree = (i, digits, array) => {
        // Once we get to the end of the tree, we push the value to our array result
        if (i === digits.length) {
            result.push(array.join(''));
            return;
        }

        // Defining each element of the object
        let chars = numToLetter[digits[i]];

        // Going through every combination
        for (let char of chars) {
            // The chosen character is added to the result
            array.push(char);
            // tree function is applied for following iteration
            tree(i + 1, digits, array);
            // input is deleted and we go back to the first level of the tree
            array.pop();
        }
    }

    tree(0, value, []);
    document.getElementById('result').innerHTML = result;

    return result;
}