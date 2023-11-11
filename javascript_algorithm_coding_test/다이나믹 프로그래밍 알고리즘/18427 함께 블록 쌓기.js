fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let inputV=fs.readFileSync(inputPath,"utf8").trim().split('\n')

let [N,M,H]=inputV[0].split(' ').map(Number)

let blocks=[]

for(let i=1;i<=N;i++){
    blocks.push(inputV[i].split(' ').map(Number))
}

let dp=Array.from(new Array(H+1).fill(0))

dp[0]=1
for(let st=0;st<N;st++){
    let data=[]
    for(let he=0;he<H+1;he++){
        for(let bl of blocks[st]){
            if(dp[he]!==0 && he+bl<=H){
                data.push([he+bl,dp[he]])
            }
        }
    }
    for([height,value] of data){
        dp[height]=(dp[height]+value)%10007
    }
}


console.log(dp[H])