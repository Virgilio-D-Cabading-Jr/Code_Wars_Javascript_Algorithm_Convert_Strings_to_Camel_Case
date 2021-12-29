////////////////////////////////////////////////////
//  Code Wars: CONVERT STRING TO CAMEL CASE
////////////////////////////////////////////////////

function toCamelCase(str){
    let output = "";

    // Loop through each character of string str
    for (let idx=0; idx < str.length; idx++) {
        console.log(str[idx]);
        if (str[idx-1] == '-' || str[idx-1] == '_') {
            console.log("new word found");
            output += str[idx].toUpperCase();
        } else {
            output += str[idx];
        }
    }

    return output;
}

console.log("To Camel Case: This_is_a_string |", toCamelCase("This_is_a_string"));