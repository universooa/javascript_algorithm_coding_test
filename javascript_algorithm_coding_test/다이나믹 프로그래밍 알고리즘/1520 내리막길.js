fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let input=fs.readFileSync(inputPath,"utf8").trim().replaceAll('\r','').split('\n')

let [N,M]=input[0].split(' ').map(Number)
let arr=[]

for(let i=1;i<=N;i++){
    arr.push(input[i].split(' ').map(Number))
}

let dp=Array.from(Array(N),()=>{
    return new Array(M).fill(-1)
})

dirX=[-1,0,1,0]
dirY=[0,-1,0,1]
dp[N-1][M-1]=1

function dfs(x,y){
    if(dp[x][y]!==-1){
        return dp[x][y]
    }
    dp[x][y]=0

    for(let i=0;i<4;i++){
        let newX=x+dirX[i]
        let newY=y+dirY[i]

        if(newX<0 ||newY<0 || newX>=N ||newY>=M){
            continue
        }

        if(arr[newX][newY]<arr[x][y]){
            dp[x][y]+=dfs(newX,newY)
        }
    }
    // console.log(dp)
    return dp[x][y]
}

dfs(0,0)

console.log(dp[0][0])