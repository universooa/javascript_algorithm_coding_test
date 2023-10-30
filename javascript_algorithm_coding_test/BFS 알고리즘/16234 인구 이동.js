fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let inputV=fs.readFileSync(inputPath,"utf8").trim().split('\n')

class Queue{
    constructor() {
        this.headIdx=0;
        this.tailIdx=0;
        this.items={}
    }
    enqueue(value){
        this.items[this.tailIdx]=value
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

}


[N,L,R]=inputV[0].split(' ').map(Number)
let graph=[]
for(let i=1;i<=N;i++){
    graph[i-1]=inputV[i].split(' ').map(Number)
}
let dirX = [1, -1, 0, 0]
let dirY = [0, 0, 1, -1]
flag=true
let result=0
while(true){ //인구 이동이 없을때까지 반복

    moveNation()

    if(!flag){
        console.log(result)
        break
    }

    result++
    for(let nx=0;nx<N;nx++){
        for(let ny=0;ny<N;ny++){
            let idx=visited[nx][ny] //나의 연합 국가 인덱스를 구한다.
            if(idx>=0){
                let [sum,cnt]=idxCnt[idx]
                graph[nx][ny]=Math.floor(sum/cnt) //인구 이동
            }
        }
    }
}


function moveNation() {
    flag=false
//인구 이동
    visited = Array.from(Array(N), () => {
        return Array(N).fill(-1)
    })

    queue = new Queue()
    idxCnt = {} //연합 국가의 총 인구수와 국가수를 저장한다.
    let idx = 0
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (visited[i][j]<0) { //방문 안했으면
                queue.enqueue([i, j, idx])
                idxCnt[idx] = [graph[i][j], 1] //연합 인구수,연합 개수
                visited[i][j] = idx //연합 국가 인덱스를 저장한다.
                bfs()
            }
            idx++
        }
    }
}


function bfs() {
    while (queue.getLength() !== 0) {
        let [x, y, idx] = queue.dequeue()

        for (let d = 0; d < 4; d++) {
            let newX = x + dirX[d]
            let newY = y + dirY[d]

            if (newX < 0 || newY < 0 || newX >= N || newY >= N) {
                continue
            }

            let dif = Math.abs(graph[x][y] - graph[newX][newY])
            if (dif >= L && dif <= R) {
                if(visited[newX][newY]>=0){
                    continue
                }
                //인구이동 가능
                flag=true
                visited[newX][newY] = idx // 연합 국가와 같은 인덱스를 넣어준다.
                queue.enqueue([newX, newY, idx])
                let [unionPeople, unionCnt] = idxCnt[idx]
                idxCnt[idx] = [unionPeople + graph[newX][newY], unionCnt + 1] //연합 인구수,연합 개수
                //연합 국가 수를 다시 계산해준다.
            }

        }
    }
}