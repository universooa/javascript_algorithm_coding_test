fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let input=fs.readFileSync(inputPath,"utf8").trim().replaceAll('\r','').split('\n')

let N=Number(input[0])
let arr=input[1].split(' ').map(Number)
let stack=[]
let result=[]

for(let i=arr.length-1;i>=0;i--){
    let find=false
    while(stack.length!==0&&stack[stack.length-1]<=arr[i]){
            stack.pop()
    }

    if(stack.length!==0){
        result.push(-1)
    }else{
        result.push(stack[stack.length-1])
    }

    stack.push(arr[i])
}

console.log(result.reverse().join(' '))