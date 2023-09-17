let fs=require('fs')

let local='testcase.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local
let inputV=fs.readFileSync(inputPath).toString().split('\n')

let n=inputV[0]*1
let k=inputV[1]*1

let start=0
let end=n*n //k로 해도 됨..

while(start<end){
    let mid=Math.floor((start+end)/2)
    let total=0
    for(let i=1;i<=n;i++){
        total+=Math.min(Math.floor(mid/i),n)
    }
    if(total>=k){ //mid보다 작거나 같은 원소의 개수가 k 이상인 것을 만족하는 mid 중 가장 왼쪽 원소 리턴,,,
        end=mid
    }else{
        start=mid+1
    }
    // console.log(`k:${k},total:${total},start:${start},end:${end}, mid:${mid}`)

}

console.log(end)