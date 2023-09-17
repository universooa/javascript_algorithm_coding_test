let fs=require('fs')

let local='testcase.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local

let inputV=fs.readFileSync(inputPath).toString().split('\n')

let num=inputV[0]*1
let arr=inputV[1].split(' ').map(Number)

arr.reverse()

// console.log(arr)

function lowerBound(arr,target){
    let start=0
    let end=arr.length
    while(start<end){
        let mid=Math.floor((start+end)/2)
        if(arr[mid]>=target){
            end=mid
        }else{
            start=mid+1
        }
    }
    return end
}

function LIS(arr){
    //LIS - Longest Increasing Subsequence 가장 긴 증가하는 부분 수열
    let lis=[0]
    for(const i of arr){
        if(lis[lis.length-1]<i){
            //가장 큰 원소면 맨 끝에 추가
            lis.push(i)
        }else{
            //최대한 작은 원소와 교체
            let idx=lowerBound(lis,i)
            lis[idx]=i
        }
    }
    return lis.length-1
}

console.log(arr.length-LIS(arr)) //열외된 병사의 수