let fs=require('fs')

let local='testcase.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local

let inputV= fs.readFileSync(inputPath).toString().split('\n')

let number=Number(inputV[0])
let arr=[]
for(let i=1;i<=number;i++){
    let [a,b]=inputV[i].split(' ').map(Number)
    arr.push([a,b])
}

arr.sort((a,b)=>{
    if(a[1]!==b[1]){
        return a[1]-b[1]
    }else{
        return a[0]-b[0]
    }

})

let cur=0
let cnt=1
// console.log(`${arr[cur]}`)
for(let i=1; i<arr.length; i++){
    if(arr[cur][1]<=arr[i][0]){
        cnt+=1
        cur=i
        // console.log(`${arr[i]}`)
    }
}

console.log(cnt)