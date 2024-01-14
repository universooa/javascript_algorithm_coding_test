const fs=require('fs')
let local='../test.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local

const input=fs.readFileSync(inputPath,"utf-8").trim().split('\n')

let arr=[]
let zeroIdx=[]

for(let i=0;i<9;i++){
    let tmp=input[i].split(' ').map(Number)
    for(let j=0;j<9;j++){
        if(tmp[j]===0){
            zeroIdx.push([i,j])
        }
    }
    arr.push(tmp)
}


function findSelectElement(x,y){
    let containArr=new Set()
    for(let j=0;j<9;j++){
        if(arr[x][j]!==0&&!containArr.has(arr[x][j])){
            containArr.add(arr[x][j])
        }
    }
    for(let k=0;k<9;k++){
        if(arr[k][y]!==0&&!containArr.has(arr[k][y])){
            containArr.add(arr[k][y])
        }
    }
    let xBox=Math.floor(x/3)*3
    let yBox=Math.floor(y/3)*3
    for(let m=xBox;m<xBox+3;m++){
        for(let w=yBox;w<yBox+3;w++){
            if(arr[m][w]!==0 && !containArr.has(arr[m][w])){
                containArr.add(arr[m][w])
            }
        }
    }
    let selectableArr=[]
    for(let e=1;e<=9;e++){
        if(!containArr.has(e)){
            selectableArr.push(e)
        }
    }

    return selectableArr

}

let result=''
let flag=false
backTracking(0,0)

function backTracking(n,start){
    if(flag){
        return
    }
    if(n===zeroIdx.length){
        result=''
        for(let resX=0;resX<9;resX++){
            for(let resY=0;resY<9;resY++){
                result+=`${arr[resX][resY]} `
            }
            result+='\n'
        }
        flag=true

        return
    }
    let [x,y]=zeroIdx[start]
    let selectableArr= findSelectElement(x,y)
    for(let possible of selectableArr){
        arr[x][y]=possible
        backTracking(n+1,start+1)
        arr[x][y]=0
    }
}

console.log(result)