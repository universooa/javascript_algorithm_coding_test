fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let input=fs.readFileSync(inputPath,"utf8").trim().split('\n')

let [N,K]=input[0].split(' ').map(Number)
let arr=[[]]
let dp=Array.from(Array(N+1),()=>{
    return new Array(K+1).fill(0)
})

for(let i=1;i<=N;i++){
    let [W,K]=input[i].split(' ').map(Number)
    arr.push([W,K]) // 무게와 가치
}

for(let i=1;i<=N;i++){
    for(let j=1;j<=K;j++){
        //i번째 물건을 j kg의 배낭에 넣었을때 최대 가치를 구한다.
        if(arr[i][0]>j){
            dp[i][j]=dp[i-1][j]
            //현재 물건 안 넣으니까 이전 물건의 현재 배낭 무게일때 최대가치 값이 그대로 들어감
        }else{
            dp[i][j]=Math.max(dp[i-1][j],dp[i-1][j-arr[i][0]]+arr[i][1])
            // 넣거나 안넣거나
            //넣는다면, 현재 배낭 무게에서 현재 물건 무게를 뺀 무게를 가진 이전 물건의 배낭의 최대 가치에 현재 물건 가치를 넣은 값을 더한다.
        }
    }
}


console.log(dp[N][K]) // 마지막 물건의 최대 배낭 무게가 최대가치를 가진 값이 됨