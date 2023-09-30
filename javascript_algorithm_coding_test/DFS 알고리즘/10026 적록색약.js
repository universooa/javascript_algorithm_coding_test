fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let inputV=fs.readFileSync(inputPath).toString().split('\n')

let n=Number(inputV[0])
let arr=[]
for(let i=1;i<=n;i++){
    arr.push(inputV[i].split(''))
}
let dirX=[1,-1,0,0]
let dirY=[0,0,1,-1]


let ans=''
ans+=`${getDistrtNum(false)} ` //적록색약 아님
ans+=`${getDistrtNum(true)}\n`

console.log(ans)

function getDistrtNum(noRG){
    let visited=Array.from(Array(n),()=>{
        return Array(n).fill(false)
    })

    let disNum=0

    for(let j=0;j<n;j++){
        for(let k=0;k<n;k++){
            if(visited[j][k]){
                continue
            }
            disNum+=1
            dfs(arr[j][k],j,k,visited,noRG)
        }
    }
    return disNum
}


function dfs(alpha,x,y,visited,noRG){
    visited[x][y]=true

    for(let i=0;i<4;i++){
        let nex=x+dirX[i]
        let ney=y+dirY[i]

        if(nex<0 || ney<0 || nex>=n || ney>=n){
            continue
        }
        if(visited[nex][ney]){
            continue
        }
        if(noRG){
            if(alpha==="R" || alpha==="G"){
                if(arr[nex][ney]!=="B"){
                    dfs(alpha,nex,ney,visited,noRG)
                }
            }else{
                if(alpha===arr[nex][ney]){
                    dfs(alpha,nex,ney,visited,noRG)
                }
            }
        }else{
            if(alpha!==arr[nex][ney]){
                continue
            }
            dfs(alpha,nex,ney,visited,noRG)
        }

    }
}