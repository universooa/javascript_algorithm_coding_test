let fs=require('fs')

let local='testcase.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local
let inputV=fs.readFileSync(inputPath).toString().split('\n')

let [r,c]=inputV[0].split(' ').map(Number)

let board=[]
for(let w=1;w<=r;w++){
    board.push(inputV[w].split(''))
}

// console.log(board)

let dirX=[-1,1,0,0] //상,하,좌,우
let dirY=[0,0,-1,1]

let dict={}
// let arr=[board[0][0]]
// dict[board[0][0]]=1
let cnt=1
let visited=new Set()
visited.add(board[0][0])
function backTracking(row,col,depth){
    // console.log(`depth:${depth},arr:${arr}`)
    cnt=Math.max(cnt,depth)
    for(let i=0;i<4;i++){
        let x=row+dirX[i]
        let y=col+dirY[i]
        if(x<0 || y<0||x>=r||y>=c){
            continue
        }
        if (visited.has(board[x][y])) {
            continue
        }
        visited.add(board[x][y])
        // arr.push(board[x][y])
        // console.log(`push:${board[x][y]}`)
        backTracking(x,y, depth+1)
        // arr.pop()
        // console.log(`pop:${board[x][y]}`)
        // dict[board[x][y]] = 0
        visited.delete(board[x][y])
    }
}

backTracking(0,0,1)
console.log(cnt)