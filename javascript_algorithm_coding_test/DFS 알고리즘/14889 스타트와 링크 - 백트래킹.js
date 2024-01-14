const fs=require('fs')
let local='../test.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local

const input=fs.readFileSync(inputPath,"utf-8").trim().split('\n')

let N=Number(input[0])
let arr=[]
for(let i=1;i<=N;i++){
    arr.push(input[i].split(' ').map(Number))
}


// 조합을 만들고 두 쌍을 만든다음에 차이가 최솟값이 되는 쌍을 구한다.
// 조합을 구할 때 백트래킹함

let res=1e9
let firstGroup=[]
let secondGroup=[]
let setValue=new Set()
backTracking(0,0)

function backTracking(limit,start){
    if(limit===N/2){

        secondGroup=[]
        for(let i=0;i<N;i++){
            if(!firstGroup.includes(i)){
                secondGroup.push(i)
            }
        }
        // console.log(firstGroup,secondGroup)
        let firstTotal=0
        let secondTotal=0

        for(let i=0;i<N/2;i++){
            for(let j=0;j<N/2;j++ ){
                if(i!==j){
                    firstTotal+=arr[firstGroup[i]][firstGroup[j]]
                }
            }
        }
        for(let i=0;i<N/2;i++){
            for(let j=0;j<N/2;j++ ){
                if(i!==j){
                    secondTotal+=arr[secondGroup[i]][secondGroup[j]]
                }
            }
        }

        res=Math.min(res,Math.abs(firstTotal-secondTotal))
        return
    }
    for(let i=start;i<N;i++){
        firstGroup.push(i)
        backTracking(limit+1,i+1)
        firstGroup.pop()

    }

}



console.log(res)