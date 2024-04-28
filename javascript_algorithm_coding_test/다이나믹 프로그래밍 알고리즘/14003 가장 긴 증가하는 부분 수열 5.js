const fs=require('fs')
let local='../test.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local
let input=fs.readFileSync(inputPath,'utf-8').trim().replaceAll('\r','').split('\n')


let N=Number(input[0])
let arr=input[1].split(' ').map(Number)
dp=[arr[0]]
let dpElem=[]
dpElem[0]=0

function lower_bound(target){
    let start=0
    let end=dp.length

    while(start<end){
        let mid=Math.floor((start+end)/2)
        if(dp[mid]<target){
            start=mid+1
        }else{
            end=mid
        }
    }
    return end

}


for(let i=1;i<N;i++){
    if(dp[dp.length-1]<arr[i]){
        dp.push(arr[i])
        dpElem[i]=dp.length-1
    }else{
        let point=lower_bound(arr[i])
        dp[point]=arr[i]
        dpElem[i]=point
    }
}


console.log(dp.length)

let dpElemMax=Math.max(...dpElem)
let dpElemMaxIdx=dpElem.indexOf(dpElemMax)

let res=[]
for(let i=dpElemMaxIdx;i>=0;i--){
    if(dpElem[i]===dpElemMax){
        res.push(arr[i])
        dpElemMax--
    }
    if(dpElemMax<0){
        break
    }

}

console.log(res.reverse().join(' '))
