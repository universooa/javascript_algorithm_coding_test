fs=require('fs')
let inputPath=process.platform==='linux'?0:'testCase.txt'
let input=fs.readFileSync(inputPath,"utf8").trim().replaceAll('\r','').split('\n')

class maxHeap{
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
        let child=this.end
        let parent=Math.floor(child/2)

        while(this.start<=parent){
            if(this.arr[parent]<x){
                this.arr[child]=this.arr[parent]
            }else{
                break
            }

            child=parent
            parent=Math.floor(child/2)
        }
        this.arr[child]=x
        this.end++


    }

    heappop(){
        if(this.getLength()===0) {
            return 0
        }
        let value=this.arr[this.start]

        if(this.getLength()===1){
            delete this.arr[this.start]
            this.end--
            return value
        }
        if(this.getLength()===2){
            this.arr[this.start]=this.arr[this.end-1]
            delete this.arr[this.end-1]
            this.end--
            return value
        }


        this.arr[this.start]=this.arr[this.end-1]
        delete this.arr[this.end-1]
        this.end--

        let cur=this.start
        let leftChild=cur*2
        let rightChild=cur*2+1

        while(leftChild<=this.end-1){
            let maxIdx=leftChild
            if(rightChild<=this.end-1 && this.arr[leftChild]<this.arr[rightChild]){
                maxIdx=rightChild
            }

            if(this.arr[maxIdx]<this.arr[cur]){
                break
            }else{
                [this.arr[maxIdx],this.arr[cur]]=[this.arr[cur],this.arr[maxIdx]]

                cur=maxIdx
            }


            leftChild=cur*2
            rightChild=cur*2+1
        }



        return value
    }


}

let N=Number(input[0])
let heap=new maxHeap()

let result=''
for(let i=1;i<=N;i++){
    let value=Number(input[i])

    if(value===0){
        result+=`${heap.heappop()}\n`
    }else{
        heap.heapify(value)
    }
    // console.log(heap,value)
}

console.log(result)
