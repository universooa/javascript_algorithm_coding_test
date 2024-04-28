const fs=require('fs')
let local='../test.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local
let input=fs.readFileSync(inputPath,'utf-8').trim().replaceAll('\r','').split('\n')

let N=Number(input[0])

if(N===1){
    console.log(0)
    return
}

let max_val=4000001
let prime=new Array(max_val).fill(true)



const eratos=(x)=>{

    for(let i=2;i<=Math.sqrt(x);i++){
        if(prime[i]){
            for(let j=i*i;j<=max_val;j+=i){
                prime[j]=false
            }
        }

    }

}

eratos(max_val)


let primeArr=[]
prime.forEach((v,i,a)=>{
    if(v){
        primeArr.push(i)
    }

})



let res=primeArr.includes(N)?1:0

let start=2
let end=3
let val=primeArr[start]+primeArr[end]

while(start<end){

    if(val<=N){
        if(val===N){
            res++
        }
        end++
        val+=primeArr[end]
    }else{
        val-=primeArr[start]
        start++
    }
}

console.log(res)

