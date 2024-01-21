fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let input=fs.readFileSync(inputPath,"utf8").trim().split('\n')

class Node{
    constructor(index,val) {
        this.index=index
        this.value=val
        this.prev=null
        this.next=null
    }
}

class Deque{
    constructor() {
        this.init()
    }
    init(){
        this.front=null
        this.rear=null
        this.count=0
    }
    unshift(index,val){
        const node=new Node(index,val)

        if(this.count===0){
            this.front=node
            this.rear=node
        }else{
            const front=this.front
            front.prev=node
            node.next=front

            this.front=node
        }
        this.count++

    }
    shift(){
        if(this.count===0){
            return null
        }
        let value=this.front.value
        if(this.count===1){
            this.init()
        }else{
            this.front=this.front.next
            this.front.prev=null
            this.count--
        }
        return this.count
    }
    push(index,val){
        const node=new Node(index,val)

        if(this.count===0){
            this.front=node
            this.rear=node
        }else{
            const rear=this.rear
            rear.next=node
            node.prev=rear
            this.rear=node
        }
        this.count++

    }
    pop(){
        if(this.count===0){
            return null
        }
        const value=this.rear.value
        if(this.count===1){
            this.init()
        }else{
            this.rear=this.rear.prev
            this.rear.next=null
            this.count--
        }
        return this.count
    }
    size(){
        return this.count
    }
    isEmpty(){
        return this.size()===0
    }
    getFront(){
        return this.front
    }
    getBack(){
        return this.rear
    }

}


let N=Number(input[0])
let ballons=input[1].split(' ').map(Number)
let deque=new Deque()

for(let i=0;i<ballons.length;i++){
    deque.push(i+1,ballons[i])
}

let result=''


while(!deque.isEmpty()){
    let node=deque.getFront()
    result+=`${node.index} `
    let cnt=node.value
    deque.shift() // 맨 앞의 값을 빼줌

    if(deque.isEmpty()){
        break
    }

    if(cnt>0){ //양수만큼 이동해야하면 앞에 있는 원소를 cnt-1만큼 뒤로 옮김
        //이미 한번은 shift했으므로 cnt-1만큼만 옮김
        while(cnt-1>0){
            let tmp=deque.getFront()
            deque.push(tmp.index,tmp.value)
            deque.shift()
            cnt--
        }
    }
    else{ //음수만큼 이동해야 하는 경우
        //뒤에 cnt만큼을 앞으로 가져옴
        while(cnt<0){
            let tmp=deque.getBack()
            deque.pop()
            deque.unshift(tmp.index,tmp.value)
            cnt++
        }
    }
}

console.log(result)