async function start(){
    return await Promise.resolve('async is working')
}
start().then(console.log);

class StaticId  {
    static Id = Date.now()
}
console.log(`StaticId : ${StaticId.Id}`)