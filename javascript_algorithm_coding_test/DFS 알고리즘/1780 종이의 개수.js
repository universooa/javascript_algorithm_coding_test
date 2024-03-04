fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let input=fs.readFileSync(inputPath,"utf8").trim().replaceAll('\r','').split('\n')

let N=Number(input[0])
let arr=[]

for(let i=1;i<=N;i++){
    arr.push(input[i].split(' ').map(Number))
}
let minusOne=0
let zero=0
let one=0

nonaTree(0,0,N)

function nonaTree(x1,y1,N){
    if(N<1){
        return
    }

    let flag=true
    let elem=arr[x1][y1]

    for(let i=x1;i<x1+N;i++){
        for(let j=y1;j<y1+N;j++){
            if(elem!==arr[i][j]){
                flag=false
            }
        }
    }

    if(!flag){
        let mid=Math.floor(N/3)
        for(let q=0;q<3;q++){
            for(let w=0;w<3;w++){
                nonaTree(x1+mid*q,y1+mid*w,mid)
            }
        }
    }else{
        if(elem===-1){
            minusOne++
        }else if(elem===0){
            zero++
        }else{
            one++
        }
    }

}

console.log(minusOne)
console.log(zero)
console.log(one)