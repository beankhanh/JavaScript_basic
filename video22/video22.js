let arr = [1,2,3,4,5,6,7,8,9]
let maparr= arr.map((item,index)=>{
    item = item*item;
    return item;
})
console.log(maparr)