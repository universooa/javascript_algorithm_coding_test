fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let input=fs.readFileSync(inputPath,"utf8").trim().replaceAll('\r','').split('\n')

let N=Number(input[0])
let white=0
let blue=0
arr=[]
for(let i=1;i<=N;i++){
    arr.push(input[i].split(' ').map(Number))
}

divide(0,0,N)
function divide(x1,y1,N){
    if(N<1){
        return
    }

    // console.log(x1,y1,x2,y2,N)
    let tmp=arr[x1][y1]
    let flag=true

    for(let i=x1;i<x1+N;i++){
        for(let j=y1;j<y1+N;j++){
            if(tmp!==arr[i][j]){
                flag=false
                break
            }
        }
        if(!flag){
            break
        }
    }

    if(!flag){
        let mid=Math.floor(N/2)
        divide(x1,y1,mid)
        divide(x1,y1+mid,mid)
        divide(x1+mid,y1,mid)
        divide(x1+mid,y1+mid,mid)
    }else{
        if(tmp===0){
            white++
        }else{
            blue++
        }
    }

}

console.log(white)
console.log(blue)