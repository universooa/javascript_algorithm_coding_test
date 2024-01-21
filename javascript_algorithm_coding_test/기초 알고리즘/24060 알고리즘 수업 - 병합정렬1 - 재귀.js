fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let input=fs.readFileSync(inputPath,"utf8").trim().split('\n')

let [N,K]=input[0].split(' ').map(Number)
let arr=input[1].split(' ').map(Number)
let tmp=new Array(N).fill(0)
let cnt=0
let res=1e9
merge_sort(arr,0,N-1)

if(res===1e9){
    console.log(-1)
}else{
    console.log(res)
}

function merge_sort(arr,p,r){
    if(p<r){
        let q=Math.floor((p+r)/2)//중간 값
        merge_sort(arr,p,q)
        merge_sort(arr,q+1,r)
        merge(arr,p,q,r)

    }

}

function merge(arr,p,q,r){

    let i=p
    let j=q+1
    let t=0

    while(i<=q && j<=r){
        if(arr[i] <= arr[j]){
            tmp[t++]=arr[i++]
        }else{
            tmp[t++]=arr[j++]
        }


    }

    while(i<=q){
        tmp[t++]=arr[i++]
    }

    while(j<=r){
        tmp[t++]=arr[j++]
    }

    i=p
    t=0
    while(i<=r ){
        arr[i++]=tmp[t]
        cnt++
        if(cnt===K){
            res=tmp[t]
        }
        t++
    }

}

