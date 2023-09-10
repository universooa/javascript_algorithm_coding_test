let fs=require('fs')

let local='testcase.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local

let inputV= fs.readFileSync(inputPath).toString().split('\n')
let num=Number(inputV[0])
let arr=[]
for(let i=1;i<=num;i++){
    arr.push(Number(inputV[i]))
}

let maxValue=45 //10^9 까지..
let fiboArr=new Array(maxValue+1).fill(0)
fiboArr[0]=0
fiboArr[1]=1

function fibo(n){
    if(n<2 || fiboArr[n]!==0 ){
        return fiboArr[n]
    }

    fiboArr[n]= fibo(n-1)+fibo(n-2)
    return fiboArr[n]
}

fibo(maxValue)
// console.log(fiboArr)

let answer=''
for(let j=0;j<arr.length;j++){
    let tempMax=j
    for(let i=0;i<fiboArr.length;i++){
        if(fiboArr[i]>arr[j]){
            tempMax=i-1
            break
        }
    }
    let valArr=[fiboArr[tempMax]]
    let val=arr[j]-fiboArr[tempMax]
    for(let k=tempMax-1;k>0;k--){
        if(val===0){
            break
        }
        if(val>=fiboArr[k]){
            valArr.push(fiboArr[k])
            val-=fiboArr[k]
        }
    }
    valArr.sort((a,b)=>{
        return a-b
    })

    answer+=`${valArr.join(' ')}\n`


}

console.log(answer)