const fs=require('fs')
let local='../test.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local
let input=fs.readFileSync(inputPath,'utf-8').trim().replaceAll('\r','').split('\n')


let [V,E]=input[0].split(' ').map(Number)
let inf=Infinity

let dist=Array.from(Array(V+1),()=>{
    return new Array(V+1).fill(inf)
})



for(let i=1;i<=E;i++){
    let [a,b,c]=input[i].split(' ').map(Number)

    dist[a][b]=c

}


for(let k=1;k<=V;k++){
    for(let start=1;start<=V;start++){
        for(let end=1;end<=V;end++){

            if(dist[start][k]!==inf && dist[k][end]!==inf){
                dist[start][end]=Math.min(dist[start][end],dist[start][k]+dist[k][end])
            }
        }
    }
}

let result=inf
let flag=false
for(let k=1;k<=V;k++){
    for(let i=1;i<=V;i++){
        if(i===k){
            continue
        }
        if(dist[i][k]!==inf && dist[k][i]!==inf){
            result=Math.min(result,dist[i][k]+dist[k][i])
            flag=true
        }
    }
}


if(!flag){
    console.log(-1)
}else{
    console.log(result)
}
