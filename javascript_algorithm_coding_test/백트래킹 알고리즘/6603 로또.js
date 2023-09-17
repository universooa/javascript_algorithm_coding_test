let fs=require('fs')

let local='testcase.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local
let inputV=fs.readFileSync(inputPath).toString().split('\n')

let answer=''
function backTracking(lotto,n,arr,depth,start){
    if(depth===6){
        for(let k of arr){
            answer+=`${lotto[k-1]} `
        }
        answer+='\n'
        return 0;
    }
    for(let i=start;i<=n;i++){
        arr.push(i)
        backTracking(lotto,n,arr,depth+1,i+1)
        arr.pop()
    }
    return answer
}

let testCase=0
let arr=[]
let totalAnswer=''
while(inputV[testCase][0]!=='0'){
    let lotto=inputV[testCase].split(' ').map(Number)
    let n=lotto.shift()
    arr=[]
    answer=''

    // console.log(`n:${n},lotto:${lotto}`)
    totalAnswer+=`${backTracking(lotto,n,arr,0,1)}\n`

    testCase+=1
}

console.log(totalAnswer)

/*
독일 로또는 {1, 2, ..., 49}에서 수 6개를 고른다.
로또 번호를 선택하는데 사용되는 가장 유명한 전략은 49가지 수 중 k(k>6)개의 수를 골라 집합 S를 만든 다음 그 수만 가지고 번호를 선택하는 것이다.
예를 들어, k=8, S={1,2,3,5,8,13,21,34}인 경우 이 집합 S에서 수를 고를 수 있는 경우의 수는 총 28가지이다. ([1,2,3,5,8,13], [1,2,3,5,8,21], [1,2,3,5,8,34], [1,2,3,5,13,21], ..., [3,5,8,13,21,34])
집합 S와 k가 주어졌을 때, 수를 고르는 모든 방법을 구하는 프로그램을 작성하시오.
*/