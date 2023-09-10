let fs=require('fs')

let local='testcase.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local

let inputV=fs.readFileSync(inputPath).toString().split('\n')
let num=Number(inputV[0])
let arr=[]

for(let i=1;i<=num;i++){
    arr.push(inputV[i].replace('\r','')) //개행문자 제거
}

//회문이면 0, 유사회문이면 1, 그 외는 2
let answer=''
for(let j of arr){
    if(isPalindrom(j)){
        answer+=`0\n`
    }
    else if (similarPalindrom(j)){
        answer+=`1\n`
    }else{
        answer+=`2\n`
    }
}

console.log(answer)

function similarPalindrom(arr){
    let startIdx=0
    let endIdx=arr.length-1
    let mid= Math.floor((startIdx+endIdx)/2)
    let flag=true
    for(let i=0;i<=mid;i++){
        if(arr[startIdx]!==arr[endIdx]){
            let splitArr=arr.split('')
            splitArr.splice(endIdx,1) //요소 제거
            if(isPalindrom(splitArr.join(''))){
                flag=true
            }else{
                splitArr=arr.split('')
                splitArr.splice(startIdx,1) //요소 제거
                flag = isPalindrom(splitArr.join(''));
            }
            break
        }
        startIdx+=1
        endIdx-=1
    }
    return flag
}

function isPalindrom(arr){
    let startIdx=0
    let endIdx=arr.length-1
    let mid= Math.floor((startIdx+endIdx)/2)
    let flag=true
    for(let i=0;i<=mid;i++){
        if(arr[startIdx]!==arr[endIdx]){
            flag=false
            break
        }
        startIdx+=1
        endIdx-=1
    }
    return flag
}