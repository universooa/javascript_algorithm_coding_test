const fs=require('fs')
let local='../test.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local
let input=fs.readFileSync(inputPath,'utf-8').trim().replaceAll('\r','').split('\n')


class absoluteHeap{
    constructor() {
        this.arr={}
        this.start=1
        this.end=1
    }

    comparator(p1,p2){
        let absP1=Math.abs(this.arr[p1])
        let absP2=Math.abs(this.arr[p2])

        if(absP1>absP2){
            return 1
        }else if(absP1<absP2){
            return -1
        }else{
            if(this.arr[p1]>this.arr[p2]){
                return 1
            }else if(this.arr[p1]<this.arr[p2]){
                return -1
            }else{
                return 0
            }
        }
    }

    getLength(){
        return this.end-this.start
    }
    heapify(x){
        if(this.getLength()===0){
            this.arr[this.end]=x
            this.end++
            return
        }

        this.arr[this.end]=x

        let cur=this.end
        let parent=Math.floor(cur/2)

        while(this.start<=parent){

            if(this.comparator(parent,cur)>0){
                [this.arr[parent],this.arr[cur]]=[this.arr[cur],this.arr[parent]]
            }else{
                break
            }

            cur=parent
            parent=Math.floor(cur/2)
        }


        this.end++

    }
    heappop(){
        if(this.getLength()===0){
            return 0
        }

        let minValue=this.arr[this.start]

        if(this.getLength()===1){
            this.end--
            delete this.arr[this.start]
            return minValue
        }

        this.end--
        this.arr[this.start]=this.arr[this.end]
        delete this.arr[this.end]

        let cur=this.start
        let leftIdx=cur*2
        let rightIdx=cur*2+1

        while(leftIdx<=this.end){
            let minIdx=leftIdx

            if(rightIdx<=this.end && this.comparator(leftIdx,rightIdx)>0){
                minIdx=rightIdx
            }

            if(this.comparator(cur,minIdx)>0){
                [this.arr[minIdx],this.arr[cur]]=[this.arr[cur],this.arr[minIdx]]
            }else{
                break
            }

            cur=minIdx
            leftIdx=cur*2
            rightIdx=cur*2+1

        }

        return minValue

    }
}


let N=Number(input[0])
let heap=new absoluteHeap()
let result=''

for(let i=1;i<=N;i++){
    let command=Number(input[i])

    if(command===0){
        result+=`${heap.heappop()}\n`
    }else{
        heap.heapify(command)
    }


}

console.log(result)
