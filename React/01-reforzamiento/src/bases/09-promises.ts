const myPromise = new Promise<number>((resolve,reject)=>{
    setTimeout(()=>{
//!quiero mi dinero!!
//resolve('aqui tienes tu dinero')
reject('no tienes dinero')
    },2000)//2 segundos
})

myPromise.then((myMMoney)=>{
    console.log(`Tengo mi dinero ${myMMoney}`);//aqui tienes tu dinero
})
.catch((reason)=>{
    console.warn(`no tengo dinero porque ${reason}`);//no tengo dinero porque no tienes dinero
})
.finally(()=>{
    console.log('Termino la promesa');
})