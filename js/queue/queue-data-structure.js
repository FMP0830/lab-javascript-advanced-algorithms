class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  display() {
    return this.queueControl;
  }

  canEnqueue() {
    if (this.queueControl.length === 10) {
      return false; 
    } else {
      return true;
    }
  }

  isEmpty() {
    if (this.queueControl.length > 0) {
      return false;
    } else {
      return true;  
    }
  }

  enqueue(item) {
    if (this.canEnqueue()) {
      this.queueControl.unshift(item);
      return this.queueControl;
    }
    return 'Queue Overflow';
  }


  dequeue() {
    if (this.queueControl.length === 0) {
      return 'Queue Underflow';
    } else {
      return this.queueControl.pop();  }
    }
}
