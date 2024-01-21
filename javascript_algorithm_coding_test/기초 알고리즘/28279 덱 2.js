fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let input=fs.readFileSync(inputPath,"utf8").trim().split('\n')

class Node{
    constructor(val) {
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
        this.count=0
        this.front=null
        this.rear=null
    }

    unshift(val){ // 덱의 앞에 넣는다.
        const node= new Node(val)

        if(!this.front){
            this.front=node
            this.rear=node
        }else{
            const tmp=this.front
            this.front=node
            node.next=tmp
            tmp.prev=node
        }

        this.count++
        return this.count

    }

    shift(){ //덱의 앞에서 뺀다.
        if(this.count===0){
            return null
        }
        const value=this.front.value
        if(this.count===1){
            this.init()
        }else{
            this.front=this.front.next
            this.front.prev=null
            this.count--
        }
        return value

    }

    push(value){ // 덱의 맨 뒤에 넣는다.
        const node=new Node(value)
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

        return this.count
    }

    pop(){ // 덱의 맨 뒤에서 뺀다.
        if(this.count===0){
            return null
        }

        const value=this.rear.value

        if(this.count===1){
            this.init()
        }else{
            const rear=this.rear.prev
            rear.next=null
            this.rear=rear
            this.count--
        }

        return value
    }
    size(){
        return this.count
    }
    isEmpty(){
        return this.size()===0
    }
    getFront(){
        return this.front.value
    }
    getBack(){
        return this.rear.value
    }
}

let N=Number(input[0])
let deque=new Deque()
let result=''
for(let i=1;i<=N;i++){
    let [oper,value]=input[i].split(' ').map(Number)

    if(oper===1){
        deque.unshift(value)
    }else if(oper===2){
        deque.push(value)
    }else if(oper===3){
        if(deque.isEmpty()){
            result+=`-1\n`
        }else{
            result+=`${deque.shift()}\n`
        }
    }else if(oper===4){
        if(deque.isEmpty()){
            result+=`-1\n`
        }else{
            result+=`${deque.pop()}\n`
        }
    }else if(oper===5){
        result+=`${deque.size()}\n`
    }else if(oper===6){
        if(deque.isEmpty()){
            result+=`1\n`
        }else{
            result+=`0\n`
        }
    }else if(oper===7){
        if(deque.isEmpty()){
            result+=`-1\n`
        }else{
            result+=`${deque.getFront()}\n`
        }
    }else if(oper===8){
        if(deque.isEmpty()){
            result+=`-1\n`
        }else{
            result+=`${deque.getBack()}\n`
        }
    }
}


console.log(result)