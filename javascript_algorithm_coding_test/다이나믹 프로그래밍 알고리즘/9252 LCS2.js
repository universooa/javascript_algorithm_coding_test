const fs=require('fs')
let local='../test.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local
let input=fs.readFileSync(inputPath,'utf-8').trim().replaceAll('\r','').split('\n')


arr1=[0,...input[0]]
arr2=[0,...input[1]]
let arr1N=arr1.length
let arr2N=arr2.length

dp=new Array(arr1N).fill().map(()=>new Array(arr2N).fill(0))


for(let i=1; i<arr1N;i++){
    for(let j=1;j<arr2N;j++){
        if(arr1[i]===arr2[j]){
            dp[i][j]=dp[i-1][j-1]+1
        }else{
            dp[i][j]=Math.max(dp[i-1][j],dp[i][j-1])
        }
    }
}

const res=dp[arr1N-1][arr2N-1]
console.log(res)


ans=[]
backTracking(arr1N-1,arr2N-1)

if(ans.length>0){
    console.log(ans.reverse().join(''))
}

function backTracking(i,j){
    if(i<1 || j<1){
        return
    }

    if(arr1[i]===arr2[j]){
        ans.push(arr1[i])
        backTracking(i-1,j-1)
    }else{
        if(dp[i-1][j]<dp[i][j-1]){
            backTracking(i,j-1)
        }else{
            backTracking(i-1,j)
        }
    }

}

