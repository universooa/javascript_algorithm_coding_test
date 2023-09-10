let fs=require('fs')

let local='testcase.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local

let inputV= fs.readFileSync(inputPath).toString().split('\n')

let testCase=Number(inputV[0])

function compare(a,b){
    return a.a-b.a
}

let answer=''
let idx=1
for(let i=0;i<testCase;i++){
    let num=Number(inputV[idx])
    idx+=1
    let arr=[]

    for(let j=idx;j<idx+num;j++){
        // console.log(j)
        // console.log(inputV[j])
        let [a,b]=inputV[j].toString().split(' ').map(Number)
        arr.push({a,b})
    }
    idx+=num
    arr.sort(compare)
    // console.log(arr)
    let min=arr[0].b
    let cnt=1
    for(let j=1;j<arr.length;j++){
        if(min>arr[j].b){
            cnt+=1
            min=arr[j].b
        }
    }

    answer+=`${cnt}\n`
}

console.log(answer)