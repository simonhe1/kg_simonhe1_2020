// .slice will get positions 2 to the end of the array 
// because we want to ignore the node and main.js arguments
const arguments = process.argv.slice(2);
const oneToOneMapping = (str1,str2) => {
    let mapping = {};
    let len1 = str1.length, len2 = str2.length;
    // Cases where str2's length is either less than or equal to str1's length
    for(let i=0;i<len1;i++){
        if(mapping[str1[i]] === undefined){
            if(i >= len2) return false;
            mapping[str1[i]] = str2[i];
        }
        else if(mapping[str1[i]] !== str2[i]) return false;
        // else mapping[str1[i]] === str2[i] so we can just continue
    }
    return true;
}

let length = arguments.length;
for(let i=0;length-i > 1 && i<length;i+=2){
    console.log(oneToOneMapping(arguments[i],arguments[i+1]));
}