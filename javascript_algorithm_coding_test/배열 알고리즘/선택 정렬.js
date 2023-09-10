let fs=require('fs')

let forBaekjoon=1
let local='testcase.txt'
let remote='/dev/stdin'

let inputPath=forBaekjoon?remote:local

let inputValue=fs.readFileSync(inputPath).toString().split('\n')

let arr=inputValue[1].split(' ').map(Number)

console.log(arr)


for (let i=0;i<arr.length;i++){
    let minIndex=i
    for(let j=i+1;j<arr.length;j++){

        if(arr[minIndex]>arr[j]){
            minIndex=j
        }
    }
    let temp=arr[i]
    arr[i]=arr[minIndex]
    arr[minIndex]=temp
}

console.log(`${arr[0]} ${arr[inputValue[0]-1]}`)