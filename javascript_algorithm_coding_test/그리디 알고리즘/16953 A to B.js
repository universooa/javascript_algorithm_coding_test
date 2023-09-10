let fs=require('fs')

let local='testcase.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local

let [a,b]= fs.readFileSync(inputPath).toString().split(' ').map(Number)

//B->A로 가는 문제로 풀기
//맨 끝자리가 1이면 1을 떼고, 짝수면 2로 나누기
//항상 a<b이다.

let cnt=0


while(a<b){ //for loop 를 한 번은 꼭 돌게 되어 있음.

    if(b%2===0){
        b/=2
    }else if(b%10===1){
        b=Math.floor(b/10)
    }else{
        break
    }
    // console.log(b)
    cnt+=1
}

if(a!==b){
    cnt=-1
}else{
    cnt+=1
}
console.log(cnt) //출력이 연산의 최솟값에 1을 더하라함; 굳2??