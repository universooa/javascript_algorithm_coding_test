const fs=require('fs')
let local='../test.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local
let input=fs.readFileSync(inputPath,'utf-8').trim().replaceAll('\r','').split('\n')

class minHeap{
    constructor() {
        this.arr={}
        this.start=1
        this.end=1
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
        let parent=Math.floor(this.end/2)

        while(this.start<=parent){
            if(this.arr[parent]>x){
                this.arr[cur]=this.arr[parent]
            }else{
                break
            }
            cur=parent
            parent=Math.floor(cur/2)
        }
        this.arr[cur]=x

        this.end++

    }

    heappop(){

        if(this.getLength()===0){
            return 0
        }

        let minValue=this.arr[this.start]

        if(this.getLength()===1){
            delete this.arr[this.start]
            this.end--
            return minValue
        }

        this.end--
        this.arr[this.start]=this.arr[this.end]
        delete this.arr[this.end]

        let cur=this.start
        let leftIdx=cur*2
        let rightIdx=cur*2+1

        while(leftIdx<=this.end-1){
            let minIdx=leftIdx
            if(rightIdx<=this.end-1 && this.arr[leftIdx]>this.arr[rightIdx]){
                minIdx=rightIdx
            }
            if(this.arr[minIdx]<this.arr[cur]){
                [this.arr[minIdx],this.arr[cur]]=[this.arr[cur],this.arr[minIdx]]
                cur=minIdx
            }else{
                break
            }


            leftIdx=cur*2
            rightIdx=cur*2+1
        }




        return minValue
    }

}



let N=Number(input[0])
let heap=new minHeap()
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
