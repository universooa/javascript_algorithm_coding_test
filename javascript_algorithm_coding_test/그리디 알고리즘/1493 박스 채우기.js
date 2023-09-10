let fs=require('fs')

let local='testcase.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local

let inputV=fs.readFileSync(inputPath).toString().split('\n')

let boxLength=inputV[0].split(' ').map(Number)


let numOfCube=Number(inputV[1])
let arr=[]
for(let i=2;i<=numOfCube+1;i++){
    arr.push(inputV[i].split(' ').map(Number))
}

// console.log(arr)

//단위를 1x1x1로 맞춰라.
//사용한 큐브의 길이만큼 나눠서 필요한 개수를 구한다.
//큐브가 줄어들었을 때 이미 사용된 큐브의 개수도 그에 맞춰 계산을 해줘야 한다.
//큐브는 2x2x2만큼 줄어들었으므로 이미 사용된 큐브의 개수는 8을 곱해줘야 그 개수가 같아진다.
// 큐브가 32x32x32 였을때 3개를 사용했다면, 16x16x16였을때는 그 3개가 24개가 된다..
let cnt=0;
let used=0
for(let j=arr.length-1;j>=0;j--){
    used*=8
    let [size,num]=arr[j]
    let cur=2**size
    let neededCube=Math.floor(boxLength[0]/cur)
        * Math.floor(boxLength[1]/cur)
        * Math.floor(boxLength[2]/cur)
        -used

    let usage=Math.min(neededCube,num)
    used+=usage
    cnt+=usage

}

if(used===boxLength[0]*boxLength[1]*boxLength[2]){
    console.log(cnt)
}else{
    console.log(-1)
}