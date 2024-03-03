fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let input=fs.readFileSync(inputPath,"utf8").trim().replaceAll('\r','').split('\n')

let N=Number(input[0])
let arr=[]
for(let i=1;i<=N;i++){
    arr.push(input[i].split('').map(Number))
}

result=''

quadTree(0,0,N)
function quadTree(x1,y1,N){
    if(N<1){
        return
    }

    let tmp=arr[x1][y1]
    let flag=true
    for(let i=x1;i<x1+N;i++){
        for(let j=y1;j<y1+N;j++){
            if(tmp!==arr[i][j]){
                flag=false
            }
        }
        if(!flag){
            break
        }
    }

    if(!flag){
        let mid=Math.floor(N/2)
        result+='('
        quadTree(x1,y1,mid)
        quadTree(x1,y1+mid,mid)
        quadTree(x1+mid,y1,mid)
        quadTree(x1+mid,y1+mid,mid)
        result+=`)`
    }else{
        result+=`${tmp}`
    }


}

console.log(result)