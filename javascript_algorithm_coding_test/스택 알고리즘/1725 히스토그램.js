fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let input=fs.readFileSync(inputPath,"utf8").trim().replaceAll('\r','').split('\n')

let N=Number(input[0])
let histogram=[]

for(let i=1;i<=N;i++){
    histogram.push(Number(input[i]))
}

histogram.push(-1)

let stack=[]
let result=0

for(let i=0;i<=N;i++){
    let idx=i
    let height=0
    while(stack.length!==0 && histogram[i]<stack[stack.length-1][1]){
        [idx,height]=stack.pop()
        result=Math.max(result,(i-idx)*height)
    }
    stack.push([idx,histogram[i]])

}

console.log(result)
