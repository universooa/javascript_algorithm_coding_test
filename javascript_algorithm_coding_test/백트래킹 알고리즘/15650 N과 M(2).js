let fs=require('fs')

let local='testcase.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local
let inputV=fs.readFileSync(inputPath).toString().split('\n')

// 자연수 N과 M이 주어졌을 때, 아래 조건을 만족하는 길이가 M인 수열을 모두 구하는 프로그램을 작성하시오.
// 1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열
// 고른 수열은 오름차순이어야 한다.

let [n,m]=inputV[0].split(' ').map(Number)
let arr=[]
let visited=new Array(n+1).fill(false)
let answer=''
function backTracking(start,arr,depth){
    if(depth===m){
        for(let j of arr){
            answer+=`${j} `
        }
        answer+='\n'
        return 0
    }
    for(let i=start;i<=n;i++){
        if(visited[i]){
            continue
        }
        arr.push(i)
        visited[i]=true
        backTracking(i+1,arr,depth+1)
        arr.pop()
        visited[i]=false
    }
}

backTracking(1,arr,0)
console.log(answer)