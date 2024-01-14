const fs=require('fs')
let local='../test.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local

const input=fs.readFileSync(inputPath,"utf-8").trim().split('\n')

let [N,M]=input[0].split(' ').map(Number)
let arr=input[1].split(' ').map(Number)
let prefixSum=[0]
let sum=0
let cnt={0:0}

for(let i=0;i<N;i++){
    sum+=arr[i]
    if(sum%M in cnt){
        cnt[sum%M]++
    }else{
        cnt[sum%M]=1
    }
    prefixSum.push(sum)
}

let res=cnt[0] //누적합 % M 의 나머지가 0 인 경우 0~index 까지의 합이 M으로 나누어떨어진다는 것이므로 2개를 고를 필요없음
for(let j of Object.keys(cnt)){
    res+=Math.floor((cnt[j]*(cnt[j]-1))/2) // prefix%M 의 나머지가 같은 것 중에서 2개를 뽑는다 (nC2 조합)
}

console.log(res)