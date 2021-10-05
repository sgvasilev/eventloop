let arr = [1, 2, 3, 4, 5]
let el = Array.from(arr)
console.log(el, 'el')
for (let index = 0; index < arr.length; index++) {
  el.shift()
  console.log(el)
}
