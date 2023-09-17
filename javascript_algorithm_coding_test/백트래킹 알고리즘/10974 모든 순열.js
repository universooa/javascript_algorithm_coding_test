let fs=require('fs')

let local='testcase.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local
let inputV=fs.readFileSync(inputPath).toString().split('\n')

let n=inputV[0]*1
//N이 주어졌을 때, 1부터 N까지의 수로 이루어진 순열을 사전순으로 출력하는 프로그램을 작성하시오.


let visited=new Array(n+1).fill(false) //중복되면 안 됨
let arr=[]
let answer=''
function backTracking(arr,depth){
    if(depth===n){
        answer+=`${arr.join(' ')}`
        answer+='\n'
        return 0
    }

    for(let i=1;i<=n;i++){
        if(visited[i]){
            continue
        }
        arr.push(i)
        visited[i]=true
        backTracking(arr,depth+1)
        arr.pop(i)
        visited[i]=false
    }
}

backTracking(arr,0)
console.log(answer)