const fs=require('fs')
let local='../test.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local

const input=fs.readFileSync(inputPath,"utf-8").trim().split('\n')

let N=Number(input[0])

let arr=[]
for(let i=1;i<=N;i++){
    let [C,S]=input[i].split(' ').map(Number)
    arr.push([C,S,i-1])
}

arr=arr.sort((a,b)=>a[1]-b[1])

//누적합 구하기
let sumArr=[]
let sumValue=0
for (let i of arr){
    sumArr.push(sumValue)
    sumValue+=i[1]
}

let start=0
let end=0

let resultArr=[]
let colorDict={}
while(start<N){
    end++
    while(end<N){ //크기가 같은 경우 통째로 계산하기 위해 지금 공보다 크기가 큰 공의 인덱스를 end에 저장함
        if(arr[start][1]===arr[end][1]){
            end++
        }else{
            break
        }
    }

    for(let i=start;i<end;i++){ //크기가 같은 공들이 잡을 수 있는 공의 합을 각각 계산
        //누적합에서 같은 색깔 공의 합을 뺌
        //이 과정에서는 같은 색깔의 합을 계산하지 않고 이 구간이 끝나면 계산함 -> 여기서 같은 색깔 합 누적하면 누적합에서 더 많이 빠짐
        let sameColor=colorDict[arr[i][0]]??0
        resultArr.push(sumArr[start]-sameColor)
    }

    for(let i=start;i<end;i++){
        //공 별로 잡을 수 있는 총합 계산이 끝났으니 같은 색깔 끼리의 합을 갱신해줌
        if(arr[i][0] in colorDict){
            colorDict[arr[i][0]]+=arr[i][1]
        }else{
            colorDict[arr[i][0]]=arr[i][1]
        }
    }

    start=end // 다음으로 계산할 수 있는 공 인덱스를 start로 놔줌
    //이렇게 되면 O(N)이 됨
    //근데 정렬할때 O(NlogN) 썼으니 O(NlogN)임 O(N+NlogN)=O(2NlogN)=O(NlogN)
}

let outArr=new Array(N).fill(0)
for(let i =0;i<N;i++){
    outArr[arr[i][2]]=resultArr[i]
    // resultArr에 크기 오름차순 별로 정렬한 arr 기준하여 잡을 수 있는 공의 합이 구해져있음
    // arr[2]번에 처음에 입력받은 순서가 정해져 있으므로 outArr에 순서별로 공의 합을 저장해서 출력해줌
}

console.log(outArr.join('\n')) //배열안의 원소를 '\n'로 묶어서 출력해줌