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

const getNewTodo = async (id)=>{
   try {
    let Response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    if(Response && Response.status !==200){
        throw new Error(`Something went wrong: `+Response.status)
    }
    //reject
    let data = await Response.json();
    return data;
   } catch (error) {
        console.log('check error:', error.message)
   }
    // let Response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    // if(Response && Response.status !==200){
    //     throw new Error(`Something went wrong: ${Response.status}`)
    // }
    // let data = await Response.json();
    // return data;
}
getNewTodo('dghfjfmn').then(
    (data)=>{
        console.log('data', data)
    }
)


//fetch
// fetch(`https://jsonplaceholder.typicode.com/todos/1`).then(
//     Response=>{
//         return Response.json();
//     }
// ).then(
//     data=>{
//         console.log(data)
//     }
// )

//Promise lồng nhau nhanh gọn
// getTodos(1)
// .then(
//     data1=>{
//         console.log('get data:',data1)
//          return getTodos(2)
//     }
// ).then(
//     data2=>{
//         console.log('get data:', data2)
//          return getTodos(2)
//     }
// ).then(
//     data3=>{
//         console.log('get data:', data3)
//     }
// )
// .caches(
//     err=>{
//         console.log(err)
//     }
// )
//Promise lồng nhau
// getTodos(1).then(
//     data=>{
//         console.log('get data:',data)
//         getTodos(2).then(
//             data=>{
//                 console.log('get data:',data)
//                 getTodos(3).then(
//                     data=>{
//                         console.log('get data:',data)
//                     }
//                 ).caches(
//                     err=>{
//                         console.log(err)
//                     }
//                 )
//             }
//         ).caches(
//             err=>{
//                 console.log(err)
//             }
//         )
//     }
// ).caches(
//     err=>{
//         console.log(err)
//     }
// )

//callback hell
// getTodos(1, (error,data)=>{cm
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

//Promise
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

    let arr1 = [1,2,3,4,5]
    let arr2 = [0, ...arr1, 6]
    // console.log('arr1', arr1)
    // console.log('arr2',arr2)
    // let obj = {
    //     name:'Khánh',
    //     addrees:'HN',
    //     age:'23'
    // }
    // let {name, addrees, age}=obj;
    // console.log('check key', name, addrees, age )
    let arr = ['Khanh', 'Nam']
    let [name,addrees]= arr;
    console.log('check key ', name, addrees)
