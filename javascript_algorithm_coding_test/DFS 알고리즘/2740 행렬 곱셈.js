fs=require('fs')
let inputPath=process.platform==='linux'?0:'testCase.txt'
let input=fs.readFileSync(inputPath,"utf8").trim().replaceAll('\r','').split('\n')

let [N,M]=input[0].split(' ').map(Number)
let arrA=[]
let arrB=[]

for(let i=1;i<=N;i++){
    arrA.push(input[i].split(' ').map(BigInt))
}

let [ME,K]=input[N+1].split(' ').map(Number)

for(let j=N+2;j<input.length;j++){
    arrB.push(input[j].split(' ').map(BigInt))
}

function add(arrA,arrB,N){
    let arrC=Array.from(Array(N),()=>{
        return new Array(N).fill(BigInt(0))
    })

    for(let i=0;i<N;i++){
        for(let j=0;j<N;j++){
            arrC[i][j]=arrA[i][j]+arrB[i][j]
        }
    }
    return arrC
}

function merge(arrC,subArr,x1,y1,N){
    for(let i=x1,nx=0;nx<N;i++,nx++){
        for(let j=y1,ny=0;ny<N;j++,ny++){
            arrC[i][j]=subArr[nx][ny]
        }
    }

    return arrC
}

function subtraction(arrA,arrB,N){
    let arrC=Array.from(Array(N),()=>{
        return new Array(N).fill(BigInt(0))
    })

    for(let i=0;i<N;i++){
        for(let j=0;j<N;j++){
            arrC[i][j]=arrA[i][j]-arrB[i][j]
        }
    }
    return arrC
}


function multiply(arrA,arrB,size){
    let arrC=Array.from(Array(size),()=>{
        return new Array(size).fill(BigInt(0))
    })

    if(size<=1){
        for(let j=0;j<size;j++){
            for(let i=0;i<size;i++) {
                let result = 0
                for (let k = 0; k < size; k++) {
                    arrC[i][k] += arrA[i][j] * arrB[j][k]
                }
            }
        }
        return arrC
    }

    // let half=BigInt(Math.floor(size/2))
    let half=Math.floor(size/2)
    let a11=subArray(arrA,0,0,half)
    let a12=subArray(arrA,0,half,half)
    let a21=subArray(arrA,half,0,half)
    let a22=subArray(arrA,half,half,half)

    let b11=subArray(arrB,0,0,half)
    let b12=subArray(arrB,0,half,half)
    let b21=subArray(arrB,half,0,half)
    let b22=subArray(arrB,half,half,half)


    let m1=multiply(add(a11,a22,half),add(b11,b22,half),half)

    let m2=multiply(add(a21,a22,half),b11,half)
    let m3=multiply(a11,subtraction(b12,b22,half),half)
    let m4=multiply(a22,subtraction(b21,b11,half),half)
    let m5=multiply(add(a11,a12,half),b22,half)
    let m6=multiply(subtraction(a21,a11,half),add(b11,b12,half),half)
    let m7=multiply(subtraction(a12,a22,half),add(b21,b22,half),half)

    let c11=add(subtraction(add(m1,m4,half),m5,half),m7,half)
    let c12=add(m3,m5,half)
    let c21=add(m2,m4,half)
    let c22=add(add(subtraction(m1,m2,half),m3,half),m6,half)

    arrC=merge(arrC,c11,0,0,half)
    arrC=merge(arrC,c12,0,half,half)
    arrC=merge(arrC,c21,half,0,half)
    arrC=merge(arrC,c22,half,half,half)

    return arrC
}

function subArray(arr,x1,y1,N){
    let subArr=Array.from(Array(N),()=>{
        return new Array(N).fill(BigInt(0))
    })
    for(let i=x1,nx=0;nx<N;i++,nx++){
        for(let j=y1,ny=0;ny<N;j++,ny++){
            subArr[nx][ny]=arr[i][j]
        }
    }
    return subArr
}


function padding(arr,N,M,maxLen){
    if(N<maxLen){
        for(let i=0;i<maxLen-N;i++){
            arr.push(new Array(maxLen).fill(BigInt(0)))
        }
    }

    for(let i=0;i<arr.length;i++){
        if(arr[i].length<maxLen){
            let arrLen=arr[i].length
            for(let j=0;j<maxLen-arrLen;j++){
                arr[i].push(BigInt(0))
            }
        }
    }

    return arr
}


let maxLen=Math.max(N,M)
maxLen=Math.max(maxLen,K)
maxLen=nearstPow(2,maxLen)

arrA=padding(arrA,N,M,maxLen)
arrB=padding(arrB,M,K,maxLen)


function nearstPow(a,p){
    let idx=0
    while(1){
        if(a**idx>=p){
            break
        }
        idx++
    }

    return a**idx
}

let arrC=multiply(arrA,arrB,maxLen)

let result=''
for(let i=0;i<N;i++){
    for(let j=0;j<K;j++){
        result+=`${arrC[i][j]} `
    }
    result.trimEnd()
    result+=`\n`
}

console.log(result)