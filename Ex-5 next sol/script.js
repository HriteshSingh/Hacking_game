let b=document.getElementById("ip1")
b.style.color="red"
b.style.textShadow="1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue"
b.style.fontWeight="bold"
let a=document.getElementById("btn1")
a.onclick=()=>{
    // text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue;

    let arr=["10101100111100110000111010101011001","00110110110011001101010100110000001"]  
    let arr1=["11001010110110010010110100101001010","00000111100001111000111100010101010"]
    setInterval(()=>{
    let comp=arr[Math.floor(Math.random()*arr.length)]
    let comp1=arr1[Math.floor(Math.random()*arr1.length)]
    let c=document.getElementById("con")
    c.style.color="#3cde21";
        c.style.textShadow="1px 1px 2px #3cde21, 0 0 1em #3cde21, 0 0 0.2em #3cde21"
        c.innerHTML=comp+"<br>"+comp1+"<br>"+comp+"<br>"+comp1+"<br>"+comp+"<br>"+comp1+"<br>"+comp+"<br>"+comp1+"<br>"+comp+"<br>"+comp1+"<br>"+comp+"<br>"+comp1+"<br>"+comp+"<br>"+comp1+"<br>"+comp+"<br>"+comp1+"<br>"+comp+"<br>"+comp1+"<br>"+comp+"<br>"+comp1+"<br>"+comp+"<br>"+comp1+"<br>"+comp+"<br>"+comp1+"<br>"+comp+"<br>"+comp1+"<br>"+comp+"<br>"+comp1+"<br>"+comp+"<br>"+comp1
    },1000)

    setInterval(()=>{
        let comp=arr[Math.floor(Math.random()*arr.length)]
        let comp1=arr1[Math.floor(Math.random()*arr1.length)]
        let d=document.getElementById("con0")
        d.style.color="#3cde21";
        d.style.textShadow="1px 1px 2px #3cde21, 0 0 1em #3cde21, 0 0 0.2em #3cde21"
        d.innerHTML=comp+"<br>"+comp1+"<br>"+comp+"<br>"+comp1+"<br>"+comp+"<br>"+comp1+"<br>"+comp+"<br>"+comp1+"<br>"+comp+"<br>"+comp1+"<br>"+comp+"<br>"+comp1+"<br>"+comp+"<br>"+comp1+"<br>"+comp+"<br>"+comp1+"<br>"+comp+"<br>"+comp1+"<br>"+comp+"<br>"+comp1+"<br>"+comp+"<br>"+comp1+"<br>"+comp+"<br>"+comp1+"<br>"+comp+"<br>"+comp1+"<br>"+comp+"<br>"+comp1+"<br>"+comp+"<br>"+comp1
    },1000)

    let e=document.getElementById("co2")
        e.style.textShadow="1px 1px 2px #3cde21, 0 0 1em #3cde21, 0 0 0.2em #3cde21"
        setTimeout(()=>{
            e.innerHTML="Hijacking User....."
        },1000)

        let f=document.getElementById("co3")
        f.style.textShadow="1px 1px 2px #3cde21, 0 0 1em #3cde21, 0 0 0.2em #3cde21"
        setTimeout(()=>{
            f.innerHTML="logs generated..."
        },2000)

        
        let g=document.getElementById("co4")
        g.style.textShadow="1px 1px 2px #3cde21, 0 0 1em #3cde21, 0 0 0.2em #3cde21"
        setTimeout(()=>{
            g.innerHTML="Getting device info...."
        },3000)

        let h=document.getElementById("co5")
        h.style.textShadow="1px 1px 2px #3cde21, 0 0 1em #3cde21, 0 0 0.2em #3cde21"
        setTimeout(()=>{
            h.innerHTML="Cracking password..."
        },4000)

        let i=document.getElementById("co6")
        i.style.textShadow="1px 1px 2px #3cde21, 0 0 1em #3cde21, 0 0 0.2em #3cde21"
        setTimeout(()=>{
            i.innerHTML="hacking status: hacked! successfully"
        },5000)
        // let p1=new Promise((resolve,reject)=>{
        //     setTimeout(()=>{
        //         resolve("Hijacking User.....")
        //     },1000)
        // })
        // let p2=new Promise((resolve,reject)=>{
        //     setTimeout(()=>{
        //         resolve("logs generated...")
        //     },1000)
        // })
        // let p3=new Promise((resolve,reject)=>{
        //     setTimeout(()=>{
        //         resolve("Getting device info....")
        //     },1000)
        // })
        // let p4=new Promise((resolve,reject)=>{
        //     setTimeout(()=>{
        //         resolve("Cracking password...")
        //     },1000)
        // })
        // let p5=new Promise((resolve,reject)=>{
        //     setTimeout(()=>{
        //         resolve("hacking status: hacked! successfully")
        //     },1000)
        // })

        // return [pq1,pq2,pq3,pq4,pq5]
    // const values=async()=>{
    //     // let pq1=await p1
    //     // console.log(pq1)
    //     let f=document.getElementById("co1")
    //     f.style.textShadow="1px 1px 2px #3cde21, 0 0 1em #3cde21, 0 0 0.2em #3cde21"
    //     f.innerHTML= await p1 +"<br>"+ await p2 +"<br>"+ await p3 +"<br>"+ await p4 +"<br>"+ await p5
    // }
    // values()
}