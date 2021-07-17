---
title: JavaScript 객체 기본
slug: javascript-oop-object-basic
tags: ['JavaScript', 'OOP']
author: Younho Choo
author_title: younho9
author_url: https://github.com/younho9
author_image_url: https://avatars.githubusercontent.com/u/48426991
---

## 객체

객체는 문자형으로된 **키(key)**와 모든 자료형을 사용할 수 있는 **값(value)** 쌍으로 구성된 여러 **프로퍼티(property)**의 집합이다. 프로퍼티의 값으로 함수가 될 수 있는데, 이 경우 **메소드(method)**라고 불린다.

객체는 고유의 패키지에 정보를 안전하게 보호해주는 역할을 한다.

JavaScript에서 객체를 만드는 방법에는 크게 2가지가 있다. (추가적으로 [`Object.create()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Working_with_Objects#object.create_%EB%A9%94%EC%84%9C%EB%93%9C_%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0)를 이용하는 방법이 있다.)

```js
let obj1 = new Object(); // '객체 생성자' 문법
let obj2 = {}; // '객체 리터럴' 문법
```

> [두 방법은 차이가 없다.](https://stackoverflow.com/questions/4597926/what-is-the-difference-between-new-object-and-object-literal-notation)
>
> Object가 아닌 다른 생성자 함수나 클래스를 사용해서 생성할 때, [차이가 발생](https://poiemaweb.com/js-this#32-%EA%B0%9D%EC%B2%B4-%EB%A6%AC%ED%84%B0%EB%9F%B4-%EB%B0%A9%EC%8B%9D%EA%B3%BC-%EC%83%9D%EC%84%B1%EC%9E%90-%ED%95%A8%EC%88%98-%EB%B0%A9%EC%8B%9D%EC%9D%98-%EC%B0%A8%EC%9D%B4)한다. 이 차이의 핵심은 프로토타입 객체`([[Prototype]])`에 있다.

### 객체 정렬 방식

"프로퍼티엔 순서가 있을까?"

정수 프로퍼티는 **자동으로 정렬**되고, 그 외의 프로퍼티는 객체에 **추가한 순서대로** 정렬된다. [참고](https://ko.javascript.info/object#ref-845)

## 참고자료

- [JavaScript 객체 기본](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/Basics)
- [Working with objects](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Working_with_Objects)
- [객체: 기본](https://ko.javascript.info/object)
