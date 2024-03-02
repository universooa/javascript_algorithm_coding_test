fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let input=fs.readFileSync(inputPath,"utf8").trim().replaceAll('\r','').split('\n')

let N=Number(input[0])
let people=[]

for(let i =1;i<=N;i++){
    people.push(Number(input[i]))
}

let stack=[]
let result=0
for(let i=0;i<N;i++){
    let total=1
    while(stack.length!==0 && stack[stack.length-1][1]<=people[i]){
        let [cnt,height]=stack.pop()
        result+=cnt
        if(height===people[i]){
            total+=cnt
        }
    }

    if(stack.length!==0){
        result++
    }

    stack.push([total,people[i]])

}

console.log(result)