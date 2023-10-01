fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let inputV=fs.readFileSync(inputPath).toString().split('\n')

let n=Number(inputV[0])
let arr=inputV[1].split(' ').map(Number)
let opertr=inputV[2].split(' ').map(Number)
let slctdOpr=[]
let maxRes=-1e10
let minRes=1e10

dfs(0)
console.log(`${maxRes}\n${minRes}\n`)
function dfs(depth){
    if(depth===n-1){
        let res=doCalc()
        maxRes=Math.max(maxRes,res)
        minRes=Math.min(minRes,res)
        return ;
    }
    for(let i=0;i<4;i++){
        if(opertr[i]===0){
            continue
        }
        slctdOpr.push(i)
        opertr[i]-=1
        dfs(depth+1)
        opertr[i]+=1
        slctdOpr.pop()
    }

}

function doCalc(){
    let val=arr[0]
    let idx=0
    for(opr of slctdOpr){
        idx+=1
        if(opr===0){
            val+=arr[idx]
        }else if(opr===1){
            val-=arr[idx]
        }else if(opr===2){
            val*=arr[idx]
        }else if(opr===3){
            val=~~(val/arr[idx]) //나눌 때는 나머지를 제거(c++14와 동일)
        }
    }
    return val
}