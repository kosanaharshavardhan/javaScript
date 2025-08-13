const promise1=new Promise((res,rej)=>{
    //Do async
    setTimeout(()=>{
        console.log("task1 complete")
        res()
    },3000);
})
promise1.then(()=>{
    console.log("promise over")
})

new Promise((res,rej)=>{
    setTimeout(()=>{
        console.log("take2 complte");
        res()
    },1)
}).then(()=>{
    console.log("promise2 complete");
})

const promise3=new Promise((res,rej)=>{
    setTimeout(()=>{
        res({ username:'harsha',
            email:'x123@gmail.com'
        })
    },500)
})
promise3.then((user)=>{
    console.log(user)
})

const p4=new Promise((res,req)=>{
    setTimeout(()=>{
        let error=true;
        if(!error)
        {
            res({
                'a':1
            })
        }else{
            req('error')
        }
    })
})
p4.then((user)=>{
    console.log(user);
    return user.a;
}).then((abc)=>{
    console.log(abc)
}).catch((e)=>{
    console.log(e);
}).finally(()=>{
    console.info("Over");
})

const p5=new Promise((res,rej)=>{
    setTimeout(()=>{
            let error=true;
            if(!error)
            {
                res({
                    'a':1
                })
            }else{
                rej('error 2')
            }
        },1000)
})

async function consumep5(){
    try{
    const response = await p5;
    console.log(response);
    }
    catch(e){
        console.log(e);
    }
}
consumep5()
// fetch().then().then().catch()
async function fetchh(){
   try{
     let response=await fetch('https://api.github.com/users/kosanaharshavardhan')
    const response2=await response.json() // takes time .json so keep await
    console.log(response2)
   }
   catch(e){
    console.log(e);
   }
}
fetchh()