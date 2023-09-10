let fs=require('fs')

let local='testcase.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local

//n개의 공 k개의 바구니
let [n,k]= fs.readFileSync(inputPath).toString().split(' ').map(Number)

//k개까지의 누적합 구하기
//(총 개수-누적합빼기) % 바구니 개수 가 0이 아니면 최소와 최대의 차이는 N이고, 0이면 N-1 차이남
let sum=0
let arr=new Array(k+1).fill(0)
for(let i=1;i<k+1;i++){
    sum+=i
    arr[i]=sum
}

// console.log(arr)

if(arr[k]>n ){//누적합보다 가진 공의 개수가 작으면 불가, 짝수면 k가 2일때 불가
    console.log(-1)
}else{
    let remain=n-arr[k]
    if(remain%k===0){
        console.log(k-1)
    }
    else{
        console.log(k)
    }
}