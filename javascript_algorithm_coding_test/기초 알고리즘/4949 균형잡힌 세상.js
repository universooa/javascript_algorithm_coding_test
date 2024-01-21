const fs=require('fs')
let local='../test.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local
let input=fs.readFileSync(inputPath,'utf-8').replaceAll('\r','').trim().split('\n')
let arr=[]
let result=''

for(let i=0;i<input.length-1;i++){
    arr=[]
    let tmp=input[i]
    let flag=true
    for(let j of tmp){
        if(j==='(' || j==='['){
            arr.push(j)
        }else if(j===')' || j===']'){
            if(arr.length===0){
                flag=false
                break
            }
            let open = arr.pop()
            if(open!=='('&& j===')' ||(open!=='['&&j===']')){
                flag=false
                break
            }

        }

    }


    if(flag && arr.length===0){
        result+='yes\n'
    }else{
        result+='no\n'
    }
}

console.log(result)