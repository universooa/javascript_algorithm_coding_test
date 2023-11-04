fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let inputV=fs.readFileSync(inputPath,"utf8").trim().split('\n')

class Queue{
    constructor() {
        this.headIdx=0;
        this.tailIdx=0;
        this.items={}
    }
    enqueue(val){
        this.items[this.tailIdx]=val;
        this.tailIdx++
    }
    dequeue(){
        let val=this.items[this.headIdx]
        delete this.items[this.headIdx]
        this.headIdx++
        return val
    }
    getLength(){
        return this.tailIdx-this.headIdx
    }

    getPeek(){
        return this.items[this.tailIdx-1]
    }
}

let N=Number(inputV[0])
let K=Number(inputV[1])
let graph=Array.from(Array(N).fill(0),()=>{
    return Array(N).fill(0)
})
for(let i=2;i<2+K;i++){
    let [x,y]=inputV[i].split(' ').map(Number)
    graph[x-1][y-1]=1 //사과
}

let C=Number(inputV[2+K])
let timeInfo=new Queue()
for(let j=3+K;j<3+K+C;j++){
    let [time,dir]=inputV[j].trim().split(' ')
    timeInfo.enqueue([Number(time),dir])
}


let snake=new Queue()
snake.enqueue([0,0])
graph[0][0]=2 //뱀 위치 표시
let dirArr=[[0,1],[1,0],[0,-1],[-1,0]]
let curDir=0
let time=0
let timeFlag=true
let [curTime,curTimeDir]=timeInfo.dequeue()
while(snake.getLength()!==0){
    time++
    // console.log(`time:${time}`,snake)
    let [valX,valY]=snake.getPeek()

    let newX=valX+dirArr[curDir][0]
    let newY=valY+dirArr[curDir][1]
    if(newX<0 || newY<0 ||newX>=N ||newY>=N){
        break
    }
    else if(graph[newX][newY]===2){
        break //몸과 부딪히면 종료
    }

    snake.enqueue([newX,newY])
    if(graph[newX][newY]!==1){
        //사과 안먹음
        let [tailX,tailY]=snake.dequeue() //꼬리가 위치한 칸을 비운다.
        graph[tailX][tailY]=0
    }
    graph[newX][newY]=2

    if(timeFlag && curTime===time){
        if(curTimeDir==='L'){ //왼쪽으로 90도 회전
            if(curDir===0){
                curDir=3
            }else{
                curDir-=1
            }
        }else{
            if(curTimeDir==='D'){//오른쪽으로 90도 회전
                if(curDir===3){
                    curDir=0
                }else{
                    curDir++
                }
            }
        }
        if(timeInfo.getLength()!==0){
            [curTime,curTimeDir]=timeInfo.dequeue()
        }else{
            timeFlag=false
        }

    }



}

console.log(time)