fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let inputV=fs.readFileSync(inputPath).toString().split('\n')

let n=Number(inputV[0])
let arr=[]
let visited=Array.from(Array(n),()=>{
    return Array(n).fill(false)
})
for (let i=1;i<=n;i++){
    arr.push(inputV[i].split('').map(Number))
}

let dirX=[1,-1,0,0]
let dirY=[0,0,1,-1]
let homeCnt={}
let cnt=0
for(let j=0;j<n;j++){
    for(let k=0;k<n;k++){
        if(visited[j][k]||arr[j][k]===0){
            continue
        }
        cnt+=1
        homeCnt[cnt]=1
        dfs(j,k,cnt)
    }
}

function dfs(row,col,cnt){
    if(visited[row][col]){
        return
    }
    visited[row][col]=true
    for(let l=0;l<4;l++){
        let newX=row+dirX[l]
        let newY=col+dirY[l]
        if(newX<0 ||newY<0||newX>=n||newY>=n){
            continue
        }
        if(visited[newX][newY]){
            continue
        }
        if(arr[newX][newY]===0){
            continue
        }
        homeCnt[cnt]+=1
        dfs(newX,newY,cnt)

    }

}

// console.log(homeCnt)

//자동으로 숫자로 정렬 안 됨. 1,19,2 유니코드로 정렬됨
// let homeArr=Object.values(homeCnt).sort()

let homeArr=Object.values(homeCnt).sort((a,b)=>{
    return a-b
})

let ans=`${homeArr.length}\n`
for(let lk of homeArr){
    ans+=`${lk}\n`
}
console.log(ans)
