let fs=require('fs')

let forBaekjoon=0
let local='testcase.txt'
let remote='/dev/stdin'

let inputPath=forBaekjoon?remote:local

let [a,b]=fs.readFileSync(inputPath).toString().trim().split(' ')

a=a.split('').reverse().join('')
b=b.split('').reverse().join('')

console.log(a<b?b:a)