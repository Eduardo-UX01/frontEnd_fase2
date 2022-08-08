// Reto 1 ---------------------------------------------------------------
/* 
const Vec = function(x, y) {
  this.x = x
  this.y = y
}  
  
const vec1 = new Vec(1, 2);
const vec2 = new Vec(3, 5);

console.log("Vec1", vec1)
console.log("Vec2", vec2)

Vec.prototype.plus = function(other){
  return new Vec(this.x + other.x, this.y + other.y)
}

Vec.prototype.minus = function(other){
  return new Vec(this.x - other.x, this.y - other.y)
}

Vec.prototype.length = function(){ //teorema de Pitágoras: √(x2 + y2).
  return (Math.sqrt(this.x * this.x + this.y * this.y))
}

console.log(vec1.plus(vec2)); // Vec { x: 3, y: 5 }
console.log(vec1.minus(vec2)); // Vec { x: -1, y: -1 }
console.log(vec1.length()); // 2.23606797749979 */


// Reto 2  -----------------------------------------------------------

const Group = function () {
  this.members = []
}

Group.prototype.has = function (value) {
  return this.members.includes(value)
}

Group.prototype.add = function (value) {
  if (!this.has(value)) {
    this.members.push(value)
  }
}

Group.from = function (array) {

  let group = new Group()

  for (let i = 0; i < array.length; i++) {
    group.add(array[i])
  }

  return group
}

const group = Group.from([1, 2, 3, 4, 5]);
console.log(group); // Group { members: [ 1, 2, 3, 4, 5 ] }

console.log(group.has(5)); // true
console.log(group.has(10)); // false
group.add(10);
console.log(group.has(10)); // true


// Reto 3  -------------------------------------------------------------
