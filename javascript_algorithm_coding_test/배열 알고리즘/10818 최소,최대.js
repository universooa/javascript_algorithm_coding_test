let fs=require('fs')

let forBaekjoon=0
let local='testcase.txt'
let remote='/dev/stdin'

let inputPath=forBaekjoon?remote:local

let inputValue=fs.readFileSync(inputPath).toString().split('\n')

let arr=inputValue[1].split(' ').map(Number)

function merge(leftArr,rightArr){
    let leftIdx=0;
    let rightIdx=0;
    let temp=[]
    while(leftIdx<leftArr.length&&rightIdx<rightArr.length){
        if(leftArr[leftIdx]>rightArr[rightIdx]){
            temp.push(rightArr[rightIdx])
            rightIdx+=1
        }else{
            temp.push(leftArr[leftIdx])
            leftIdx+=1
        }
    }

    while(leftIdx<leftArr.length){
        temp.push(leftArr[leftIdx])
        leftIdx+=1
    }

    while(rightIdx<rightArr.length){
        temp.push(rightArr[rightIdx])
        rightIdx+=1
    }

    return temp
}

// console.log(merge([2,4,6,7],[6,7,13,16]))


function mergeSort(arr){
    // console.log(arr)
    if(arr.length<=1){
        return arr
    }

    let start=0;
    let end=arr.length
    let mid= parseInt((start+end)/2)
    // console.log(end)

    let leftArr=arr.slice(start,mid)
    let rightArr=arr.slice(mid)

    leftArr= mergeSort(leftArr)
    rightArr= mergeSort(rightArr)

    // console.log(`left: ${leftArr}, right: ${rightArr}`)
    let temp=merge(leftArr,rightArr)

    return temp

}

arr=mergeSort(arr)


console.log(`${arr[0]} ${arr[inputValue[0]-1]}`)