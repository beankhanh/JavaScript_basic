let arr = [1,2,3,4,5,6,7,8,9]
let obj =[
    {name:'Khánh', age:25},
    {name:'Manh', age:30},
    {name:'An', age:21},
    {name:'Tam', age:28},
    {name:'Khá', age:25},
]

let filter = arr.filter((item,index) => {
    return item && item >5;
});

let filter2 = obj.find((item,index) => {
    return item && item.age >25;
});
console.log(filter)
console.log(filter2)