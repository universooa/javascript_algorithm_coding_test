fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let input=fs.readFileSync(inputPath,"utf8").trim().replaceAll('\r','').split('\n')

let str=input[0].split('')
let explosion=input[1].split('')
let stack=[]

for(let i=0;i<str.length;i++){
    stack.push(str[i])

    while(stack[stack.length-1]===explosion[explosion.length-1]){

        let flag=true
        let start=0
        for(let j=stack.length-explosion.length;j<stack.length;j++){
            if(explosion[start]!==stack[j]){
                flag=false
                break
            }
            start++
        }
        if(flag){
            for(let i=0;i<explosion.length;i++){
                stack.pop()
            }
        }else{
            break
        }
    }
}

let result=stack.join('')

console.log(result===''?'FRULA':result)
