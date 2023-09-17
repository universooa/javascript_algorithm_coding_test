let fs=require('fs')

let local='testcase.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local
let inputV=fs.readFileSync(inputPath).toString().split('\n')

let n=inputV[0]*1
let foods=[]

for(let i=1;i<=n;i++){
    foods.push(inputV[i].split(' ').map(Number))
}

let arr=[]
let answer=1e9
function backTracking(arr,depth,start){//재료의 순서는 중요하지 않으므로 조합
    if(depth>n){
        return 0;
    }
    if(1<=depth){
        // console.log(arr)

        let sour=1
        let bitter=0
        for(let k of arr){
            sour*=foods[k-1][0]
            bitter+=foods[k-1][1]
        }
        // console.log(Math.abs(sour-bitter))
        answer=Math.min(answer,Math.abs(sour-bitter))
    }
    for(let i=start;i<=n;i++){
        arr.push(i)
        backTracking(arr,depth+1,i+1)
        arr.pop()
    }

}

backTracking(arr,0,1)
console.log(answer)


/*
지금 도영이의 앞에는 재료가 N개 있다. 도영이는 각 재료의 신맛 S와 쓴맛 B를 알고 있다. 여러 재료를 이용해서 요리할 때, 그 음식의 신맛은 사용한 재료의 신맛의 곱이고, 쓴맛은 합이다.
시거나 쓴 음식을 좋아하는 사람은 많지 않다. 도영이는 재료를 적절히 섞어서 요리의 신맛과 쓴맛의 차이를 작게 만들려고 한다. 또, 물을 요리라고 할 수는 없기 때문에, 재료는 적어도 하나 사용해야 한다.
재료의 신맛과 쓴맛이 주어졌을 때, 신맛과 쓴맛의 차이가 가장 작은 요리를 만드는 프로그램을 작성하시오.
첫째 줄에 재료의 개수 N(1 ≤ N ≤ 10)이 주어진다. 다음 N개 줄에는 그 재료의 신맛과 쓴맛이 공백으로 구분되어 주어진다. 모든 재료를 사용해서 요리를 만들었을 때, 그 요리의 신맛과 쓴맛은 모두 1,000,000,000보다 작은 양의 정수이다.
첫째 줄에 신맛과 쓴맛의 차이가 가장 작은 요리의 차이를 출력한다.
*/