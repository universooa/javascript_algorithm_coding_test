fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let inputV=fs.readFileSync(inputPath).toString().split('\n')

let n=Number(inputV[0])
let arr=inputV[1].split(' ').map(Number)
let res=[]
let ans=-1
let visited=new Array(n).fill(false)

dfs(0)
console.log(ans)

function dfs(depth){
    if(depth===n){
        ans=Math.max(ans,getRes())
        return ;
    }
    for(let i=0;i<arr.length;i++){
        if(visited[i]){
            continue
        }
        res.push(arr[i])
        visited[i]=true
        dfs(depth+1)
        visited[i]=false
        res.pop()
    }
}

function getRes(){
    let val=0
    for(let j=0;j<res.length-1;j++){
        val+=Math.abs(res[j]-res[j+1])
    }
    return val
}