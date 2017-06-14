class Item {
  constructor() {
  }
  logger() {
    console.log("This is an Item");
  }
  pickUp() {
    console.log("I have been picked up");
  }
}

class Key extends Item {
  constructor(index) {
    super()
    this.quote = "Hello, I am a key"
    this.index = index
  }
  logger() {
    console.log(this.quote + ' ' + this.index);
  }
}

class Wrench extends Item {
  constructor(size) {
    super()
    this.size = size
  }
  logger() {
    console.log("I am a wrench and I am" + this.size + "m long");
  }
}

var arr = []
arr.push(new Key(1))
arr.push(new Key(2))
arr.push(new Item("hello, I am a key"))
arr.push(new Wrench(2))

arr.forEach((item) => item.pickUp())
arr.forEach((item) => item.logger())
