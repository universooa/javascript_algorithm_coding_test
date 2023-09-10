let fs=require('fs')

let local='testcase.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local

let inputV= parseInt(fs.readFileSync(inputPath).toString())

// 5의 배수가 될 때까지 3 빼주기
let cnt=0
let flag=false
while(inputV>-1){
    if(inputV%5===0 || inputV===0){
        cnt+= Math.floor(inputV/5)
        flag=true
        break
    }else{
        inputV-=3
    }
    cnt+=1
}

if(flag){
    console.log(cnt)
}else{
    console.log(-1)
}