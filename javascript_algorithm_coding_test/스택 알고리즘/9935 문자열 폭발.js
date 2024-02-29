fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let input=fs.readFileSync(inputPath,"utf8").trim().replaceAll('\r','').split('\n')

let boxLength=input[0].split(' ').map(Number)


let numOfCube=Number(input[1])
let arr=new Array(20).fill(0)
for(let i=2;i<=numOfCube+1;i++){
    let [a,b]=input[i].split(' ').map(Number)
    arr[a]=b
}

function nearstSquare(x){
    let i=1;
    while((2**i)<=x){
        i++
    }
    return i-1
}

let size=nearstSquare(boxLength[0])
size=Math.min(size,nearstSquare(boxLength[1]))
size=Math.min(size,nearstSquare(boxLength[2]))

let cnt=0;
let used=0
for(let j=size;j>=0;j--){
    used*=8
    let num=arr[j]
    let cur=2**j

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