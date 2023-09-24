fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let inputV=fs.readFileSync(inputPath).toString().split('\n')

let [n,m]=inputV[0].split(' ').map(Number)

let hmArr=[] //집 배열
let chnStrArr=[] //치킨 집 배열
let arr=[]
let selected=[]

for(let i=1;i<=n;i++){
    let temp=inputV[i].split(' ').map(Number)
    arr.push(temp)
    for(let j=0;j<n;j++){
        if(temp[j]===1){
            hmArr.push([i-1,j]) //집 위치 저장
        }else if(temp[j]===2){
            chnStrArr.push([i-1,j])
        }
    }
}

let answer=1e9
dfs(0,selected,0)
console.log(answer)

function getDistBtwn(selectedChnStr){
    if(selectedChnStr.length<1){
        return 1e9
    }
    let lwtDist=0
    hmArr.forEach((hm)=>{
        let min=1e9
        let val=0
        selectedChnStr.forEach((chn)=>{
            val=Math.abs(hm[0]-chn[0])+Math.abs(hm[1]-chn[1])
            if(min>val){
                min=val
            }
        })
        lwtDist+=min
    })
    return lwtDist
}


function dfs(depth,selected,start){
    if(depth===m){
        let dist=getDistBtwn(selected)
        if(answer>dist){
            answer=dist
        }

    }
    for(let k=start;k<chnStrArr.length;k++){
        selected.push(chnStrArr[k])
        dfs(depth+1,selected,k+1)
        selected.pop()
    }

}
