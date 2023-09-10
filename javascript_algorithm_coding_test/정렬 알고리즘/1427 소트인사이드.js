let fs=require('fs')

let local='testcase.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local

let inputV=fs.readFileSync(inputPath).toString().trim()

let arr=[]

for(let i of inputV){
    arr.push(parseInt(i))
}

arr.sort((a,b)=>{
    return b-a //내림차순
})

console.log(arr.join(''))