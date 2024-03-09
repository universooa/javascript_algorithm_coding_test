fs=require('fs')
let inputPath=process.platform==='linux'?0:'testCase.txt'
let input=fs.readFileSync(inputPath,"utf8").trim().replaceAll('\r','').split('\n')

let result=''
for(let i=0;i<input.length;i++){
    histogram=input[i].split(' ').map(BigInt)
    total=histogram.shift()
    if(total===0n){
        break
    }
    result+=`${maxRectangular(0n,total-1n)}\n`
}

console.log(result)

function maxRectangular(start,end){

    if(start === end){
        return histogram[start]
    }else if(end-start===2n){
        if(histogram[start]<histogram[end]){
            let wideRectangular=histogram[start]*2n
            if(wideRectangular<histogram[end]){
                return histogram[end]
            }else{
                return wideRectangular
            }
        }else{
            let wideRectangular=histogram[end]*2n
            if(wideRectangular<histogram[start]){
                return histogram[start]
            }else{
                return wideRectangular
            }
        }
    }


    let mid=(start+end)/2n
    let maxValue=histogram[mid]
    let leftIdx=mid-1n
    let rightIdx=mid+1n
    let width=histogram[mid]
    let tall=histogram[mid]

    while(rightIdx<=end && leftIdx>=start){

        let leftSide=histogram[leftIdx]
        let rightSide=histogram[rightIdx]

        if(leftSide>rightSide){
            if(histogram[leftIdx]<tall){
                tall=leftSide
            }
            width=(rightIdx-leftIdx+1n)*tall
            leftIdx-=1n
        }else{
            if(histogram[rightIdx]<tall){
                tall=rightSide
            }
            width=(rightIdx-leftIdx+1n)*tall
            rightIdx+=1n
        }

        if(maxValue<width){
            maxValue=width
        }

    }

    while(leftIdx>=start){
        let leftSide=histogram[leftIdx]

        if(tall>leftSide){
            tall=leftSide
        }
        let width=(rightIdx-leftIdx+1n)*tall
        leftIdx-=1n

        if(maxValue<width){
            maxValue=width
        }

    }

    while(rightIdx<=end){
        let rightSide=histogram[rightIdx]

        if(tall>rightSide){
            tall=rightSide
        }
        let width=(rightIdx-leftIdx+1n)*tall
        rightIdx+=1n

        if(maxValue<width){
            maxValue=width
        }

    }


    let leftValue=maxRectangular(start,mid)
    let rightValue=maxRectangular(mid+1n,end)
    if(maxValue<leftValue || maxValue<rightValue){
        if(leftValue<rightValue){
            maxValue=rightValue
        }else{
            maxValue=leftValue
        }

    }

    return maxValue

}
