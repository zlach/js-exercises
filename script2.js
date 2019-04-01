//===Find the area of a triangle==//
console.log('Find the area of a triangle');

var side_a = 11;
var side_b = 11;
var side_c = 13;
function heron(side_a, side_b, side_c){
    let p = (side_a + side_b + side_c)/2;
    return Math.sqrt(p * (p-side_a) * (p-side_b) * (p-side_c));
}

console.log(heron(side_a, side_b, side_c))