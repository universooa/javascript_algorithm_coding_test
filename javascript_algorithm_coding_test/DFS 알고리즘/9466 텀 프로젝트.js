fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let inputV=fs.readFileSync(inputPath).toString().split('\n')

let tc=Number(inputV[0])
let idx=1
let ans=''
let arr=[]
while(tc--){
    stdNo=Number(inputV[idx])
    stdnt=inputV[idx+1].split(' ').map(Number)
    arr=new Array(stdNo+1).fill(false)
    for(let i=1;i<=stdNo;i++){
        arr[i]=stdnt[i-1]
    }

    cnt=0
    let visited=new Array(stdNo+1).fill(false)
    let finished=new Array(stdNo+1).fill(false)

    teamSet=[]
    for(let j=1;j<=stdNo;j++){
        if(!visited[j]){
            isCycle(j,visited,finished)
        }
    }

    ans+=`${stdNo-teamSet.length}\n` //팀에 속하지 못한 학생 수
    idx+=2
}

console.log(ans)

function isCycle(cur,visited,finished){
    visited[cur]=true
    let next=arr[cur]

    if(!visited[next]){
        isCycle(next,visited,finished)
    }else{
        if(!finished[next]){
            while(cur!==next){
                teamSet.push(next)
                next=arr[next]
            }
            teamSet.push(cur)
        }
    }
    finished[cur]=true
}