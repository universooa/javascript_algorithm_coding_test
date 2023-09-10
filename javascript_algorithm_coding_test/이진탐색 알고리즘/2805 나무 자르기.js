let fs=require('fs')

let local='testcase.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local

let inputV=fs.readFileSync(inputPath).toString().split('\n')

//n은 나무의 길이, m 은 가져가려고 하는 나무의 길이
let [n,m]=inputV[0].split(' ').map(Number)
let trees=inputV[1].split(' ').map(Number)

let start=0
let end=Math.max(...trees)
let mid=0
let totalHeight=0
let answer=0
while(start<=end){
    mid=Math.floor((start+end)/2)
    totalHeight=0
    for(let tree of trees){
        if(tree>mid){
            totalHeight+=tree-mid
        }
    }
    if(totalHeight>=m){
        //적어도 m을 만족하는 톱 높이의 최댓값
        //필요한 것보다 많이 잘랐으면 톱날의 높이 높임
        start=mid+1
        answer=mid
    }else if(totalHeight<m){
        //부족하면 더 잘라야 하므로 톱날의 높이 낮춤
        end=mid-1
    }
}

console.log(answer)