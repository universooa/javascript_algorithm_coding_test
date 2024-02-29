fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let input=fs.readFileSync(inputPath,"utf8").trim().replaceAll('\r','').split('\n')

let N=Number(input[0])
let arr=input[1].split(' ').map(Number)

let map=new Map()
for(let i=0;i<N;i++){
    if(map.has(arr[i])){
        map.set(arr[i],map.get(arr[i])+1)
    }else{
        map.set(arr[i],1)
    }
}

let stack=[]
let result=[]

for(let i=N-1;i>=0;i--){
    while(stack.length!==0 && map.get(stack[stack.length-1])<=map.get(arr[i])){
        stack.pop()
    }

    if(stack.length===0){
        result.push(-1)
    }else{
        result.push(stack[stack.length-1])
    }

    stack.push(arr[i])
}

console.log(result.reverse().join(' '))