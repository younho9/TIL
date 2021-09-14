---
icon: ./images/2020-06-12-web-storage-icon-0.png
slug: 'web-storage'
title: 'Web Storage'
main_category: Frontend
category: 3. JavaScript
author: Younho Choo
author_title: younho9
author_url: https://github.com/younho9
author_image_url: https://avatars.githubusercontent.com/u/48426991
created_time: 2020-06-12
updated_time: 2021-02-15
---

## Web Storage API

Web Storage API는 브라우저가 key/value 쌍을 쿠키보다 훨씬 직관적인 방식으로 저장할 수 있는 메커니즘을 제공한다.

Web Storage에는 `sessionStorage` , `localStorage` 두 가지 메커니즘이 있다.

- `sessionStorage` : 현재 떠 있는 탭 내에서 데이터를 유지. 새로고침, 복원 시에도데이터를 유지하지만 탭을 닫으면 데이터가 사라진다.

- `localStorage` : 브라우저를 닫고 새로 열어도 데이터가 유지된다. 자바스크립트를통해서 조작하거나 브라우저 캐시를 지워야 데이터가 사라진다.

### 쿠키와 다른 점

- 쿠키는 네트워크 요청 시 서버로 전송되지만, Web Storage 객체는 서버로 전송되지않는다.

- 쿠키보다 더 많은 자료를 보관할 수 있다. (쿠키 : 4KB, Web Storage : 최소 2MB)

> 브라우저별, 디바이스별로 Storage의 최대 용량이 다를 수 있다.

### 메서드와 프로퍼티

- `setItem(key, value)` : key/value 쌍을 보관

- `getItem(key)` : key에 해당하는 value를 받아옴

- `removeItem(key)` : key와 해당 값을 삭제

- `clear()` : 모든 것을 삭제

- `key(index)` : index에 해당하는 key를 받아옴

- `length` : 저장된 항목의 개수를 얻음

### localStorage 데모

아래의 코드를 브라우저 콘솔에서 실행한다.

```javascript
localStorage.setItem('test', 'Hello localStorage');
```

그리고 브라우저를 닫고 연다음 아래의 코드를 실행한다. (다른 창에서 실행해도 된다 .)

```javascript
alert(localStorage.getItem('test')); // Hello localStorage
```

### sessionStorage 데모

아래의 코드를 브라우저 콘솔에서 실행한다.

```javascript
sessionStorage.setItem('test', 'Hello sessionStorage');
```

그리고 브라우저를 새로고침한 다음 아래의 코드를 실행한다.

```javascript
alert(sessionStorage.getItem('test'); // Hello sessionStorage
```

하지만 다른 탭에서 실행하거나 브라우저를 껐다가 다시 켜서 실행해보면 `null` 이출력된다.

```javascript
alert(sessionStorage.getItem('test'); // null
```

### 일반 객체처럼 사용하기

Storage의 키를 얻거나 설정할 때 일반 객체와 유사한 방법을 사용할 수 있다. 하지만 `getItem` , `setItem` 메서드를 사용하는 것을 권장한다.

```javascript
// 키 설정하기
localStorage.test = 2;

// 키 얻기
alert(localStorage.test); // 2

// 키 삭제하기
delete localStorage.test;
```

1. 사용자가 `length` , `toString` , `localStorage` 의 내장 메서드를 키로 설정할수 있다.

   ```javascript
   let key = 'length';
   localStorage[key] = 5; // TypeError: Cannot assign to read only property 'length'...
   ```

1. 데이터를 수정하면 `storage` 이벤트가 발생하는데, Storage를 객체처럼 접근할 땐일어나지 않는다.

### 키 순회하기

Storage 객체는 iterable 객체가 아니다. 대신 배열처럼 다뤄 전체 key/value 를 얻을수 있다.

```javascript
for (let i = 0; i < localStorage.length; i++) {
  let key = localStorage.key(i);
  alert(`${key}: ${localStorage.getItem(key)}`);
}
```

일반 객체를 다룰 때 처럼 for in 문을 사용할 수는 있지만, 이렇게 하면 내장 필드까지 출력된다.

```javascript
// 좋지 않은 방법
for (let key in localStorage) {
  alert(key); // getItem, setItem 같은 내장 필드까지 출력됩니다.
}
```

`hasOwnProperty` 를 사용하면 프로토타입에서 상속받은 필드를 골라낼 수 있다.

```javascript
for (let key in localStorage) {
  if (!localStorage.hasOwnProperty(key)) {
    continue; // setItem, getItem 등의 키를 건너뜁니다.
  }
  alert(`${key}: ${localStorage.getItem(key)}`);
}
```

for of 문을 사용하는 방법도 있다.

```javascript
let keys = Object.keys(localStorage);
for (let key of keys) {
  alert(`${key}: ${localStorage.getItem(key)}`);
}
```

### 문자열만 사용

`localStorage` 의 key와 value는 반드시 문자열이어야 한다.

### 참고자료

[localStorage와 sessionStorage](https://ko.javascript.info/localstorage)

[Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)
