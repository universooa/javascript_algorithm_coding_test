let fs=require('fs')

let forBaekjoon=1
let local='testcase.txt'
let remote='/dev/stdin'

let inputPath=forBaekjoon?remote:local

let inputValue=fs.readFileSync(inputPath).toString().split('\n')

let arr=inputValue[1].split(' ').map(Number)

for (let i=1;i<arr.length;i++){
    let idx=i
    while(idx>0){
        if(arr[idx]>=arr[idx-1]){
            break
        }else{
            let temp=arr[idx]
            arr[idx]=arr[idx-1]
            arr[idx-1]=temp
        }
        idx--
    }
    // console.log(arr)
}


console.log(`${arr[0]} ${arr[inputValue[0]-1]}`)