let fs=require('fs')

let forBaekjoon=1
let local='testcase.txt'
let remote='/dev/stdin'

let inputPath=forBaekjoon?remote:local

let inputValue=fs.readFileSync(inputPath).toString().split('\n').map(Number)

let arr=[]
for(let i=0;i<inputValue.length;i++){
    arr.push(inputValue[i])
}

let sortArr=arr.sort((a,b)=>{
    if(a<b){
        return -1
    }else if(a>b){
        return 1
    }else{
        return 0
    }
})

let maxValue=sortArr.at(-1)
// console.log(inputValue)
// console.log(arr)
console.log(maxValue)
console.log(inputValue.indexOf(maxValue)+1)