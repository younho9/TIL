---
id: HTML-속의-자바스크립트
title: 'HTML 속의 자바스크립트'
---

> 📌 Table of Contents

JavaScript는 출현 즉시 웹의 지배적인 언어인 HTML에 포함되었다. 넷스케이프는 JavaScript가 다른 브라우저의 HTML 페이지 렌더링을 방해하지 않으면서 공존할 길을 모색했다. 이러한 초기 작업의 대부분이 오늘날까지 살아남았고 HTML 명세에서 공식적으로 문서화되었다.

### `<script>` 요소

JavaScript를 HTML 페이지에 삽입하는 일차적인 방법은 `<script>` 요소를 통하는 것이다. 이는 넷스케이프 내비게이터 2에서 처음 구현했고, 이후 공식 HTML 명세에 추가되었다.

| 값                                       | 설명                                                                                                                                                             | 속성    |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| async                                    | 스크립트를 비동기적으로 실행할 것인지 명시함.                                                                                                                    | async   |
| charset                                  | `src` 속성으로 명시한 코드의 문자셋을 지정한다. 브라우저가 대개 이 속성의 값을 무시하므로 잘 쓰이지 않음.                                                        | charset |
| defer                                    | 페이지가 완전히 파싱될 때까지 스크립트의 실행을 지연시킬 것인지 명시함.                                                                                          | defer   |
| URL                                      | 외부 파일의 위치를 지정함.                                                                                                                                       | src     |
| `text/javascript` (기본값) 또는 `module` | 스크립트 언어의 콘텐츠 타입(마임 타입)을 지정함. 이 속성을 생략해도 기본 값이 `text/javascript` 로 안전함. 최근 브라우저에서 `module` 을 새롭게 지원하기 시작함. | type    |

`<script>` 요소는 두 가지 방법으로 사용한다. 페이지에 직접 JavaScript 코드를 작성하거나 외부 파일에서 불러올 수 있다. `<script>` 요소 안에 직접 JavaScript 코드를 작성하는 것을 인라인 자바스크립트라고 한다.

인라인 자바스크립트 코드를 작성할 때는 문자열 `</script>` 는 쓸 수 없다. 브라우저가 스크립트를 파싱하면서 문자열 `</script>` 를 닫는 태그 `</script>`로 인식하기 때문이다. 이런 문제는 `/` 문자를 이스케이프해서 해결할 수 있다.

```javascript
<script type="text/javascript">
  function sayScript() {
    alert("<\/script>");
  }
</script>
```

JavaScript 코드를 외부에서 불러오려면 `src` 속성을 사용한다. `src` 속성의 값으로 JavaScript 파일의 URL을 지정한다.

```javascript
<script type="text/javascript" src="example.js"></script>
```

이 외부 파일에는 JavaScript 코드만 들어가며 `<script>` , `</script>` 태그를 쓰지 않는다. `src` 속성에는 외부 도메인의 URL을 써서 다른 도메인에 있는 JavaScript 파일도 가져올 수 있다.

> ☝️ 만약 `<script>` , `</script>` 태그 사이에 스크립트 코드가 있고 `src` 속성도 사용했다면, 브라우저는 스크립트 파일을 내려받아 실행하고 인라인 코드는 무시한다.

코드를 가져온 방법과 관계 없이 `<script>` 요소는 페이지에 나타난 순서대로 실행된다. **또한 웹 브라우저는 HTML을 렌더링하는 과정에서** **`<script>`** **요소를 만나면 내부의 코드 전체를 평가하기 전에는 페이지의 나머지 콘텐츠를 불러오지도 않고 표시하지도 않는다.**

![HTML-속의-자바스크립트-image-0](https://blog.asamaru.net/res/img/post/2017/05/script-async-defer-1.png)

> ☝️ 이를 동기적(Syncronous) 처리라고 하며, 비동기적(Asyncronous)으로 처리하기 위해서 `async` , `defer` 속성을 사용한다.

#### 태그 위치

전통적으로 `<script>` 요소는 페이지의 `<head>` 요소 안에 쓰는 것이 일반적이었다.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document</title>
    <script type="text/javascript" src="example1.js"></script>
    <script type="text/javascript" src="example2.js"></script>
  </head>
  <body>
    <!-- 페이지 콘텐츠 -->
  </body>
</html>
```

이런 형식을 취한 목적은 CSS나 JS 같은 외부 파일에 대한 참조를 한곳에서 관리하기 위함이었지만, 이렇게하면 외부 파일을 전부 내려받고 파싱하고, 해석을 끝낼 때까지 페이지 렌더링이 멈추게 된다. 이런 이유로 최신 웹 애플리케이션에서는 일반적으로 JavaScript 코드를 `<body>` 요소 안에, 페이지 콘텐츠 마지막에 쓴다.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document</title>
  </head>
  <body>
    <!-- 페이지 콘텐츠 -->
    <script type="text/javascript" src="example1.js"></script>
    <script type="text/javascript" src="example2.js"></script>
  </body>
</html>
```

이렇게 하면 브라우저는 페이지 렌더링을 모두 마친 다음 자바스크립트 코드를 처리한다.

#### `defer`

HTML 4.01에서는 `<script>` 요소에 `defer` 속성을 정의했다. `defer` 속성의 목적은 페이지 전체를 파싱한 후에 스크립트를 실행해도 상관 없다고 명시하는 것이다.

`<script>` 요소에 `defer` 속성을 설정하면 스크립트 파일의 실행(execution)을 지연시킨다. 브라우저는 `defer` 가 설정된 `<script>` 요소를 만나면 즉시 스크립트 파일을 가져오지만(fetch) HTML 구문 분석(parsing)을 일시정지하지 않고, parsing이 끝난 뒤에 스크립트를 실행하게 된다.

또한 대부분의 최신 브라우저는 `defer` 속성이 적용된 여러 `<script>` 요소가 있을 때 호출된 순서대로 실행하는 것을 보장한다.

하지만 몇몇 브라우저가 이 속성을 무시하고 스크립트를 즉시 내려받고 즉시 실행한다. 따라서 지연시킬 스크립트는 페이지 맨 마지막에 놓는 편이 여전히 최상이다.

> ☝️ `defer` 속성은 외부 스크립트 파일을 불러올 때만 유효하다.

```javascript
<script defer src="script.js">
```

![HTML-속의-자바스크립트-image-1](https://blog.asamaru.net/res/img/post/2017/05/script-async-defer-3.png)

#### `async`

HTML5에서는 `<script>` 요소에 `async` 속성을 도입하였다. `async` 는 외부 스크립트에만 적용되고 `<script>` 요소를 만나는 즉시 스크립트를 fetch 한다는 점에서 `defer` 와 비슷하다. `defer` 와 달리 `async` 는 스크립트를 fetch하고 나서 실행 가능한 시점이 되면 스크립트를 실행하고, 구문 분석을 일시정지한다.

**여러** **`<script>`** **요소에** **`async`** **를 사용할 경우 호출된 순서대로 실행하는 것을 보장할 수 없다.** 먼저 fetch된 스크립트를 먼저 실행하기 때문이다. 따라서 `async` 를 사용할 때 파일 사이에 의존성이 있어서는 안된다.

`async` 속성의 목적은 스크립트 파일을 모두 내려받아 실행할 때까지 기다릴 필요 없이 페이지 렌더링을 시작해도 좋으며, 앞선 스크립트 파일을 기다리지 않고 뒤에 있는 스크립트 파일을 내려받아 실행해도 좋다고 명시하는 것이다.

```javascript
<script async src="script.js">
```

![HTML-속의-자바스크립트-image-2](https://blog.asamaru.net/res/img/post/2017/05/script-async-defer-2.png)

#### XHTML

XHTML은 HTML에 XML을 적용한 것이다. XHTML은 HTML보다 엄격하여 `<script>` 요소에 인라인 자바스크립트 코드를 쓸 때도 적용된다. 아래의 코드는 HTML에서는 유효하지만 XHTML에서는 에러가 발생한다.

```javascript
<script type="text/javascript">
  function compare(a, b) {
    if (a < b) {
      alert("A is less than B");
    } else if (a > b) {
      alert("A is greater than B");
    } else {
      alert("A is equal to B");
    }
  }
</script>
```

HTML에서는 `<script>` 요소의 콘텐츠를 파싱하는 특별한 규칙이 있지만 XHTML에는 해당 규칙이 적용되지 않기 때문이다. XHTML은 < 기호를 태그의 시작으로 간주해 < 기호 다음에 공백문자가 올 수 없다는 문법 에러를 발생시킨다.

이 문법 에러는 두 가지 방법으로 수정할 수 있는데, 첫 번째 방법은 < 기호를 HTML 엔티티 &lt;로 바꾸는 방법이다. 이 코드는 XHTML에서 실행 되지만 가독성이 나쁘다.

```javascript
<script type="text/javascript">
  function compare(a, b) {
    if (a &lt; b) {
      alert("A is less than B");
    } else if (a > b) {
      alert("A is greater than B");
    } else {
      alert("A is equal to B");
    }
  }
</script>
```

두 번째 방법은 JavaScript 코드를 CDATA 섹션으로 감싸는 것이다. XHTML과 XML에서 CDATA 섹션은 해당 콘텐츠를 있는 그대로의 텍스트이며 파싱하면 안된다고 명시한다.

```javascript
<script type="text/javascript"><![CDATA[
  function compare(a, b) {
    if (a < b) {
      alert("A is less than B");
    } else if (a > b) {
      alert("A is greater than B");
    } else {
      alert("A is equal to B");
    }
  }
]]></script>
```

XHTML 호환 웹 브라우저는 이 방법으로 해결되지만, 많은 브라우저가 XHTML 비호환이며 CDATA를 지원하지 않는다. 이 문제를 해결하기 위해 CDATA 마크업 앞에 자바스크립트 주석 기호를 사용한다.

```javascript
<script type="text/javascript">
//<![CDATA[
  function compare(a, b) {
    if (a < b) {
      alert("A is less than B");
    } else if (a > b) {
      alert("A is greater than B");
    } else {
      alert("A is equal to B");
    }
  }
//]]>
</script>
```

이렇게 하면 XHTML을 지원하지 않는 브라우저와, XHTML을 지원하는 브라우저 모두에서 잘 동작한다.

### 인라인 코드와 외부 파일

HTML 파일에 직접 JavaScript 코드를 작성하는 인라인 자바스크립트와 외부 파일 중에 어느 방법이 더 좋을까? 일반적으로 외부 파일로 분리하는 방법을 모범 사례로 간주한다. 외부 파일을 사용하면 다음과 같은 이점이 있기 때문이다.

- 관리가 쉽다 - JS 파일을 모두 디렉터리 하나에 모아놓고, 마크업과 무관하게 JavaScript 코드를 수정할 수 있다.

- 캐싱 - 브라우저는 외부에서 연결된 JS 파일을 모두 캐시하므로, 서로 다른 페이지에서 같은 파일을 사용한다면 한 번만 내려받고 다시 사용할 수 있다. 따라서 성능이 좋아진다.

- 미래에도 안전하다 - JS 파일을 외부에 저장하면 앞서 언급한 CDATA 섹션이나 주석 편법을 쓰지 않아도 된다. 외부 파일을 불러오는 문법은 HTML이나 XHTML이나 모두 똑같기 때문이다.

### `<noscript>` 요소

`<noscript>` 요소는 브라우저가 JavaScript를 지원하지 않을 때 대체 콘텐츠를 제공하기 위해 만들어졌다. `<noscript>` 요소는 `<script>` 요소를 제외한 모든 HTML 요소를 포함할 수 있다. `<noscript>` 요소는 다음 두 상황에서만 표시된다.

- 브라우저가 스크립트를 지원하지 않거나

- 브라우저의 스크립트 지원이 꺼져 있을 때

이 두 상황을 제외하면 브라우저는 `<noscript>` 요소의 콘텐츠를 표시하지 않는다.

```javascript
<!DOCTYPE html>
<html>
  <head>
    <title>Document</title>
    <script type="text/javascript" src="example1.js"></script>
    <script type="text/javascript" src="example2.js"></script>
  </head>
  <body>
    <noscript>
      <p>This page requires a JavaScript-enabled browser.</p>
    </noscript>
  </body>
</html>
```

### 요약

JavaScript는 `<script>` 요소를 통해 HTML에 삽입된다. JavaScript는 인라인 또는 외부 파일로 사용할 수 있다.

- 외부 JS 파일을 불러오려면 `src` 속성에 파일 URL을 쓴다. 외부 도메인의 JS 파일도 가져와 쓸 수 있다.

- 모든 `<script>` 요소는 페이지에 나타내는 순서대로 해석된다. `defer` , `async` 를 사용하지 않았다면 `<script>` 요소의 코드를 완전히 fetch하고 실행한 이후에만 그 다음 `<script>` 요소의 코드를 해석하고 처리할 수 있다.

- 또한 `defer` , `async` 속성을 사용하지 않았다면 `<script>` 요소를 만났을 때 코드를 완전히 fetch하고 실행될 때까지 페이지 렌더링 역시 일시 정지된다. 이 때문에 `<script>` 요소를 보통 페이지의 주요 콘텐츠 다음, `</body>` 태그 바로 앞에 놓는다.

- `defer` 속성은 스크립트의 실행을 문서 렌더링 이후로 미룬다.

- `async` 속성은 해당 스크립트가 fetch될 때까지 다른 스크립트나 문서 렌더링을 차단하지 않아도 된다고 명시한다. 이 속성은 마크업 순서대로 실행된다는 것을 보장하지 않는다.

### 참고자료

[스크립트 태그의 CDATA 사용에 대해서 :: Outsider's Dev Story](https://blog.outsider.ne.kr/142)

[: 스크립트 요소](https://developer.mozilla.org/ko/docs/Web/HTML/Element/script)

[HTML script tag](https://www.w3schools.com/tags/tag_script.asp)

[[HTML5] 꼼꼼히 살펴보는 SCRIPT 엘리먼트](https://taegon.kim/archives/6804)

[script의 async와 defer 속성](https://blog.asamaru.net/2017/05/04/script-async-defer/)
