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

객체에 접근하는 방법에는 점 표기법(`person.name`)과 괄호 표기법(`person['age']`)이 있다.

### `this`는 무엇인가?

`this` 키워드는 지금 동작하고 있는 코드를 가지고 있는 객체를 가리킨다.

## OOP

OOP의 기본 컨셉은 실 세계의 일들을 객체를 사용해서 **모델링**하고, 객체를 사용하지 않으면 어려울 일들을 쉽게 처리하는 것이다.

> 용어 정리
>
> 데이터를 감싸다 : encapsulate
> 객체를 참조하기 위한 이름 : namespace
> 추상화 : 중요한 것들만 뽑아서 단순한 모델로 변환하는 작업
> 인스턴스 : 클래스를 통해 만들어진 실제 객체 (클래스는 청사진, 도면, 틀. 인스턴스는 찍어져 나온 결과물)
> 다형성 : polymorphism. 여러 객체 타입에 같은 기능을 정의할 수 있는 능력

### 생성자와 객체 인스턴스

1. 일반적인 함수를 사용해서 객체 생성: 객체를 만들기 위해 굳이 빈 객체를 만들고 내용을 채워서 리턴해야 하는가?

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

```js
function Person(name) {
  this.name = name;
  this.greeting = function () {
    alert(`Hi! I'm ${this.name}.`);
  };
}

var salva = new Person('Salva');
salva.name;
salva.greeting();
```

각각은 서로 다른 namespace에 저장되어있다. 객체의 프로퍼티와 메소드들을 사용하려면, person1 또는 person2로부터 호출하여야 한다. 두 객체의 기능은 따로 패키징되어 서로 충돌하지 않을 것이다. 그리고 두 Person 객체는 각각 고유의 name 프로퍼티와 greeting() 메소드를 사용할 수 있다. 이 둘이 생성될 때 부여받은 자신의 name 값을 사용한다는 것에 주목하자. 이것이 this를 사용하는 매우 중요한 이유 중 하나이다. 객체들은 다른 값이 아니라, 그들이 가진 고유의 값을 사용한다.

## 참고자료

[JavaScript 객체 소개](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects)
