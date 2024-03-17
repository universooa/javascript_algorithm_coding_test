fs=require('fs')
let inputPath=process.platform==='linux'?0:'testCase.txt'
let input=fs.readFileSync(inputPath,"utf8").trim().replaceAll('\r','').split('\n')

// sample data 만들기
// let rand=[-1,1,0]
// let randRsult=''
// for(let i=0;i<1000;i++){
//     for(let j=0;j<1000;j++){
//         randRsult+=`${rand[Math.floor(Math.random()*3)]} `
//     }
//     randRsult+=`\n`
// }
//
// fs.writeFile('./testSample.txt',randRsult,err=>{
//     if(err){
//         console.error(err)
//     }
// })
