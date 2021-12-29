////////////////////////////////////////////////////
//  Code Wars: CONVERT STRING TO CAMEL CASE
////////////////////////////////////////////////////

function toCamelCase(str){
    let output = "";

    // Loop through each character of string str
    for (let idx=0; idx < str.length; idx++) {
        if (str[idx-1] == '-' || str[idx-1] == '_') {
            output += str[idx].toUpperCase();
        } else if (str[idx] == '-' || str[idx] == '_') {
        } else {
            output += str[idx];
        }
    }

    return output;
}

console.log("To Camel Case: This_is_a_string |", toCamelCase("This_is_a_string"));
console.log("To Camel Case ||  :", toCamelCase(""));
console.log("To Camel Case || the_stealth_warrior :", toCamelCase("the_stealth_warrior"));
console.log("To Camel Case || The-Stealth-Warrior :", toCamelCase("The-Stealth-Warrior"));
console.log("To Camel Case || A-B-C :", toCamelCase("A-B-C"));