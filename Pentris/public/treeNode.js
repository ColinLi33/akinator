const LEFT = 0;
const RIGHT = 1;

class TreeNode {
  constructor(value) {
    this.value = value;
    this.descendents = [];
    this.parent = null;
  }

  getLeft() {
    return this.descendents[LEFT];
  }

  setLeft(node) {
    this.descendents[LEFT] = node;
    if (node) {
      node.parent = this;
    }
  }

  getRight() {
    return this.descendents[RIGHT];
  }

  setRight(node) {
    this.descendents[RIGHT] = node;
    if (node) {
      node.parent = this;
    }
  }

  setValue(val){
    this.value = val;
  }

  getValue(){
    return this.value;
  }
}
