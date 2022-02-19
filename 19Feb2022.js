//implement BST

class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
    this.length = 0;
  }

  insert(val) {
    const node = new Node(val);
    if (!this.root) {
      this.root = node;
    } else {
      const current = this.root;

      while (true) {
        if (val === current.value) return false;
        if (val < current.value) {
          if (!current.left) {
            current.left = node;
            break;
          } else current = current.left;
        } else if (val > current.value) {
          if (!current.right) {
            current.right = node;
            break;
          } else current = current.right;
        }
      }
    }
    this.length++;
    return this;
  }

  find(val) {
    if (!this.root) return -1;
    else {
      let current = this.root;
      let node;
      let found = false;

      while (current && !found) {
        if (val < current.value) {
          current = current.left;
        } else if (val > current.value) {
          current = current.right;
        } else {
          node = current;
          found = true;
        }
      }

      return node ? node : -1;
    }
  }

  BFS() {}

  DFSPre() {
    let result = [];
    function traverse(current) {
      result.push(current.value);
      if (current.left) traverse(current.left);
      if (current.right) traverse(current.right);
    }
    traverse(this.root);
    return result;
  }

  DFSPost() {
    let result = [];
    function traverse(current) {
      if (current.left) traverse(current.left);
      if (current.right) traverse(current.right);
      result.push(current.value);
    }
    traverse(this.root);
    return result;
  }

  DFSIn() {
    let result = [];
    function traverse(current) {
      if (current.left) traverse(current.left);
      result.push(current.value);
      if (current.right) traverse(current.right);
    }
    traverse(this.root);
    return result;
  }
}
