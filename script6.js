//=== Find the longest word! ==//

function findLong(s){
    let sArr = s.split(' ');
    let store = "";
    for (var i in sArr){
        if (sArr[i].length > store.length){
            store = sArr[i];
        }
    }
    return store;
}

console.log(findLong('cannnn u dig it'));