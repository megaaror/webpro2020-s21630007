//async
// const second = () => {
//     const num = 10;
//     setTimeout (() => {
//         console.log('Async 1');
//         console.log(num);
//         setTimeout(()=> {
//             console.log('Async 2');
//             setTimeout(()=> {
//                 console.log('Async 3');
//             }, 2000)
//         }, 2000)
//     }, 2000, num)
// }

// const first = () => {
//     console.group('First');
//     second();
//     console.log('The End');
// }

// first ();

//const getId = () => {
  //  return new Promise((resolve, reject) => {
    //const numbers = [1, 2, 3];
    //setTimeout(() => {
        //If success
      //  resolve(numbers)
        //else
        // reject ('Error')
    //}, 2000);
//})

//getId
    //.then(numbers => {
       // console.log(numbers)
    //})
    //.catch(error => {
        //console.log(error);
    //})

const getId = () => {
    return new Promise((resolve, reject) => {
    const numbers = [1, 2, 3];
        setTimeout(() => {
            resolve(numbers[2])      
    }, 2000);
})
}    
const getNamebyId = id => {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
                const name = 'John Doe'
                resolve(`${id}: ${name}`);
            }, 2000, id)
        })
    }
    //getId
    //.then(id => {
       // console.log(id)
       // getNamebyId(id).then(name => {
           // console.log(name);
        //})
    //})
    //.catch(error => {
        //console.log(error);
    //})
    
    //getId
    //.then(id => {
       // console.log(id)
       // return getNamebyId(id);
        //})
     //.then(name => {
       // console.log(name)
        //})
    //.catch(error => {
        //console.log(error);
    //})

    //ansychronous
    async function getNamebyId(){
        const id = await getId;
        const name = await getNamebyId;
        return(name);
    }

    getNamebyIdAW().then(name => {console.log(name)})
    console.log('End');


