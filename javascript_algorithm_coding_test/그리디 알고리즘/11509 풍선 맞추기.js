let fs=require('fs')

let local='testcase.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local

let inputV= fs.readFileSync(inputPath).toString().split('\n')

let numOfBallon=Number(inputV[0])
let arr=inputV[1].split(' ').map(Number)
let spentArrow=0
let arrowArr=new Array(1000001).fill(0)

for(let i=0;i<arr.length;i++){
    if(arrowArr[arr[i]]>0){
        arrowArr[arr[i]]-=1
    }else{
        spentArrow+=1
    }
    arrowArr[arr[i]-1]+=1
}

console.log(spentArrow)