let fs=require('fs')

let local='testcase.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local

let inputV=fs.readFileSync(inputPath).toString().split('\n')

let num=Number(inputV[0])
let arr=inputV[1].split(' ').map(Number)
let budget=Number(inputV[2])

//0~최대값 이진탐색하고 금액과 중간값의 최소값을 구해서 그 합이 예산보다 작으면 start를 mid+1로 하고
//아니면 end를 mid-1로 바꿉니다..

function binarySearch(){
    let start=0;
    let end=Math.max(...arr)
    let answer=0


    while(start<=end){
        let mid =Math.floor((start+end)/2)
        // console.log(`start:${start},mid:${mid},end:${end}`)
        let cost=0
        for(let i=0;i<num;i++){
            cost+=Math.min(arr[i],mid)
        }
        // console.log(`cost:${cost},budget:${budget}`)
        if(cost<budget){
            //더 쓸 수 있음 -> 상한액을 늘린다.
            start=mid+1
            answer=mid
        }else if(cost===budget){
            answer=mid
            break // 예산을 다 썼다.
        }else{
            //더 못 씀 ->상한액을 줄인다.
            end=mid-1
        }
    }
    return answer
}

console.log(binarySearch())