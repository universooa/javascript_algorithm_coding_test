let fs=require('fs')

let local='testcase.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local

let inputV=fs.readFileSync(inputPath).toString().trim().split('\n')

let [n,k]= inputV[0].split(' ').map(Number)

let coins=[]
for(let i=0;i<=n;i++){
    coins.push(parseInt(inputV[i]))
}

let numOfCoins=0
for(let j=coins.length-1;j>=0;j--){
    if(k<=0){
        break
    }
    if(coins[j]<=k){
        numOfCoins+= Math.floor(k/coins[j])
        k%=coins[j]
    }
}

console.log(numOfCoins)