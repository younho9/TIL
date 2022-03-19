---
title: TypeScript 클래스 vs JavaScript 클래스
slug: javascript-oop-ts-vs-js-class
tags: ['JavaScript', 'TypeScript', 'OOP']
author: Younho Choo
author_title: younho9
author_url: https://github.com/younho9
author_image_url: https://avatars.githubusercontent.com/u/48426991
---

class 작성 시에 TypeScript의 클래스 문법과 JavaScript의 문법을 비교해보자.

## JS 클래스 문법

JS에서 클래스는 다음과 같은 문법을 사용한다.

```js
class MyClass {
  publicProp = 'value'; // public 프로퍼티
  #privateProp = 'value'; // private 프로퍼티. ES2019 부터 지원.
  _protectedProp = 'value'; // protected 프로퍼티. 기능적으로 지원하지 않지만, 관례적으로 _를 사용하여 표현하고 약속하여 사용함.

  constructor(...) { // 생성자 메서드로 매개변수 값을 받아 프로퍼티를 설정하게 할 수 있다.
    // ...
  }

  static staticMethod(...) {} // static 메서드

  publicMethod(...) {} // public 메서드
  #privateMethod(...) {} // private 메서드

  get publicProp(...) {} // getter 메서드
  set publicProp(...) {} // setter 메서드

  get privateProp(...) {} // getter 메서드
  set privateProp(...) {} // setter 메서드

  get protectedProp(...) {} // getter 메서드
  set protectedProp(...) {} // setter 메서드
}
```

### 클래스 상속

JS에서도 클래스 상속을 지원하기 때문에, 기존 클래스를 확장하여 클래스를 생성할수있다.

```js
class Animal {
	constructor(name) {
		this.speed = 0;
		this.name = name;
	}
	run(speed) {
		this.speed = speed;
		alert(`${this.name} 은/는 속도 ${this.speed}로 달립니다.`);
	}
	stop() {
		this.speed = 0;
		alert(`${this.name} 이/가 멈췄습니다.`);
	}
}

let animal = new Animal('동물');

class Rabbit extends Animal {
	hide() {
		alert(`${this.name} 이/가 숨었습니다!`);
	}
}

let rabbit = new Rabbit('흰 토끼');

rabbit.run(5); // 흰 토끼 은/는 속도 5로 달립니다.
rabbit.hide(); // 흰 토끼 이/가 숨었습니다!
```

![프로토타입 체이닝](https://ko.javascript.info/article/class-inheritance/animal-rabbit-extends.svg)

클래스 `Rabbit`으로 만든 객체는 `rabbit.hide()`와 같은 `Rabbit`에 정의된 메서드에도 접근할 수 있고, `rabbit.run()`과 같은 `Animal`에 정의된 메서드에도 접근할수있다.

`extends` 키워드는 이렇게 프로토타입 기반으로 동작하여, 객체 `rabbit` -> `Rabbit.prototype` -> `Animal.prototype` 순으로 메소드를 찾아서 실행한다.

### 접근 제어자(Access Modifier)

객체 지향 프로그래밍에서는 접근 제어자를 활용해 [내부 인터페이스와 외부 인터페이스를 구분하여 캡슐화](https://ko.javascript.info/private-protected-properties-methods#ref-1065)한다.

- `public` : 어디서든지 접근할 수 있으며 외부 인터페이스를 구성한다.
- `protected` : 클래스 자신과 자손 클래스에서만 접근할 수 있으며 내부 인터페이스를 구성한다.
- `private` : 클래스 자신에서만 접근할 수 있으며 내부 인터페이스를 구성한다.

JS에서는 `public`, `protected` 에 대한 문법적 지원이 없으며, 관습적으로 `_` 접두사를 사용하여 `protected` 프로퍼티를 사용한다.

[`private` 속성](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes/Private_class_fields)은 ES2019부터 지원하게 되었다.

### `static`

정적 프로퍼티와 메서드는 어떤 특정한 객체가 아닌 클래스에 속한 함수를 구현하고자할 때 주로 사용된다.

정적 멤버는 상속된다.

```js
class Article {
	constructor(title, date) {
		this.title = title;
		this.date = date;
	}

	static createTodays() {
		// this는 Article입니다.
		return new this("Today's digest", new Date());
	}
}

let article = Article.createTodays();

alert(article.title); // Today's digest
```

## TS 클래스 문법

TS는 JS의 모든 클래스 문법을 지원하며, 그에 더해서 몇 가지 문법적인 지원을 추가해준다. 하지만 모든 문법은 컴파일 타임에 대해서만 적용되고, 런타임에는 결국 JS가지원하는 기능만을 사용해 동작한다는 것을 기억하자.

다음은 JS에서 지원하지 않지만, TS에서 사용할 수 있는 Class와 관련된 기능들이다.

### [`readonly`](https://www.typescriptlang.org/docs/handbook/2/classes.html#readonly)

필드에는 `readonly` 제어자를 접두사로 사용할 수 있다. 이렇게 하면 생성자 함수가아닌 곳에서 할당을 방지할 수 있다.

```ts
class Greeter {
	readonly name: string = 'world';

	constructor(otherName?: string) {
		if (otherName !== undefined) {
			this.name = otherName;
		}
	}

	err() {
		this.name = 'not ok';
		// Cannot assign to 'name' because it is a read-only property.
	}
}
const g = new Greeter();
g.name = 'also not ok';
// Cannot assign to 'name' because it is a read-only property.
```

### [`overload`](https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads)

JS는 함수의 매개변수의 갯수와 자료형이 자유롭기 때문에, 오버로드에 대한 개념이사실상 없다. (단지, 매개변수의 조건에 따른 분기를 작성하는 정도)

TS에서는 다양한 방식으로 호출할 수 있는 함수에 대해 구체적으로 오버로드 `signature`를 작성할 수 있다.

```ts
class Point {
	// Overloads
	constructor(x: number, y: string);
	constructor(s: string);
	constructor(xs: any, y?: any) {
		// TBD
	}
}

class Util {
	// Overloads
	len(s: string): number;
	len(arr: any[]): number;
	len(x: any) {
		return x.length;
	}
}
```

### [`override`](https://www.typescriptlang.org/docs/handbook/2/classes.html#overriding-methods)

TypeScript에서는 파생 클래스가 항상 기본 클래스의 하위 유형이 되도록 한다.

```ts
class Base {
	greet() {
		console.log('Hello, world!');
	}
}

class Derived extends Base {
	greet(name?: string) {
		if (name === undefined) {
			super.greet();
		} else {
			console.log(`Hello, ${name.toUpperCase()}`);
		}
	}
}

const d = new Derived();
d.greet();
d.greet('reader');
```

파생 클래스가 기본 클래스의 규칙을 따르는 것이 중요한데, 기본 클래스가 파생 클래스 인스턴스를 참조할 수 있어야 한다.

```ts
// Alias the derived instance through a base class reference
const b: Base = d;
// No problem
b.greet();
```

만약 파생 클래스가 기본 클래스를 따르지 않는다면 에러가 발생한다.

```ts
class Base {
	greet() {
		console.log('Hello, world!');
	}
}

class Derived extends Base {
	// Make this parameter required
	greet(name: string) {
		// Property 'greet' in type 'Derived' is not assignable to the same property in base type 'Base'.
		// Type '(name: string) => void' is not assignable to type '() => void'.
		console.log(`Hello, ${name.toUpperCase()}`);
	}
}

const b: Base = new Derived();
// Crashes because "name" will be undefined
b.greet();
```

### 접근 제어자(Access Modifier)

> [Member Visibility](https://www.typescriptlang.org/docs/handbook/2/classes.html#member-visibility)

- `public` : 기본적으로 모든 멤버는 `public`으로 어디서나 접근할 수 있다.
- `protected` : 클래스 자신과 자손 클래스에서만 접근할 수 있다.
- `private` : `protected`와 유사하게 클래스 자신에서만 접근할 수 있지만, 자손 클래스에서도 접근할 수 없다.

### [Why No Static Classes?](https://www.typescriptlang.org/docs/handbook/2/classes.html#why-no-static-classes)

TS(JS)는 Java나 C#에서 사용하는 `static class` 라고 불리는 구조를 사용하지 않는다. (`static class`는 인스턴스화 할 수 없다.)

따라서, `static class` 문법을 사용하는 것은 불필요하다. 단지 단순 리터럴 객체를쓰는 것과 동일하다.

```ts
// Unnecessary "static" class
class MyStaticClass {
	static doSomething() {}
}

// Preferred (alternative 1)
function doSomething() {}

// Preferred (alternative 2)
const MyHelperObject = {
	dosomething() {},
};
```

### [`abstract`](https://www.typescriptlang.org/docs/handbook/2/classes.html#abstract-classes-and-members)

아직 구현하지 않은 메소드와 프로퍼티에 `abstract` 키워드를 사용할 수 있다. `abstract` 멤버를 가진 클래스는 반드시 `abstarct class` 여야 한다.

`abstract class`의 역할은 `abstract` 멤버를 구현할 서브 클래스의 기초 클래스가되는 것이다.

```ts
abstract class Base {
	abstract getName(): string;

	printName() {
		console.log('Hello, ' + this.getName());
	}
}

class Derived extends Base {
	getName() {
		return 'world';
	}
}

const d = new Derived();
d.printName();
```

## 참고자료

- [Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html)
- [private, protected 프로퍼티와 메서드](https://ko.javascript.info/private-protected-properties-methods)
