# HTML 시작하기

> ❗️ 해당 글은 [HTML 시작하기](https://developer.mozilla.org/ko/docs/Learn/HTML/Introduction_to_HTML/Getting_started) - MDN 문서를 보면서 공부한 기록입니다.

## HTML이란?

HTML(Hypertext Markup Language)는 문서의 특정 텍스트 영역이 문단인지 목록인지 표의 일부인지 구분할 수 있도록 의미를 부여하거나 논리적으로 구조화하는 [마크업 언어](https://ko.wikipedia.org/wiki/마크업_언어)이다. (프로그래밍 언어 X)

## HTML 요소(Element)

HTML은 요소(elements)로 구성되어 있는데 요소의 구조는 다음과 같다.

![https://mdn.mozillademos.org/files/9347/grumpy-cat-small.png](https://mdn.mozillademos.org/files/9347/grumpy-cat-small.png)

1. **여는 태그(Opening tag) :** 요소의 시작을 알리는 태그, 꺽쇠 `<` , `>` 와 태그 이름으로 구성된다.
2. **닫는 태그(Closing tag) :** 요소의 끝을 알리는 태그, 여는 태그와 이름이 같고 앞에 슬래시 `/` 가 붙는다. 태그 중에는 [빈 태그(Empty Tags)](https://www.notion.so/younho9/HTML-d91ec3ccc5294cada5200032cb9758a6#bf101e078e824d289e58b9496b1f41b1)라고 하여 닫는 태그를 생략할 수 있는 요소가 있다.
3. **내용(Content):** 요소의 내용.
4. **요소(Element):** 여는 태그, 닫는 태그, 내용을 통틀어 부르는 용어.

> HTML 요소는 대소문자를 구분하지 않는다. `<title>`, `<Title>`, `<TITLE>` 모두 가능. 하지만 대개 소문자로 작성한다.

### 중첩 요소(Nesting elements)

요소 안에 다른 요소가 들어갈 수 있다. 마지막에 열린 태그가 먼저 닫혀야 한다.

```HTML
<!--중첩 요소의 옳은 예-->
<p>My cat is <strong>very</strong> grumpy.</p>

<!--중첩 요소의 잘못된 예-->
<p>My cat is <strong>very grumpy.</p></strong>
```

### 블럭 레벨(Block level) 요소 vs 인라인(Inline) 요소

HTML의 요소는 크게 두 가지 종류로 나눌 수 있다.

- 블럭 레벨 요소(Block-level elements)는 웹페이지 상에 블록을 만드는 요소이다. 블록 레벨 요소는 앞뒤 요소 사이에 새로운 줄을 만들고 나타난다. 일반적으로 페이지의 구조적 요소를 나타낼 때 사용된다. 블록 레벨 요소는 인라인 요소에 중첩될 수 없다. ex) 단락, 목록, 네비게이션 메뉴, 꼬리말
- 인라인 요소(Inline elements)는 항상 블록 레벨 요소 내에 포함되어 있다. 문장, 단어 같은 작은 부분에 대해서 적용된다. ex) 하이퍼링크, 텍스트 강조, 이탤릭체

> HTML5에서 요소 분류를 재정의 했다. 하지만 "블럭"과 "인라인"의 분류를 고수한다. [Element content categories](https://html.spec.whatwg.org/multipage/indices.html#element-content-categories)

### 빈 요소(Empty elements)

여는 태그와 닫는 태그 패턴이 아닌 단일 태그(Single tag)를 사용하는 요소. Void 요소로 불리기도 한다.

HTML5에서는 `<tag>` 처럼 `/` 를 생략할 수도 있고, `<tag/>` 처럼 `/` 를 사용할 수도 있다. XHTML 버전이나 린트(Lint) 환경 혹은 프레임워크 세팅에 따라 `/` 를 사용하는 것이 필수가 될 수 있다.

둘 다 사용 가능하지만, 한 문서에서 혼용하지 않는 것이 좋다.

```HTML
<img src="https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png">
```

## HTML 속성(Attributes)

요소는 다음과 같이 속성(Attribute)를 가질 수 있다.

![https://mdn.mozillademos.org/files/9345/grumpy-cat-attribute-small.png](https://mdn.mozillademos.org/files/9345/grumpy-cat-attribute-small.png)

속성은 요소에 실제론 나타내고 싶지 않지만, 추가적인 내용을 담고 싶을 때 사용한다.

속성은 다음과 같이 사용한다.

1. 요소 이름과 속성, 속성과 속성 사이에 공백으로 구분된다.
2. 속성 이름(Name) 다음엔 등호(=)가 붙는다.
3. 속성 값(Value)은 열고 닫는 따옴표로 감싸야 한다.

요소 마다 여러 속성을 가질 수 있지만, 요소 마다 주로 사용되는 속성들이 있다.

### 참, 거짓 속성(Boolean attributes)

불 속성은 참, 거짓만을 가지는 속성으로 값(Value)이 없거나, 속성의 이름과 동일한 하나의 값만을 가질 수 있다.

```html
<input type="text" disable="disabled" />
```

또는

```html
<input type="text" disable />
```

### 속성 값(Value)의 따옴표 생략

속성 값의 따옴표는 생략이 가능 하지만, 이것은 마크업 형식을 망쳐버릴 수 있으므로 항상 속성 값에 따옴표를 붙이는 것이 오류를 피하고 가독성을 높이는 방법이다.

```html
<a href=https://www.mozilla.org/>favourite website</a>
```

이것이 가능하지만,

```html
<a href=https://www.mozilla.org/ title=The Mozilla homepage>favorite website</a>
```

이것은 `href`, `title`, `Mozilla`, `homepage`의 속성을 가지는 것으로 해석한다.

### 작은 따옴표와 큰 따옴표

속성 값의 따옴표는 작은 따옴표와 큰 따옴표가 모두 가능하다. 이것은 스타일의 문제로 좋아하는 방법을 사용하면 된다. 하지만 역시 주의해야 할 점은 두 개를 섞어서 쓰면 안된다.

속성 값에서 한 종류의 따옴표를 사용했다면 다른 종류의 따옴표로 속성 값을 둘러싸서 오류를 방지할 수 있다.

```html
<a href="<http://www.example.com>" title="Isn't this fun?">A link to my example.</a>
```

하지만 따옴표 안에 같은 종류의 따옴표를 사용하고 싶다면 따옴표를 표시하기 위해 [HTML entities](https://www.freeformatter.com/html-entities.html)를 사용해야 한다.

## HTML 문서의 구조

다음은 HTML5 문서의 기본 구조이다.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>My test page</title>
  </head>
  <body>
    <p>This is my page</p>
  </body>
</html>
```

1. `<!DOCTYPE html>` : 웹 브라우저에게 HTML 버전의 해석 방식을 알려주는 역할을 한다.
2. `<html></html>` : `<html>` 요소. 이 요소는 전체 페이지의 콘텐츠를 포함하며, 기본 요소로 알려져 있다.
3. `<head></head>` : `<head>` 요소. 이 요소는 페이지 이용자에게 보이지 않지만 검색 결과에 노출될 키워드, 홈페이지 설명, CSS 스타일, Character Set declaration 등 HTML 페이지의 모든 내용을 담고 있다.
4. `<meta charset="utf-8">` : 이 요소는 문서가 사용해야 할 문자 집합을 설정한다. `utf-8` 로 설정하는 것이 일반적.
5. `<title></title>` : `<title>` 요소. 이 요소는 페이지의 제목을 설정하는 것으로 브라우저의 탭에 이 제목이 표시된다.
6. `<body></body>` : `<body>` 요소. 이 요소는 페이지 이용자들에게 보여지는 모든 것이 담긴다.

## 이미지

`<img>` 요소를 살펴본다.

```html
<img src="images/firefox-icon.png" alt="My test image" />
```

여기서 `src`, `alt` 속성이 사용되었다.

- `src` (source) : 이미지 파일의 경로. 절대경로 vs 상대경로
- `alt` (alternative) : 이미지를 볼 수 없는 경우를 위한 설명문(descriptive text).
  - 시각 장애자인 경우, 대체 택스트를 읽어주는 스크린 리더라는 도구를 사용한다.
  - 이미지를 표시할 수 없는 경우. ex) 이미지 파일의 경로가 잘못된 경우
  - [웹 접근성](https://developer.mozilla.org/en-US/docs/Web/Accessibility)의 측면에서 중요한 속성.

## 문자

### 제목

`<h1>` - `<h6>` 까지의 요소(header)를 사용해 6단계의 제목을 사용할 수 있다.

`<h1>`은 문서에서 제일 중요한 제목(헤드라인)에 한 번만 사용하는 것이 좋다.

### 문단

`<p>` 요소를 사용해 문자의 문단을 표현한다.

```
<p>This is a single paragraph.</p>
```

### 목록

목록의 각 항목은 `<li>` 요소(list) 안에 놓여야 한다.

- 순서 없는 목록 : `<ul>` 요소(unordered list).
- 순서 있는 목록 : `<ol>` 요소(ordered list).

```html
<p>At Mozilla, we’re a global community of</p>

<ul>
  <li>technologists</li>
  <li>thinkers</li>
  <li>builders</li>
</ul>

<p>working together ...</p>
```

## 연결

`<a>` 요소(anchor)를 사용해 링크를 만들 수 있다.

```html
<a href="<https://www.mozilla.org/en-US/about/manifesto/>">Mozilla Manifesto</a>
```

> `href` : **h**ypertext **ref**erence

## Reference

[HTML 시작하기](https://developer.mozilla.org/ko/docs/Learn/HTML/Introduction_to_HTML/Getting_started)
