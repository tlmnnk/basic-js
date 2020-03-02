const chainMaker = {
  myChain: [],
  result: 'a',

  getLength() {
    return this.myChain.length;
  },
  
  addLink(value) {
    this.myChain.push('( ' +value+ ' )');
    return this;
  },

  removeLink(position) {
    if (position < 1 || position > this.myChain.length || typeof position == 'string') {
      this.myChain = [];
      throw new Error;
    } else {
      this.myChain.splice(position - 1, 1);
      return this;
    }
  },

  reverseChain() {
    this.myChain.reverse();
    return this;
  },

  finishChain() {
    this.result = this.myChain.join('~~');
    this.myChain = [];
    return this.result;
  }
};


module.exports = chainMaker;
