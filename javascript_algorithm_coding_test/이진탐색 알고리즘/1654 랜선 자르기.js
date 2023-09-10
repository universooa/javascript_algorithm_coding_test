let fs=require('fs')

let local='testcase.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local

let inputV=fs.readFileSync(inputPath).toString().split('\n')

//가지고 있는 랜선의 개수 k, 필요한 랜선의 개수 n

let [k,n]=inputV[0].split(' ').map(Number)
let arr=[]
for(let i=1;i<inputV.length;i++){
    arr.push(Number(inputV[i]))
}

let start=1 //start가 0일때 85%에서 실패했음..........
//항상 만들 수 있으므로 start는 1
let end=Math.max(...arr)
//가장 긴 랜선만으로 필요한 길이를 충족할 수 있기 때문에 가장 긴 길이 기준으로 파라메트릭 서치 진행
let mid=0
let answer=0
while(start<=end){
    mid=Math.floor((start+end)/2)
    let cnt=0
    for(let j of arr){
        if(mid<=j){  //같은 길이여야하기 때문에 해당 길이보다 작은 랜선은 사용할 수 없다.
            cnt+=Math.floor(j/mid) // 나머지는 버림
        }
    }
    if(cnt>=n){
        //최소 n개 이상을 충족한다.
        //랜선의 길이가 최대가 되는 수를 구한다.
        //n개 이상이 되려면 현재 거보다 작게 잘라야하는데...
        start=mid+1
        answer=mid
    }else{
        end=mid-1
    }
}

console.log(answer)