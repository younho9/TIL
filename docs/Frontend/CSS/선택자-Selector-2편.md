# 선택자(Selector) - 2편

> ❗️ 해당 글은 [패스트캠퍼스 - 프론트엔드 개발 강의](https://www.fastcampus.co.kr/dev_online_react/)에서 HTML & CSS, SASS(SCSS) Part의 [박영웅 강사님](https://github.com/ParkYoungWoong)의 강의자료를 정리한 것입니다.

### 가상 클래스 선택자(Pseudo-Classes Selectors)

#### Hover

요소에 마우스(포인터)가 올라가 있는 동안에만 선택

```css
a:hover {
  font-weight: bold;
  font-size: 20px;
}
```

```html
<a href="<https://google.com>">Google!</a>
```

#### Active

요소를 마우스로 클릭하는 동안에만 선택

```css
.box {
  width: 100px;
  height: 100px;
  background: tomato;
}
.box:active {
  background: yellowgreen;
}
```

```html
<div class="box"></div>
```

#### Focus

요소가 포커스 된 동안에만 선택

> 대화형 콘텐츠에서 사용 가능, input ...

```css
input:focus {
  border-color: red;
  width: 200px;
}
```

```html
<input type="text" />
```

> hover, active, focus는 선택자이지만 JS에서의 이벤트 개념과 헷갈릴 소지가 있다. (? 아직 모르는 내용)

#### First child

형제 요소 중 첫번째 요소인 모든 요소 중에서 선택

```css
.fruits li:first-child {
  color: red;
}
```

```html
<ul class="fruits">
  <li>딸기</li>
  <!--선택-->
  <li>사과</li>
  <li>오렌지</li>
  <li>망고</li>
</ul>
```

#### Last child

형제 요소 중 마지막 요소인 모든 요소 중에서 선택

```css
.fruits li:last-child {
  color: red;
}
```

```html
<ul class="fruits">
  <li>딸기</li>
  <li>사과</li>
  <li>오렌지</li>
  <li>망고</li>
  <!--선택-->
</ul>
```

#### N-th child

형제 요소 중 n번째 요소인 모든 요소 중에서 선택( `n` 키워드 사용시 0부터 해석(Zero-base))

- `n` 키워드 미사용시

  ```css
  .fruits li:nth-child(2) {
    color: red;
  }
  ```

  ```html
  <ul class="fruits">
    <li>딸기</li>
    <li>사과</li>
    <!--선택-->
    <li>오렌지</li>
    <li>망고</li>
  </ul>
  ```

- `n` 키워드 사용시

  ```css
  .fruits li:nth-child(n + 3) {
    color: red;
  }
  /* n은 0부터 시작이므로 3이상의 모든 요소 */
  ```

  ```html
  <ul class="fruits">
    <li>딸기</li>
    <li>사과</li>
    <li>오렌지</li>
    <!--선택-->
    <li>망고</li>
    <!--선택-->
  </ul>
  ```

> :xxx-child 유의사항 :

- `p:nth-child(1)` 인 경우 - `p` 인 태그 중에서 형제 요소 중 첫 번째 요소인 것이 아니라 형제 요소 중 첫 번째 요소가 `p` 태그이면 선택으로 해석되는 것 → 전자의 설명은 _[nth-of-type](https://www.notion.so/younho9/Selector-fc1bdee29ad1462084b335cf04cb3ce1#5f648b6658364df3a22026a9e53b28a1)_ _참조 -_ 기본, 후손, 자식 선택자와의 혼합 사용시 주의요함.

- `.fruits :nth-child(1)` 인 경우 - `class="fruits"` 인 요소의 후손 중, 형제 요소 중 첫 번째인 요소는 모두 선택됨.

#### N-th of type

형제 요소 중 타입(tag)의 n번째 요소 선택( `n` 키워드 사용시 0부터 해석(Zero-base))

```css
.fruits {
  font-size: 40px;
}
.fruits p:nth-of-type(1) {
  color: red;
}
```

```html
<div class="fruits">
  <div>딸기</div>
  <p>사과</p>
  <!--선택-->
  <p>망고</p>
  <span>오렌지</span>
</div>
```

> :nth-of-type() 유의사항 :

- 타입(tag)의 n번째를 찾는 것이기 때문에 class 또는 id 선택자를 넣으면 각 타입 중 n번째 중에서 class 또는 id 선택자로 선택하는 것이지, class 또는 id 선택자를 갖는 요소 중 n번째를 찾는 것이 아니다.

#### 부정 선택자(Negation Selector)

해당 선택자가 아닌 요소를 선택

```css
.fruits {
  font-size: 40px;
}
.fruits li:not(.strawberry) {
  color: red;
}
```

```html
<ul class="fruits">
  <li>오렌지</li>
  <!--선택-->
  <li class="strawberry">딸기</li>
  <li>망고</li>
  <!--선택-->
  <li>사과</li>
  <!--선택-->
</ul>
```

### 가상 요소 선택자(Pseudo-Elements Selectors)

> emmit 문법 : ul>li{\$}\*10

#### Before

요소 내부의 앞에 내용(content)을 삽입

```css
ul li::before {
  content: '숫자';
  color: red;
}
```

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
```

> 유의사항
> content 속성을 설정하지 않으면 아무것도 보이지 않는다.
> 빈 내용을 넣고 싶다면 content: ""; 를 추가해야한다.

#### After

요소 내부의 뒤에 내용(content)을 삽입

```css
ul li::after {
  content: '.0';
}
```

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
```

`::before` 나 `::after` 모두 content에 텍스트 뿐 아니라 이미지를 삽입하는 것도 가능하다. `url 함수` 를 이용하는 방법이 있다.

```css
ul li::after {
  content: url('<https://heropy.blog/css/images/logo.png>');
}
```

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
```

> 유의사항
> :before , :after 도 동작하지만, 이는 과거에 가상 클래스 선택자, 가상 요소 선택자 개념이 분리되기 전에 사용되던 것으로 현재는 ::before , ::after 로 사용하는 것이 표준이다.

### 속성 선택자(Attribute Selectors)

#### Attr

속성 `attr` 을 포함한 요소 선택

```css
[disabled] {
  opacity: 0.2;
}
```

```html
<input type="text" value="HEROPY" />
<input type="password" value="1234" />
<input type="text" value="disabled text" disabled />
```

#### Attr=Value

속성 `attr` 을 포함하며 속성 값이 `value` 인 요소 선택

```css
[type='password'] {
  opacity: 0.5;
  color: red;
}
```

```html
<input type="text" value="HEROPY" />
<input type="password" value="1234" />
<input type="text" value="disabled text" disabled />
```

> value 에는 따옴표를 붙일 수도 붙이지 않을 수도 있다.
> type=password or type="password"

#### Attr^=Value

속성 `attr` 을 포함하며 속성 값이 `value` 로 시작하는 요소 선택

```css
[class^='btn-'] {
  font-weight: bold;
  border-radius: 20px;
}
```

```html
<button class="btn-success">Success</button>
<button class="btn-danger">Danger</button>
<button>Normal</button>
```

#### Attr\$=Value

속성 `attr` 을 포함하며 속성 값이 `value` 로 끝나는 요소 선택

```css
[class$='btn-'] {
  font-weight: bold;
  border-radius: 20px;
}
[class$='success'] {
  color: green;
}
[class$='danger'] {
  color: red;
}
```

```html
<button class="btn-success">Success</button>
<button class="btn-danger">Danger</button>
<button>Normal</button>
```

### 상속(Inheritance)

```css
.ecosystem {
  color: red;
}
```

```html
<div class="ecosystem">
  생태계
  <div class="animal">
    동물
    <div class="tiger">호랑이</div>
    <div class="lion">사자</div>
    <div class="elephant">코끼리</div>
  </div>
  <div class="plant">식물</div>
</div>
```

> 생태계(.ecosystem)에 적용된 색상이 하위 요소들에 모두 적용된다.

#### 상속되는 속성들(properties)

글자를 다루는 속성들이 기본적으로 상속이 된다. 나머지 속성들은 상속이 되지 않는다.

- font

  - font-size

  - font-weight

  - font-style

  - line-height

  - font-family

- color

- text-align

- text-indent

- text-decoration

- letter-spacing

- opacity

- etc...

#### 강제 상속

원래는 상속되지 않는 속성을 강제적으로 상속시킬 수 있다.

```html
<div class="parent">
  <div class="child"></div>
</div>
```

```css
.parent {
  position: absolute; /* 원래는 상속되지 않는 속성과 값 */
}
.child {
  position: inherit; /* 부모의 속성과 값 position: absolute; 을 강제 상속 받는다 */
}
```

> 상속되지 않는 속성도 inherit 이라는 값을 사용해서 부모에서 자식으로 강제 상속시킬 수 있다. 자식을 제외한 후손에게는 적용되지 않으며, 모든 속성이 강제 상속을 사용할 수 있는 것은 아니다.

### 우선순위(Priority)

```html
<body>
  <!--인라인 선언방식-->
  <div id="color_yellow" class="color_green" style="color: orange;">Hello world!</div>
</body>
```

```css
div {
  color: red !important;
} /* !important */

#color_yellow {
  color: yellow;
} /* id 선택자 */

.color_green {
  color: green;
} /* class 선택자 */

div {
  color: blue;
} /* tag 선택자 */

* {
  color: darkblue;
} /* 전체 선택자 */

body {
  color: violet;
} /* 상속 */
```

> 하나의 요소를 가르키는 여러 선언들.
> 어떤 것이 선택될까?

#### 우선순위 결정

같은 요소가 여러 선언의 대상이 될 경우, 어떤 선언의 CSS 속성(property)을 우선 적용할지 결정하는 방법

1. 명시도 점수가 높은 선언이 우선(명시도)

1. 점수가 같은 경우, 가장 마지막에 해석(늦게 작성한)되는 선언이 우선(선언 순서)

1. 명시도는 '상속' 규칙보다 우선(중요도)

1. `!important` 가 적용된 선언 방식이 다른 모든 방식보다 우선(중요도)

> 우선순위에는 '중요도, 명시도, 선언 순서'의 개념이 있다.

#### 1. 가장중요( `!important` )

모든 선언을 무시하고 가장 우선

점수 : `∞` pt

#### 2. 인라인 선언 방식(Style Attribute)

인라인 선언(HTML `style` 속성을 사용)

점수 : `1000` pt

#### 3. Id 선택자(ID Selector)

아이디 선택자

점수 : `100` pt

#### 4. 클래스 선택자(Class Selector)

클래스 선택자

점수 : `10` pt

#### 5. 태그 선택자(Tag Selector)

태그 선택자

점수 : `1` pt

#### 6. 전체 선택자(Universal Selector)

전체 선택자

점수 : `0` pt

#### 7. 상속(CSS Inheritance)

상속 받은 속성은 항상 우선하지 않음

점수 : 계산하지 않음

```css
.list li.item {
  color: red;
} /* 21pt 클래스+태그+클래스 */

.list li:hover {
  color: red;
} /* 21pt 클래스+태그+(가상)클래스 */

.box::before {
  content: 'Good ';
  color: red;
} /* 11pt 클래스+(가상 요소)태그 */

#submit span {
  color: red;
} /* 101pt 아이디+태그 */

header .menu li:nth-child(2) {
  color: red;
} /* 22pt 태그+클래스+태그+(가상)클래스 */

h1 {
  color: red;
} /* 1pt 태그 */

:not(.box) {
  color: red;
} /* 10pt 클래스 */

:not(span) {
  color: red;
} /* 1pt 태그 */
```

> :hover 와 같은 '가상 클래스'는 '클래스' 선택자 점수( 10pt )를 가지며 '가상 요소'는 '태그' 선택자 점수( 1pt )를 가진다.
> 부정 선택자 :not() 는 점수를 가지지 않는다.

### Reference

[패스트캠퍼스 - 프론트엔드 개발 강의](https://www.fastcampus.co.kr/dev_online_react/) - HTML & CSS, SASS(SCSS) Part by [ParkYoungWoong](https://github.com/ParkYoungWoong)
