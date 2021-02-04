class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    if (this.stackControl.length === 10) {
      return false;
    } else {
      return true;
    }
  }

  display() {
    return this.stackControl;
  }

  isEmpty() {
    if (this.stackControl.length > 0) {
      return false;
    } else {
      return true;
    }
  }

  push(item) {
    if (this.canPush()) {
      this.stackControl.push(item);
      return this.stackControl;
    } else {
      return 'Stack Overflow';
    }
  }

  pop() {
    if (this.stackControl.length === 0) {
      return 'Stack Underflow';
    } else {
      return this.stackControl.pop();
    }
  }
}
