const callback = (error, data)=>{
    if(!error){
        console.log('callling callback with error',error)
    }
    if(!data){
        console.log('callling callback with error',data)
    }
};

function getTodos(callback){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if(this.readyState === 4 && request.status ===200){
            const data = request.responseText;
            console.log(data);
            callback(undefined, data)
        }
        if(this.readyState === 4 && request.status!==200){
            callback('Something wrong', undefined)
        }
        
    } 

    console.log(request);
    request.open('GET', 'https://dummyjson.com/todos', true)
    request.send();

}
console.log(1)
console.log(2)
getTodos(callback)
console.log(3)
console.log(4)


// function getTodos(callback) {
//     var request = new XMLHttpRequest();

//     request.onreadystatechange = function () {
//         if (this.readyState === 4 && request.status === 200) {
//             const data = request.responseText;
//             console.log(data);
//             callback(undefined, data);
//         }
//         if (this.readyState === 4 && request.status !== 200) {
//             callback('Something wrong', undefined);
//         }
//     };

//     request.open('GET', 'https://dummyjson.com/todos', true);
//     request.send();
// }

// console.log(1);
// console.log(2);
// getTodos(callback);
// console.log(3);
// console.log(4);