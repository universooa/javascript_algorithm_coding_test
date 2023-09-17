fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let inputV=fs.readFileSync(inputPath).toString().split('\n')

let [n,m]=inputV[0].split(' ').map(Number)
let arr=Array.from(Array(n+1),()=>Array())

for(let i=1;i<n;i++){
    let [start,end,dist]=inputV[i].split(' ').map(Number)
    arr[start].push([end,dist])
    arr[end].push([start,dist])
}

// console.log(arr)

let cnt=0
let answer=''
for(let j=n;j<n+m;j++){
    let [start,target]=inputV[j].split(' ').map(Number)
    cnt=0
    let visited=new Set()
    visited.add(start)
    answer+=`${dfs(start,target,visited)-1}\n`
}

console.log(answer)

function dfs(start,target,visited){
    // console.log(cnt)
    if(start===target){
        return 1
    }

    for(let [end,dist] of arr[start]){
        cnt=0
        if(visited.has(end)){
            continue
        }
        visited.add(end)
        cnt+=dfs(end,target,visited)
        if(cnt){
            return cnt+dist
        }
    }
    return cnt
}