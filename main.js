const oneToOneMapping = (str1,str2) => {
    let mapping = {};
    for(let i=0;i<str1.length;i++){
        if(mapping[str1[i]] === undefined) mapping[str1[i]] = str2[i];
        else if(mapping[str1[i]] !== str2[i]) return false;
        // else mapping[str1[i]] === str2[i] so we can just continue
    }
    return true;
}

console.log(oneToOneMapping('abc','bcd'));
console.log(oneToOneMapping('foo','bar'));
console.log(oneToOneMapping('bar','foo'));