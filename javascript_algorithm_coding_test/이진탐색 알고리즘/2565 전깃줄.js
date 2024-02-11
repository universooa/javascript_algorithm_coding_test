fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let input=fs.readFileSync(inputPath,"utf8").trim().split('\n')

let N=Number(input[0])
let arr=[]
for(let i=1;i<=N;i++){
    let [a,b]=input[i].split(' ').map(Number)
    arr.push([a,b])
}

arr.sort((a,b)=>{
    return a[0]-b[0] //a 기준 오름차순 정렬
    //a-b가 양수면 b가 앞으로 온다. 작은 b가 a보다 앞으로 오므로 오름차순이 됨
})

let answer=[arr[0][1]]
function lowerBound(value){
    let start=0
    let end=answer.length-1

    while(start<end){
        let mid=Math.floor((start+end)/2)
        if(answer[mid]<value){
            start=mid+1
        }else{
            end=mid
        }
    }
    return end

}



for(let i=1;i<N;i++){
    let idx=lowerBound(arr[i][1])
    if(answer[answer.length-1]<arr[i][1]){
        answer.push(arr[i][1])
    }else{
        answer[idx]=arr[i][1]
    }
}


console.log(N-answer.length)