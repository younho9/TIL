---
title: JavaScript 객체지향 프로그래밍
slug: javascript-object-oriented-programming
tags: ['javascript']
author: Younho Choo
author_title: younho9
author_url: https://github.com/younho9
author_image_url: https://avatars.githubusercontent.com/u/48426991
---

## JavaScript 객체 기본

객체는 관련된 **데이터와 함수의 집합**이다. (프로퍼티와 메소드)

객체는 고유의 패키지에 정보를 안전하게 보호해주는 역할을 한다.

### 객체 리터럴 방식

```js
var person = {
  name: ['Bob', 'Smith'],
  age: 32,
  gender: 'male',
  interests: ['music', 'skiing'],
  bio: function () {
    alert(
      this.name[0] +
        ' ' +
        this.name[1] +
        ' is ' +
        this.age +
        ' years old. He likes ' +
        this.interests[0] +
        ' and ' +
        this.interests[1] +
        '.',
    );
  },
  greeting: function () {
    alert("Hi! I'm " + this.name[0] + '.');
  },
};
```

객체에 접근하는 방법에는 점 표기법(`person.name`)과 괄호 표기법(`person['age']`)
이 있다.

### `this`는 무엇인가?

`this` 키워드는 지금 동작하고 있는 코드를 가지고 있는 객체를 가리킨다.

Java에서의 `this`는 인스턴스 자신(self)를 가리키는 참조변수이다. 주로 매개변수와
객체 자신이 갖고 있는 멤버변수명이 같을 경우 이를 구분하기 위해 사용된다.

```java
public Class Person {

  private String name;

  public Person(String name) {
    this.name = name;
  }
}
```

하지만 자바스크립트의 경우 Java와 같이 `this`에 바인딩되는 객체는 한가지가 아니
라, 함수 호출 방식에 따라 달라진다.

1. 함수 호출 : 기본적으로 `this`는 전역객체에 바인딩 된다. 심지어 내부함수, 메소
   드의 내부함수, 콜백함수의 경우도 전역객체에 바인딩된다. 1-1. apply/call/bind
   호출 : 원하는 `this`에 바인딩하여 함수를 호출한다.
2. 메소드 호출 : 메소드를 소유한 객체, 해당 메소드를 호출한 객체에 바인딩된다.
3. 생성자 함수 호출 :
   1. 빈 객체 생성 및 `this` 바인딩
   2. `this`를 통한 프로퍼티 생성
   3. 생성된 객체 반환

```js
var foo = function () {
  console.dir(this);
};

// 1. 함수 호출
foo(); // window
// window.foo();

// 2. 메소드 호출
var obj = {foo: foo};
obj.foo(); // obj

// 3. 생성자 함수 호출
var instance = new foo(); // instance

// 4. apply/call/bind 호출
var bar = {name: 'bar'};
foo.call(bar); // bar
foo.apply(bar); // bar
foo.bind(bar)(); // bar
```

## OOP

OOP의 기본 컨셉은 실 세계의 일들을 객체를 사용해서 **모델링**하고, 객체를 사용하
지 않으면 어려울 일들을 쉽게 처리하는 것이다.

> 용어 정리
>
> 데이터를 감싸다 : encapsulate 객체를 참조하기 위한 이름 : namespace 추상화 :
> 중요한 것들만 뽑아서 단순한 모델로 변환하는 작업인스턴스 : 클래스를 통해 만들
> 어진 실제 객체 (클래스는 청사진, 도면, 틀. 인스턴스는 찍어져 나온 결과물) 다형
> 성 : polymorphism. 여러 객체 타입에 같은 기능을 정의할 수 있는 능력

### 생성자와 객체 인스턴스

1. 일반적인 함수를 사용해서 객체 생성: 객체를 만들기 위해 굳이 빈 객체를 만들고
   내용을 채워서 리턴해야 하는가?

```js
function createNewPerson(name) {
  var obj = {};
  obj.name = name;
  obj.greeting = function () {
    alert("Hi! I'm " + this.name + '.');
  };
  return obj;
}

var salva = createNewPerson('Salva');
salva.name;
salva.greeting();
```

2. 생성자 함수

`new` 키워드를 사용하여 함수를 실행하면 다음과 같은 알고리즘이 동작한다.

```js
function Person(name) {
  // this = {};  (빈 객체가 암시적으로 만들어짐)

  // 새로운 프로퍼티를 this에 추가함
  this.name = name;
  this.greeting = function () {
    alert(`Hi! I'm ${this.name}.`);
  };

  // return this;  (this가 암시적으로 반환됨)
}

var salva = new Person('Salva');
salva.name;
salva.greeting();
```

각각은 서로 다른 namespace에 저장되어있다. 객체의 프로퍼티와 메소드들을 사용하려
면, person1 또는 person2로부터 호출하여야 한다. 두 객체의 기능은 따로 패키징되어
서로 충돌하지 않을 것이다. 그리고 두 Person 객체는 각각 고유의 name 프로퍼티와
greeting() 메소드를 사용할 수 있다. 이 둘이 생성될 때 부여받은 자신의 name 값을
사용한다는 것에 주목하자. 이것이 this를 사용하는 매우 중요한 이유 중 하나이다.
객체들은 다른 값이 아니라, 그들이 가진 고유의 값을 사용한다.

### 객체 리터럴과 생성자 함수 방식의 차이

```js
// 객체 리터럴 방식
var foo = {
  name: 'foo',
  gender: 'male',
};

console.dir(foo);

// 생성자 함수 방식
function Person(name, gender) {
  this.name = name;
  this.gender = gender;
}

var me = new Person('Lee', 'male');
console.dir(me);

var you = new Person('Kim', 'female');
console.dir(you);
```

객체 리터럴 방식과 생성자 함수 방식의 차이는 프로토타입 객체`([[Prototype]])`에
있다.

객체 리터럴 방식의 경우, 생성된 객체의 프로토타입 객체는 `Object.prototype`이다.

생성자 함수 방식의 경우, 생성된 객체의 프로토타입 객체는 `Person.prototype`이다

## 참고자료

[JavaScript 객체 소개](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects)
[함수 호출 방식에 의해 결정되는 this](https://poiemaweb.com/js-this#3-%EC%83%9D%EC%84%B1%EC%9E%90-%ED%98%B8%EC%B6%9C-%ED%8C%A8%ED%84%B4constructor-invocation-pattern)
[JavaScript: What is the meaning of this?](https://web.dev/javascript-this/)
