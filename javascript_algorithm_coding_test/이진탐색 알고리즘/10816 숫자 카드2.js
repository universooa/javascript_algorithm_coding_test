fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let inputV=fs.readFileSync(inputPath).toString().split('\n')

let n=Number(inputV[0])
let allCards=inputV[1].split(' ').map(Number)
let m=Number(inputV[2])
let searchCards=inputV[3].split(' ').map(Number)

allCards.sort((a,b)=>{
    return a-b //sort asc
})

// console.log(allCards)

function binarySearchLeftIdx(arr,start,end,target){
    let mid=-1
    while(start<end){
        mid=Math.floor((start+end)/2)
        if(arr[mid]>=target){
            end=mid //최대한 왼쪽으로 보냄
        }else {
            start=mid+1
        }
    }
    // console.log(`target:${target},mid:${mid}`)
    return end
}

function binarySearchRightIdx(arr,start,end,target){
    let mid=-1
    while(start<end){
        mid=Math.floor((start+end)/2)
        if(arr[mid]>target){
            end=mid
        }else {
            start=mid+1 //최대한 오른쪽으로 보냄
        }
    }
    // console.log(`target:${target},mid:${mid}`)
    return end
}

function countByRange(arr,left,right){
    let rightIdx=binarySearchRightIdx(arr,0,arr.length,right)
    let leftIdx=binarySearchLeftIdx(arr,0,arr.length,left)

    return rightIdx-leftIdx

}

let answer=''
for(let i=0;i<searchCards.length;i++){
    let cnt=countByRange(allCards,searchCards[i],searchCards[i])

    answer+=`${cnt} `

}

console.log(answer.trim())