const callback = (error, data)=>{
    if(error){
        console.log('callling callback with error',error)
    }
    if(data){
        console.log('callling callback with data',data)
    }
};

function getTodos(id){
    return new Promise((resolve, reject)=>{
        var request = new XMLHttpRequest();
        request.onreadystatechange = function() {
        if(this.readyState === 4 && request.status ===200){
             const data = JSON.parse(request.responseText);
            // const dataString = JSON.stringify(data);
            // callback(undefined, data)
            // callback(undefined, dataString)
            resolve(data)
        }
        if(this.readyState === 4 && request.status!==200){
            reject('Something wrong')
        }
        
    } 

    request.open('GET', `https://jsonplaceholder.typicode.com/todos/${id}`, true)
    request.send();
    })
    
}
getTodos(1).then(
    data=>{
        console.log('get data:',data)
        getTodos(2).then(
            data=>{
                console.log('get data:',data)
                getTodos(3).then(
                    data=>{
                        console.log('get data:',data)
                    }
                ).caches(
                    err=>{
                        console.log(err)
                    }
                )
            }
        ).caches(
            err=>{
                console.log(err)
            }
        )
    }
).caches(
    err=>{
        console.log(err)
    }
)

//callback hell
// getTodos(1, (error,data)=>{
//     if(error){
//         console.log('callling callback with error',error)
//     }
//     if(data){
//         console.log('callling callback with data',data)
//     }
//     getTodos(2, (error,data)=>{
//         if(error){
//             console.log('callling callback with error',error)
//         }
//         if(data){
//             console.log('callling callback with data',data)
//         }
//         getTodos(3,(error,data)=>{
//             if(error){
//                 console.log('callling callback with error',error)
//             }
//             if(data){
//                 console.log('callling callback with data',data)
//             }
//         })
//     })
// })

// const promisesExp = ()=>{
//     return new Promise((resolve,reject)=>{
//         //resolve({name:'khánh',age:'23'})
//         reject('somthing wrongs')
//     })
// }
//  promisesExp().then(
//     data=>{
//         console.log(data)
//     }
//  ).catch(
//     error=>{
//         console.log(error)
//     }
//  )

