//=====Find the last element!=====//
console.log('Find the last element!');

var items1 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];
let counter = 0;
function last_items1(items1){
    for (var i = 0; i<items1.length; i++){
        counter += 1;
    }
    return items1[counter-1];
}
console.dir(last_items1(items1));

var items2 = "A really long string";
let counter2 = 0;
function last_items2(items2){
    for (var i = 0; i<items2.length; i++){
        counter2 += 1;
    }
    return items2[counter2-1];
}
console.dir(last_items2(items2));

var items3 = [[1, 2, 3], ['one', 'two'],[true, false, true]];
function last_items3(items3){
    let counter3 = 0;
    for (var i = 0; i < items3.length; i++){
        counter3 += 1;
        console.log(counter3);
    }
    let counter4 = 0
    for (var i = 0; i < items3[counter3-1].length; i++){
        counter4 += 1;
        // console.log(counter4);
    }
    return items3[counter3-1][counter4-1];
}

console.log(last_items3(items3));

///work on naming my counters by understanding variable scope