/**
 * A Linked list is linear data structure that includes a series of connected nodes
 * Each ode consists of a data value and a pointer that points to the next node
 * The list elements can be easily inserted or removed without reallocation or reorganization of the entire structure.
 * Random access of elements is not feasible and accessing an element has linear time complexity.
 */

/**
 * Linked list usage
 * All applications of both stacks and queues are applications of linked lists
 * Image viewer (slideshow of images)
 */

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    prepend(value) {
        const node = new Node(value);
        if (list.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let prev = this.head;
            while (prev.next) {
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++;
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            return;
        }
        if (index === 0) {
            this.prepend(value);
        } else {
            const node = new Node(value);
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    }

    print() {
        if (this.isEmpty()) {
            console.log("List is empty");
        } else {
            let curr = this.head;
            let listValues = "";
            while (curr) {
                listValues += `${curr.value} `;
                curr = curr.next;
            }
            console.log(listValues);
        }
    }
}

const list = new LinkedList();
console.log("List is empty?", list.isEmpty());
console.log("List size", list.getSize());
list.print();

// list.append(10);
// list.print();
// list.append(20);
// list.append(30);
// list.print();

list.insert(10, 0);
list.print();

list.insert(20, 0);
list.print();

list.insert(30, 1);
list.print();

list.insert(40, 2);
list.print();
console.log(list.getSize());
