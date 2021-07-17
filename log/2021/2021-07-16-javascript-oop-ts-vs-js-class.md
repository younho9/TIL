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

### 접근 제어자(Access Modifier)

객체 지향 프로그래밍에서는 접근 제어자를 활용해 [내부 인터페이스와 외부 인터페이스를 구분하여 캡슐화](https://ko.javascript.info/private-protected-properties-methods#ref-1065)한다.

- `public` : 어디서든지 접근할 수 있으며 외부 인터페이스를 구성한다.
- `protected` : 클래스 자신과 자손 클래스에서만 접근할 수 있으며 내부 인터페이스를 구성한다.
- `private` : 클래스 자신에서만 접근할 수 있으며 내부 인터페이스를 구성한다.

JS에서는 `public`, `protected` 에 대한 문법적 지원이 없으며, 관습적으로 `_` 접두사를 사용하여 `protected` 프로퍼티를 사용한다.

[`private` 속성](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes/Private_class_fields)은 ES2019부터 지원하게 되었다.

## TS 클래스 문법

TS는 JS의 모든 클래스 문법을 지원하며, 그에 더해서 몇 가지 문법적인 지원을 추가해준다. 하지만 모든 문법은 컴파일 타임에 대해서만 적용되고, 런타임에는 결국 JS가 지원하는 기능만을 사용해 동작한다는 것을 기억하자.

다음은 JS에서 지원하지 않지만, TS에서 사용할 수 있는 Class와 관련된 기능들이다.

### [`readonly`](https://www.typescriptlang.org/docs/handbook/2/classes.html#readonly)

필드에는 `readonly` 제어자를 접두사로 사용할 수 있다. 이렇게 하면 생성자 함수가 아닌 곳에서 할당을 방지할 수 있다.

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

JS는 함수의 매개변수의 갯수와 자료형이 자유롭기 때문에, 오버로드에 대한 개념이 사실상 없다. (단지, 매개변수의 조건에 따른 분기를 작성하는 정도)

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
```

### `override`

```ts
class Point {
  // Overloads
  constructor(x: number, y: string);
  constructor(s: string);
  constructor(xs: any, y?: any) {
    // TBD
  }
}
```

## 참고자료

- [Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html)
- [private, protected 프로퍼티와 메서드](https://ko.javascript.info/private-protected-properties-methods)
