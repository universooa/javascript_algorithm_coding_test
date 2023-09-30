fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let inputV=fs.readFileSync(inputPath).toString().split('\n')

let n=Number(inputV[0])
let arr=[0]
for(let i=1;i<=n;i++){
    arr.push(Number(inputV[i]))
}

let visited=new Array(n+1)
let finished=new Array(n+1)

let result=[]
for(let i=1;i<=n;i++){
    if(visited[i]){
        continue
    }
    dfs(i,visited,finished,result)
}

let ans=`${result.length}\n`
result.sort((a,b)=>{
    return a-b
})

for(res of result){
    ans+=`${res}\n`
}

console.log(ans)

function dfs(cur,visited,finished,result){
    visited[cur]=true
    let next=arr[cur]
    // console.log(`cur:${cur},next:${next}`)
    if(!visited[next]){
        dfs(next,visited,finished,result)
    }else if(!finished[next]){
        while(cur!==next){
            result.push(next)
            next=arr[next]
        }
        result.push(cur)
    }
    finished[cur]=true
}