let fs=require('fs')

let local='testcase.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local
let inputV=fs.readFileSync(inputPath).toString().split('\n')

let testCase=inputV[0]*1

let idx=1
let arr=[]
let visited=[]
let dirX=[-1,1,0,0] //상하좌우
let dirY=[0,0,-1,1]
let m,n,k
let cnt=0
let answer=''

for(let tc=0;tc<testCase;tc++){
    [m,n,k]=inputV[idx].split(' ').map(Number)
    idx+=1
    cnt=0
    arr=Array.from(Array(n),()=>{
        return Array(m).fill(0)
    })
    visited=Array.from(Array(n),()=>{
        return Array(m).fill(false)
    })
    // console.log(arr)
    for(let i=0;i<k;i++){
        let cur=idx+i
        let[x,y]= inputV[cur].split(' ').map(Number)
        arr[y][x]=1
    }
    // console.log(arr)
    for(let j=0;j<n;j++){
        for(let w=0;w<m;w++){
            if(arr[j][w]===1 && !visited[j][w]){
                visited[j][w]=true
                cnt+=1
                dfs(w,j)
            }

        }
    }

    answer+=`${cnt}\n`

    idx+=k

}


function dfs(x,y){

    for(let i=0;i<4;i++){
        let valX=x+dirX[i]
        let valY=y+dirY[i]

        if(valX<0 || valY<0 || valX>=m|| valY>=n){
            continue
        }

        if(visited[valY][valX]){
            continue
        }

        if(arr[valY][valX]===1){
            visited[valY][valX] = true
            dfs(valX,valY)
        }
    }
}

console.log(answer)