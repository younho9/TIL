---
icon: ./images/2021-03-17-tagged-templates-icon-0.png
slug: 'tagged-templates'
title: 'Tagged templates'
main_category: Frontend
category: 3. JavaScript
created_time: 2021-03-17
---

`func`string`` 처럼 템플릿 리터럴(template literals) 앞에 태그(함수)를 사용하면
템플릿 리터럴을 파싱할 수 있다.

이렇게 사용되는 태그 함수(Tag function)에는 첫 번째 인수로 문자열 값의 배열이 전
달되고, 나머지 인수로는 표현식이 전달된다.

```javascript
const person = 'Mike';
const age = 28;

function myTag(strings, personExp, ageExp) {
  console.log(strings); // ["that ", " is a ", "", raw: Array(3)]
  const str0 = strings[0];
  const str1 = strings[1];

  const ageStr = ageExp > 99 ? 'centenarian' : 'youngster';

  return str0 + personExp + str1 + ageStr;
}

const output = myTag`that ${person} is a ${age}`;

console.log(output);
// that Mike is a youngster
```

표현식이 여러 개일 경우에 태그 함수에서 나머지 매개변수(Rest parameters)를 사용
하면 배열로 표현식을 받아 사용할 수 있다.

```javascript
function myTag(strings, ...expressions) {
  console.log(strings); // ["that ", " is a ", "", raw: Array(3)]
  console.log(expressions); // ["Mike", 28]
}

const person = 'Mike';
const age = 28;

const output = myTag`that ${person} is a ${age}`;
```

<br />
