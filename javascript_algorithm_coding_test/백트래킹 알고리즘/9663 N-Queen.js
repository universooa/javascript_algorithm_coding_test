let fs=require('fs')

let local='testcase.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local
let inputV=fs.readFileSync(inputPath).toString().split('\n')

let n=inputV[0]*1

let arr=[]
let cnt=0
function backTracking(arr,depth){
    if(depth===n){
        // console.log(arr)
        cnt+=1
        return 0;
    }
    for(let i=0;i<n;i++){
        let flag=true
        for(let j=0;j<arr.length;j++){
            if(arr[j][1]===i){
                flag=false
            }
            else if(Math.abs(arr[j][0]-depth)===Math.abs(arr[j][1]-i)){
                flag=false
            }
        }
        if(flag){
            arr.push([depth,i])
            backTracking(arr,depth+1)
            arr.pop()
        }
    }
}

backTracking(arr,0)
console.log(cnt)