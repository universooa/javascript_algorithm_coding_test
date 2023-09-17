let fs=require('fs')

let local='testcase.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local
let inputV=fs.readFileSync(inputPath).toString().split('\n')

// 자연수 N과 M이 주어졌을 때, 아래 조건을 만족하는 길이가 M인 수열을 모두 구하는 프로그램을 작성하시오.
// 1부터 N까지 자연수 중에서 M개를 고른 수열
// 같은 수를 여러 번 골라도 된다.
let [n,m]=inputV[0].split(' ').map(Number)
let arr=[]
let answer=''
function backTracking(arr,depth){
    if(depth===m){
        for(let j of arr){
            answer+=`${j} `
        }
        answer+='\n'
        return 0;
    }
    for(let i=1;i<=n;i++){
        arr.push(i)
        backTracking(arr,depth+1)
        arr.pop()
    }
}

backTracking(arr,0)
console.log(answer)