# 타입 체크

> 📌 Table of Contents



## 타입 체크

### typeof

`null` 을 제외한 원시 타입을 체크하는 것은 가능하지만 객체의 종류를 구분할 수 없다.

```javascript
typeof '';              // string
typeof 1;               // number
typeof NaN;             // number
typeof true;            // boolean
typeof [];              // object
typeof {};              // object
typeof new String();    // object
typeof new Date();      // object
typeof /test/gi;        // object
typeof function () {};  // function
typeof undefined;       // undefined
typeof null;            // object (설계적 결함)
typeof undeclared;      // undefined (설계적 결함)
```

### Object.prototype.toString

Object.prototype.toString 메소드는 객체를 나타내는 문자열을 반환한다.

> ☝️ Number.prototype.toString, Array.prototype.toString, String.prototype.toString 은 각각 숫자, 배열, 스트링 객체를 문자열로 바꿔주는 메소드로 Object.prototype.toString과 다르다.

```javascript
var obj = new Object();
obj.toString(); // [object Object]
```

```javascript
console.log(Object.prototype.toString.call(''));             // [object String]
console.log(Object.prototype.toString.call(new String()));   // [object String]
console.log(Object.prototype.toString.call(1));              // [object Number]
console.log(Object.prototype.toString.call(new Number()));   // [object Number]
console.log(Object.prototype.toString.call(NaN));            // [object Number]
console.log(Object.prototype.toString.call(Infinity));       // [object Number]
console.log(Object.prototype.toString.call(true));           // [object Boolean]
console.log(Object.prototype.toString.call(undefined));      // [object Undefined]
console.log(Object.prototype.toString.call());               // [object Undefined]
console.log(Object.prototype.toString.call(null));           // [object Null]
console.log(Object.prototype.toString.call([]));             // [object Array]
console.log(Object.prototype.toString.call({}));             // [object Object]
console.log(Object.prototype.toString.call(new Date()));     // [object Date]
console.log(Object.prototype.toString.call(Math));           // [object Math]
console.log(Object.prototype.toString.call(/test/i));        // [object RegExp]
console.log(Object.prototype.toString.call(function () {})); // [object Function]
console.log(Object.prototype.toString.call(document));       // [object HTMLDocument]

function argumentsTest() {
	console.log(Object.prototype.toString.call(arguments));     // [object Arguments] 
}
argumentsTest()

console.log(Object.prototype.toString.call(undeclared));     // ReferenceError
```

이를 활용한 타입 반환 함수 getType

```javascript
function getType(target) {
  return Object.prototype.toString.call(target).slice(8, -1);
}
```

```javascript
console.log(getType(''));         // String
console.log(getType(1));          // Number
console.log(getType(true));       // Boolean
console.log(getType(undefined));  // Undefined
console.log(getType(null));       // Null
console.log(getType({}));         // Object
console.log(getType([]));         // Array
console.log(getType(/test/i));    // RegExp
console.log(getType(Math));       // Math
console.log(getType(new Date())); // Date
console.log(getType(function () {})); // Function
```

타입별로 체크하는 함수

```javascript
function getType(target) {
  return Object.prototype.toString.call(target).slice(8, -1);
}

function isString(target) {
  return getType(target) === 'String';
}

function isNumber(target) {
  return getType(target) === 'Number';
}

function isBoolean(target) {
  return getType(target) === 'Boolean';
}

function isNull(target) {
  return getType(target) === 'Null';
}

function isUndefined(target) {
  return getType(target) === 'Undefined';
}

function isObject(target) {
  return getType(target) === 'Object';
}

function isArray(target) {
  return getType(target) === 'Array';
}

function isDate(target) {
  return getType(target) === 'Date';
}

function isRegExp(target) {
  return getType(target) === 'RegExp';
}

function isFunction(target) {
  return getType(target) === 'Function';
}
```

### instanceof

Object.prototype.toString을 사용하여 객체의 종류까지 식별할 수 있지만 객체의 상속 관계는 체크할 수 없다.

instanceof 연산자는 피연산자인 객체가 우항에 명시한 타입의 인스턴스인지 여부를 알려준다.

```javascript
function Person() {}
const person = new Person();

console.log(person instanceof Person); // true
console.log(person instanceof Object); // true
```

```javascript
function isElement(target) {
  return !!(target && target instanceof HTMLElement);
  // 또는 `nodeType`을 사용할 수도 있다.
  // return !!(target && target.nodeType === 1);
}
```

### 배열 vs 유사 배열

배열인지 체크할 때는 Array.isArray 메소드를 사용하면 된다.

```javascript
console.log(Array.isArray([]));    // true
console.log(Array.isArray({}));    // false
console.log(Array.isArray('123')); // false
```

유사 배열 객체는 length 프로퍼티를 갖고, length 프로퍼티의 최대 값은 2의 53제곱 - 1 이다. 또한 빈문자열 역시 유사 배열이다.

```javascript
const isArrayLike = function (collection) {
  const MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  const length = collection == null ? undefined : collection.length;
  return typeof length === 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
};

// true
console.log(isArrayLike([]));
console.log(isArrayLike('abc'));
console.log(isArrayLike(''));
console.log(isArrayLike(document.querySelectorAll('li')));
console.log(isArrayLike(document.getElementsByName('li')));
console.log(isArrayLike({ length: 0 }));
(function () {
  console.log(isArrayLike(arguments));
}());

// false
console.log(isArrayLike(123));
console.log(isArrayLike(document.querySelector('li')));
console.log(isArrayLike({ foo: 1 }));
console.log(isArrayLike());
console.log(isArrayLike(null));
```



