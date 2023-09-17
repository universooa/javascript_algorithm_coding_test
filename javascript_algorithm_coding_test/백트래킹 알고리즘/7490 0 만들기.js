let fs=require('fs')

let local='testcase.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local
let inputV=fs.readFileSync(inputPath).toString().split('\n')

// 1부터 N까지의 수를 오름차순으로 쓴 수열 1 2 3 ... N을 생각하자.
// 그리고 '+'나 '-', 또는 ' '(공백)을 숫자 사이에 삽입하자(+는 더하기, -는 빼기, 공백은 숫자를 이어 붙이는 것을 뜻한다). 이렇게 만든 수식의 값을 계산하고 그 결과가 0이 될 수 있는지를 살피자.
// N이 주어졌을 때 수식의 결과가 0이 되는 모든 수식을 찾는 프로그램

let testCase=inputV[0]*1

let operator=[' ','+','-']

function backTracking(arr,depth,target){
    if(depth===target){
        let result='1'
        for(let k=2;k<=target+1;k++){
            result+=arr[k-2]+String(k)
        }
        if(eval(result.split(' ').join(''))===0){
            answer+=`${result}\n`
            // console.log(result)
        }
        return 0
    }
    for(let j=0;j<3;j++){
        arr.push(operator[j])
        backTracking(arr,depth+1,target)
        arr.pop()
    }


}

let answer=''
let arr=[]
for(let i=0;i<testCase;i++){
    arr=[]
    backTracking(arr,0,inputV[i+1]*1-1)
    console.log(answer)
    answer=''
    // console.log()
}


console.log(answer)
