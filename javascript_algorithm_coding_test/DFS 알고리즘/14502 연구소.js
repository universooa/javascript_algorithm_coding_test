fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let inputV=fs.readFileSync(inputPath).toString().split('\n')

let [n,m]=inputV[0].split(' ').map(Number)
let arr=[]
for(let i=1;i<=n;i++){
    arr.push(inputV[i].split(' ').map(Number))
}

let zeroArr=[]
let virusArr=[]
for (let i=0;i<n;i++){
    for(let j=0;j<m;j++){
        if(arr[i][j]===0){
            zeroArr.push([i,j])
        }else if(arr[i][j]===2){
            virusArr.push([i,j])
        }
    }
}

let result=[]
let dirX=[1,-1,0,0]
let dirY=[0,0,1,-1]
let maxRes=-1
setWall(0,result,0)
console.log(maxRes)
function setWall(start,result,depth){
    if(depth===3){
        // console.log(result)
        let copyArr=[]
        for(let i=1;i<=n;i++){
            copyArr.push(inputV[i].split(' ').map(Number))
        }
        for(res of result){
            copyArr[res[0]][res[1]]=1
        }

        for(vir of virusArr){
            spreadVirus(copyArr,vir[0],vir[1])
        }

        let area=getSafetyArea(copyArr)
        if(maxRes<area){
            maxRes=area
        }

        return;
    }
    for(let k=start;k<zeroArr.length;k++){
        result.push(zeroArr[k])
        setWall(k+1,result,depth+1)
        result.pop()
    }
}

function spreadVirus(copyArr,x,y){

    for(let w=0;w<4;w++){
        let nex=x+dirX[w]
        let ney=y+dirY[w]

        if(nex<0 ||ney<0 || nex>=n ||ney>=m){
            continue
        }
        if(copyArr[nex][ney]!==0){
            continue
        }
        copyArr[nex][ney]=2
        spreadVirus(copyArr,nex,ney)
    }

}

function getSafetyArea(copyArr){
    let cnt=0
    for(let g=0;g<n;g++){
        for(let h=0;h<m;h++){
            if(copyArr[g][h]===0){
                cnt+=1
            }
        }
    }
    return cnt
}