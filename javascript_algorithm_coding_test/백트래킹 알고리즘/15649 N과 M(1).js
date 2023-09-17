let fs=require('fs')

let local='testcase.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local
let inputV=fs.readFileSync(inputPath).toString().split('\n')

let [n,m]= inputV[0].split(' ').map(Number)
//자연수 1~n 중에서 중복없이 m개를 고른 수열을 사전 순으로 증가하는 순서로 출력
//중복 없이 골라야하므로 방문했는지 안했는지 확인하는 변수 필요함

let arr=[]
let visited=new Array(n+1).fill(false)

let answer=''
function backTracking(depth,arr){
    if(depth===m){
        // console.log(arr.join(' ')) 콘솔을 매번 출력하면 출력시간때문에 느려짐 2420ms
        // for(let i of arr){
        //     answer+=`${i} `
        // }//300ms
        answer+=arr.join(' ') //220ms
        answer+='\n'
        return 0
    }
    for(let i=1;i<=n;i++){
        if(!visited[i]){
            arr.push(i)
            visited[i]=true
            backTracking(depth+1,arr,i)
            arr.pop()
            visited[i]=false
        }
    }
}

backTracking(0,arr)
console.log(answer)