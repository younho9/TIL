---
title: JavaScript 객체의 프로퍼티 플래그
slug: javascript-oop-object-property-flag
tags: ['JavaScript', 'OOP']
author: Younho Choo
author_title: younho9
author_url: https://github.com/younho9
author_image_url: https://avatars.githubusercontent.com/u/48426991
---

## 프로퍼티 플래그

객체 프로퍼티는 **값(value)** 와 함께 **플래그(flag)** 라 불리는 특별한 속성 세가지를 갖는다.

- `writable` : `true` 이면 값을 수정할 수 있다. 그렇지 않으면 읽기만 가능하다.
- `enumerable` : `true` 이면 `for ... in` 루프에서 열거할 수 있다. 그렇지 않다면열거할 수 없다.
- `configurable` : `true ` 이면 프로퍼티 삭제나 플래그 수정이 가능하다. 그렇지않으면 프로퍼티 삭제와 플래그 수정이 불가능하다.

### `enumerable` 플래그

[열거 가능(enumerable)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) 여부를 나타낸다.

[반복 가능(iterable)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Iteration_protocols)은비슷하지만 다른 의미이다.

### `configurable` 플래그

`configurable` 플래그를 `false` 로 설정하면 돌이킬 방법이 없다.

> `defineProperty` 를 써도 값을 `true` 로 되돌릴 수 없다.

`configurable`: `false` 가 만들어내는 구체적인 제약사항은 아래와 같다.

- `configurable` 플래그를 수정할 수 없음
- `enumerable` 플래그를 수정할 수 없음.
- `writable: false` 의 값을 `true` 로 바꿀 수 없음(`true` 를 `false` 로 변경하는것은 가능함).
- `getter` / `setter` 을 변경할 수 없음(새롭게 만드는 것은 가능함).

> 이런 특징을 이용하면 아래와 같이 “영원히 변경할 수 없는” 프로퍼티를 만들 수 있다.

### 관련 Object 메소드

- [Object.defineProperty](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) : 객체에 새로운 속성을 정의하거나 수정하고 그 객체를 반환한다.
- [Object.defineProperties](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties) : 객체에 하나 또는 그 이상의 새로운 속성을 정의하거나 수정하고 그 객체를 반환한다.
- [Object.getOwnPropertyDescriptor](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor) : 주어진 객체 자신의 속성에 대한 속성 설명자(descriptor)를 반환한다.
- [Object.getOwnPropertyDescriptors](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors) : 주어진 객체 자신의 모든 속성들의 설명자(descriptor)들을 반환한다.
- [Object.preventExtensions(obj)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions) : 객체에 새로운 프로퍼티를 추가할 수 없게 한다.
- [Object.seal(obj)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/seal) : 새로운 프로퍼티 추가나 기존 프로퍼티 삭제를 막아준다. 프로퍼티 전체에 configurable: false를 설정하는 것과 동일한 효과이다.
- [Object.freeze(obj)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) : 새로운 프로퍼티 추가나 기존 프로퍼티 삭제, 수정을 막아준다. 프로퍼티 전체에 configurable: false, writable: false를 설정하는 것과 동일한 효과이다.

- [Object.isExtensible(obj)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible) : 새로운 프로퍼티를 추가하는 게 불가능한 경우 false를, 그렇지 않은 경우 true를반환한다.
- [Object.isSealed(obj)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed) : 프로퍼티 추가, 삭제가 불가능하고 모든 프로퍼티가 configurable: false이면 true를 반환한다.
- [Object.isFrozen(obj)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen) : 프로퍼티 추가, 삭제, 변경이 불가능하고 모든 프로퍼티가 configurable: false, writable: false이면 true를 반환한다.

## 참고자료

- [프로퍼트 플래그와 설명자](https://ko.javascript.info/property-descriptors)
