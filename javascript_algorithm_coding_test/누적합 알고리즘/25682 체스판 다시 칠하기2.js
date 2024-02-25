fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let input=fs.readFileSync(inputPath,"utf8").trim().replaceAll('\r','').split('\n')

let [N,M,K]=input[0].split(' ').map(Number)
let board=[[]]

for(let i=1;i<=N;i++){
    let tmp=input[i].split('')
    tmp.unshift('')
    board.push(tmp)
}



function checkBoard(color){

    for(let i=1;i<=N;i++){
        for(let j=1;j<=M;j++){
            sumArr[i][j]=sumArr[i-1][j]+sumArr[i][j-1]-sumArr[i-1][j-1]
            if(i%2===0){
                if(j%2===0 && board[i][j]===color){
                    sumArr[i][j]++
                }else if(j%2===1 && board[i][j]!==color){
                    sumArr[i][j]++
                }
            }else{
                if(j%2===0 && board[i][j]!==color){
                    sumArr[i][j]++
                }else if(j%2===1 && board[i][j]===color){
                    sumArr[i][j]++
                }
            }
        }
    }
}

function findMostSimilar(){

    let start=1 //왼쪽 상단 좌표
    let end=1
    for(let i=K;i<=N;i++,start++){ //오른쪽 하단 좌표
        for(let j=K;j<=M;j++,end++){
            result=Math.max(result,sumArr[i][j]-sumArr[start-1][j]-sumArr[i][end-1]+sumArr[start-1][end-1])
        }
        end=1
    }

}

let sumArr=Array.from(Array(N+1),()=>{
    return new Array(M+1).fill(0)
})

result=0
function cntSimilarity(color){
    sumArr=Array.from(Array(N+1),()=>{
        return new Array(M+1).fill(0)
    })

    checkBoard(color)
    // console.log(sumArr)
    findMostSimilar()
    // console.log(result)
}

cntSimilarity('B')
cntSimilarity('W')


console.log(K**2-result)
