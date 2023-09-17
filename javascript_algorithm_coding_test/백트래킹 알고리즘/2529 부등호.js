let fs=require('fs')

let local='testcase.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local
let inputV=fs.readFileSync(inputPath).toString().split('\n')

let k=inputV[0]*1
let operator=inputV[1].split(' ')

//k+1개를 구하면 재귀함수 멈춰라
//순열을 구하므로 백트래킹 사용
//중복 안됨
let visited=new Array(k+1).fill(false)
let arr=[]
let max='-1'
let min='1e10'

function isCorrect(kLength){
    let flag=true
    let val
    for(let j=0;j<kLength;j++){
        val= String(arr[j])+operator[j]+String(arr[j+1])
        if(!eval(val)){
            flag=false
            break
        }
    }
    return flag
}
function backTracking(arr,depth){
    if(depth===k+1){
        // console.log(arr)
        let flag=isCorrect(k)

        if(flag){
            let val=arr.join('')
            if(Number(min)>Number(val)){
                min=val
            }
            if(Number(max)<Number(val)){
                max=val
            }

        }

        return 0;
    }
    for(let i=0;i<10;i++){
        if(visited[i]){
            continue
        }

        let flag=isCorrect(arr.length-1)

        if(!flag){
            continue
        }

        arr.push(i)
        visited[i] = true
        backTracking(arr,depth+1)
        arr.pop()
        visited[i] = false
    }
}

backTracking(arr,0)
console.log(max)
console.log(min)