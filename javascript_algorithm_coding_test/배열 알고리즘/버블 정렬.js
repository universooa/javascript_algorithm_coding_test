let fs=require('fs')

let forBaekjoon=1
let local='testcase.txt'
let remote='/dev/stdin'

let inputPath=forBaekjoon?remote:local

let inputValue=fs.readFileSync(inputPath).toString().split('\n')

let arr=inputValue[1].split(' ').map(Number)

// console.log(arr)

for(let i=0;i<arr.length;i++){
    for(let j=1;j<=arr.length-i;j++){
        if(arr[j-1]>arr[j]){
            let temp=arr[j-1]
            arr[j-1]=arr[j]
            arr[j]=temp
        }

    }
    // console.log(arr)
}
console.log(`${arr[0]} ${arr[inputValue[0]-1]}`)