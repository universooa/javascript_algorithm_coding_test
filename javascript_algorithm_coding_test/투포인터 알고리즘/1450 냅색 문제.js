const fs=require('fs')
let local='../test.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local
let input=fs.readFileSync(inputPath,'utf-8').trim().replaceAll('\r','').split('\n')

let [N,C]=input[0].split(' ').map(Number)
let weights=input[1].split(' ').map(Number)
let mid=Math.floor(N/2)

let leftArr=weights.slice(0,mid)
let rightArr=weights.slice(mid)
leftSum=[]
rightSum=[]
// console.log(leftArr,rightArr)

dfs(0,leftArr.length,leftArr,0,leftSum)
dfs(0,rightArr.length,rightArr,0,rightSum)


leftSum.sort((a,b)=>a-b)
rightSum.sort((a,b)=>a-b)

// console.log(leftSum,rightSum)

let ans=0

for(let right of rightSum){

    if(right>C){
        continue
    }

    let start=0
    let end=leftSum.length

    while(start<end){
        // console.log(start,end)
        let lmid=Math.floor((start+end)/2)

        if(leftSum[lmid]+right<=C){
            start++
        }else{
            end=lmid
        }
    }

    // console.log('end',end)
    ans+=end

}

console.log(ans)

function dfs(depth,limit,arr,res,sumArr){
    if(depth===limit){
        sumArr.push(res)
        return
    }
    dfs(depth+1,limit,arr,res,sumArr)
    dfs(depth+1,limit,arr,res+arr[depth],sumArr)

}
