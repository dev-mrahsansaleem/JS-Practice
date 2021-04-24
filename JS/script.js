class Node {
    constructor(inputList, operation, outputList) {
        this.inputList = inputList;
        this.operation = operation;
        this.outputList = outputList;
        this.nextNode = null;
    }
}
class LinkedList {
    constructor(head = null) {
        this.head = head
    }

    addNodeAtEnd(newNode) {
        if (this.head) {
            let node = this.head;
            while (node.nextNode) {
                node = node.nextNode
            }
            node.nextNode = newNode;
        } else {
            this.head = newNode;
        }
    }

    size() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.nextNode
        }
        return count;
    }

    clear() {
        this.head = null;
    }

    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.nextNode) {
                lastNode = lastNode.nextNode
            }
        }
        return lastNode
    }

    getFirst() {
        return this.head;
    }
}
// let headNode = new LinkedList(new Node("i can be any input", "i am operation", "out"));
// headNode.addNodeAtEnd(new Node("i can be any input", "i am operation", "out"));
// headNode.addNodeAtEnd(new Node("i can be any input", "i am operation", "out"));
// headNode.addNodeAtEnd(new Node("i can be any input", "i am operation", "out"));

// console.log(headNode);

const init = (e) => {
    const components = document.querySelectorAll(".component");
    const canvas = document.querySelector(".myCanvas");

    var componentListOnCanvas = new LinkedList();

    const updateCanvas = () => {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        var xPos = 20;
        var yPos = 20;
        for (const ele of componentListOnCanvas) {
            console.log(ele.innerHTML);
            ctx.beginPath();
            ctx.rect(xPos, yPos, 30, 30);
            ctx.stroke();
            ctx.fillText(ele.innerHTML, xPos + 5, yPos + 15)
            xPos += 40;
            // yPos += 50
        }
    };
    const componentClicked = (c) => {
        componentListOnCanvas.addNodeAtEnd(c.cloneNode(true));
        console.log(componentListOnCanvas.getLast());
        // updateCanvas();
    }

    for (const c of components) {
        c.addEventListener("click", () => { componentClicked(c); }, );
    }

}

document.addEventListener("DOMContentLoaded", init);