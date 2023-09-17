let fs=require('fs')

let local='testcase.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local
let inputV=fs.readFileSync(inputPath).toString().split('\n')

//1번부터 N번까지 번호가 매겨져 있는 도시들이 있고, 도시들 사이에는 길이 있다. (길이 없을 수도 있다)
// 한 외판원이 어느 한 도시에서 출발해 N개의 도시를 모두 거쳐 다시 원래의 도시로 돌아오는 순회 여행 경로를
// 계획하려고 한다.
// 단, 한 번 갔던 도시로는 다시 갈 수 없다. (맨 마지막에 여행을 출발했던 도시로 돌아오는 것은 예외)
// 이런 여행 경로는 여러 가지가 있을 수 있는데, 가장 적은 비용을 들이는 여행 계획을 세우고자 한다.

let n=inputV[0]*1
let cost=[]
for(let i=1;i<=n;i++){
    cost.push(inputV[i].split(' ').map(Number))
}

let visited=new Array(n+1).fill(false)
let arr=[]
let result=1000001*11
function backTracking(arr,depth){
    if(depth===n){
        // console.log(arr)
        let totalCost=0
        for(let k=0;k<arr.length-1;k++){
            let start=arr[k]-1
            let end=arr[k+1]-1
            if(cost[start][end]===0){ //비용 0이면 못감
                return 0;
            }else{
                totalCost+=cost[start][end]
            }
        }
        if(cost[arr.at(-1)-1][arr[0]-1]!==0){
            totalCost+=cost[arr.at(-1)-1][arr[0]-1]
        }else{ //비용 0이면 못 돌아감
            return 0;
        }

        result=Math.min(result,totalCost)
        // console.log(`arr:${arr},result:${result}`)

        return 0;
    }
    for(let i=1;i<=n;i++){
        if(visited[i]){
            continue
        }
        arr.push(i)
        visited[i]=true
        backTracking(arr,depth+1)
        arr.pop()
        visited[i]=false
    }
}

backTracking(arr,0)
console.log(result)