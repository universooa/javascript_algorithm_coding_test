let fs=require('fs')

let forBaekjoon=0
let local='testcase.txt'
let remote='/dev/stdin'

let inputPath=forBaekjoon?remote:local

let inputValue=fs.readFileSync(inputPath).toString().trim().split('\n')

let answer=''

for(let testCase=1;testCase<=inputValue[0];testCase++){
    let tcValue= inputValue[testCase].split(' ')
    let numOfStudent=tcValue[0]
    let score=tcValue.slice(1)

    const sum= score.reduce((acc,cur)=>{
        return acc+parseInt(cur)
    },0)

    let avg=sum/numOfStudent

    let moreThanAvg=0

    for(let i=0;i<numOfStudent;i++){
        if(score[i]>avg){
            moreThanAvg+=1
        }
    }
    let ratio=(moreThanAvg/numOfStudent)*100
    answer+=`${ratio.toFixed(3)}%\n`
}

console.log(answer)