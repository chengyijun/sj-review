/**
 * 事件监听
 *
 */
const btn = document.getElementById('btn')

// 方法一
/*
btn.onclick = function () {
    console.log(1111);
}
*/

// 方法二
/*
btn.addEventListener('click', function () {
    console.log(222);
})
*/


/**
 * dom动态创建
 *
 */

/*
const a = document.createElement('a')
a.onclick = function (e) {
    e.stopPropagation()
}
btn.addEventListener('click', function (event) {
    // 移除子dom
    for (const child of this.childNodes) {
        if (child.tagName === 'A')
            this.removeChild(child)
    }
    this.appendChild(a)
    a.href = 'https://www.bing.com'
    a.target = '_blank'
    a.click()
})
*/


/**
 * 事件冒泡
 */
/*
const outter = document.getElementById('outter')
const inner = document.getElementById('inner')

outter.onclick = function () {
    console.log('outter click')
}

inner.onclick = function (event) {
    event.stopPropagation()
    console.log('inner click')
}
*/

/**
 * Array的操作
 *
 */

/*
let arrs = ['a', 'b', 'c', 'd']
for (const arr of arrs) {
    console.log(arr);
}
console.log(arrs.length);
console.log(typeof arrs);
// 从尾部压入一个元素
arrs.push('abel')
console.log(arrs)
// 从尾部弹出一个元素
let ss = arrs.pop();
console.log(ss);
console.log(arrs)
// 移除一个指定位置元素
let bb = arrs.splice(1, 1)
console.log(bb);
console.log(arrs);
*/


/**
 * 对象
 */

/*
const obj = {
    name: 'abel',
    age: 12
}
console.log(typeof obj)
console.log(obj)

for (const objKey in obj) {
    console.log(objKey);
}
*/

/**
 * class关键字
 */
/*
class Person {
    static country = 'China'

    constructor(name, age) {
        this.name = name
        this.age = age
    }

    sayHi() {
        console.log('say hi');
    }

    static getCountry() {
        return Person.country
    }
}

const person = new Person('tank', 100)
console.log(person);
console.log(typeof person);
person.sayHi()

const p2 = new Person('Rose', 33)
console.log(Person.country);
console.log(Person.getCountry());

Person.prototype.fuck = function () {
    console.log('fuck')
}

p2.fuck()
*/


/**
 * 操作Dom的css、class
 */

/*
btn.onclick = function () {
    // this.style.backgroundColor = 'green'
    this.classList.add('mark')
    // this.classList.remove('mark')
    // this.classList.replace('mark', 'selected')
}
*/
function sortNumber(a, b) {
    return a - b
}

/**
 * 获取给定范围的等差数列
 */
function getSteps(start, end) {
    let range = end - start
    let total = 0
    let step = 1
    let arrs = []
    while (total < range) {
        step++
        total += step
        arrs.push(step)
    }

    let tmp = 0
    tmp = total - range
    if (tmp > 0) {
        let last = arrs.pop()
        arrs.push(last - tmp)
    }
    arrs.sort(sortNumber)
    return arrs
}

