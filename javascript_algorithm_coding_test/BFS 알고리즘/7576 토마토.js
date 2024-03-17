fs=require('fs')
let inputPath=process.platform==='linux'?0:'testCase.txt'
let input=fs.readFileSync(inputPath,"utf8").trim().replaceAll('\r','').split('\n')

// sample data 만들기
// let rand=[-1,1,0]
// let randRsult=''
// for(let i=0;i<1000;i++){
//     for(let j=0;j<1000;j++){
//         randRsult+=`${rand[Math.floor(Math.random()*3)]} `
//     }
//     randRsult+=`\n`
// }
//
// fs.writeFile('./testSample.txt',randRsult,err=>{
//     if(err){
//         console.error(err)
//     }
// })

class Queue{
    constructor() {
        this.arr={}
        this.start=1
        this.end=1
    }
    getLength(){
        return this.end-this.start
    }
    enqueue(x){
        this.arr[this.end++]=x
    }
    dequeue(){
        if(this.getLength()===0){
            return
        }
        let top=this.arr[this.start]
        delete this.arr[this.start++]
        return top
    }

}


let N,M
[M,N]=input[0].split(' ').map(Number)
let arr=[]
queue=new Queue()

for(let i=1;i<=N;i++){
    arr.push(input[i].split(' ').map(Number))
    for(let j=0;j<M;j++){
        if(arr[i-1][j]===1){
            queue.enqueue([i-1,j,1])
        }
    }
}

dx=[0,0,-1,1]
dy=[-1,1,0,0]

bfs()
function bfs(){

    if(isAllRed()[0]){ // 처음부터 이미 다 익어있는지 확인
        console.log(0)
        return
    }

    makeRed(1)
    let [flag,days]=isAllRed()
    if(flag){ //토마토가 모두 익었다.
        console.log(days-1)
        return
    }else{
        console.log(-1)
    }
}



//인접한 토마토를 익혀버리는 함수
function makeRed(days){
    while(queue.getLength()!==0){
        let [cx,cy,days]=queue.dequeue()

        for(let i=0;i<4;i++){
            let nx=cx+dx[i]
            let ny=cy+dy[i]

            if(nx<0 ||ny<0 ||nx>=N||ny>=M){
                continue
            }

            if(arr[nx][ny]===0 ){
                arr[nx][ny]=days+1
                queue.enqueue([nx,ny,days+1])
            }
        }

    }
}

//익었는지 확인하는 함수
function isAllRed(){
    let flag=true
    let days=1
    for(let i=0;i<N;i++){
        for(let j=0;j<M;j++){
            if(arr[i][j]===0){
                flag=false
                return [flag,days]
            }
            if(arr[i][j]>=1){
                days=Math.max(days,arr[i][j])
            }
        }
    }
    return [flag,days]
}