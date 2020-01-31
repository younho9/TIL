# 선택자(Selector) - 1편

> ❗️ 해당 글은 [패스트캠퍼스 - 프론트엔드 개발 강의](https://www.fastcampus.co.kr/dev_online_react/)에서 HTML & CSS, SASS(SCSS) Part의 [박영웅 강사님](https://github.com/ParkYoungWoong)의 강의자료를 정리한 것입니다. 

## 기본 선택자(Basic Selectors)

### 전체 선택자(Universal Selector)

모든 요소를 선택

```css
* {
  color: red;
}
```

```html
<div>   <!--선택-->
  <ul>    <!--선택-->
    <li>사과</li>   <!--선택-->
    <li>딸기</li>   <!--선택-->
    <li>오렌지</li>   <!--선택-->
  </ul>
  <div>당근</div> <!--선택-->
  <p>토마토</p>   <!--선택-->
  <span>오렌지</span><!--선택-->
</div>
```

### 태그 선택자(Type Selector)

같은 태그 이름을 가진 모든 요소를 선택

```css
li {
  color: red;
}
```

```html
<div>
  <ul>
    <li>사과</li>   <!--선택-->
    <li>딸기</li>   <!--선택-->
    <li>오렌지</li>   <!--선택-->
  </ul>
  <div>당근</div>
  <p>토마토</p>
  <span>오렌지</span>
</div>
```

### 클래스 선택자(Class Selector)

같은 `class` 속성의 값을 가진 모든 요소 선택

```css
.orange {
  color: red;
}
```

```html
<div>
  <ul>
    <li>사과</li>
    <li>딸기</li>
    <li class="orange">오렌지</li>   <!--선택-->
  </ul>
  <div>당근</div>
  <p>토마토</p>
  <span class="orange">오렌지</span>   <!--선택-->
</div>
```

### 아이디 선택자(ID Selector) - 같은 `id` 속성 값을 가진 요소 선택

```css
#orange {
  color: red;
}

```

```html
<div>
	<ul>
    <li>사과</li>
    <li>딸기</li>
    <li id="orange" class="orange">오렌지</li>   <!--선택-->
  </ul>
  <div>당근</div>
  <p>토마토</p>
  <span class="orange">오렌지</span>
</div>
```

> 한 `id` 선택자 값은 HTML 문서에 한번만 사용되어야 한다.

## 복합 선택자(Combinators)

### 일치 선택자(Basic Combinator)

두 선택자 조건을 동시에 만족하는 요소 선택

```css
span.orange {
 color: red;
}
```

```html
<div>
  <ul>
    <li>사과</li>
    <li>딸기</li>
    <li id="orange" class="orange">오렌지</li>
  </ul>
  <div>당근</div>
  <p>토마토</p>
  <span class="orange">오렌지</span>   <!--선택-->
</div>
```

### 자식 선택자(Child Combinator)

요소의 **자식** 중에서 선택

```css
ul > .orange {
  color: red;
}
```

```html
<div>
  <ul>
    <li>사과</li>
    <li>딸기</li>
    <li id="orange" class="orange">오렌지</li>   <!--선택-->
  </ul>
  <div>당근</div>
  <p>토마토</p>
  <span class="orange">오렌지</span>
</div>
```

### 후손(하위) 선택자(Descendant Combinator)

요소의 **후손(하위)인** 요소 중에서 선택

```css
div .orange {
  color: red;
}
```

```html
<div>
  <ul>
    <li>사과</li>
    <li>딸기</li>
    <li id="orange" class="orange">오렌지</li>   <!--선택-->
  </ul>
  <div>당근</div>
  <p>토마토</p>
  <span class="orange">오렌지</span>   <!--선택-->
</div>
```

### 인접 형제 선택자(Adjacent Sibling Combinator)

요소의 다음(next) 형제 요소 하나를 선택

```css
/* .orange의 다음에 있는 li 하나만 선택 */
.orange + li {
  color: red;
}
```

```html
<ul>
  <li>딸기</li>
  <li>수박</li>
  <li class="orange">오렌지</li>
  <li>망고</li>   <!--선택-->
  <li>사과</li>
</ul>
```

### 일반 형제 선택자(General Sibling Combinator)

요소의 다음(next)의 모든 형제 요소 중 선택

```css
/* .orange의 */
.orange ~ li {
  color: red;
}
```

```html
<ul>
  <li>딸기</li>
  <li>수박</li>
  <li class="orange">오렌지</li>
  <li>망고</li>   <!--선택-->
  <li>사과</li>   <!--선택-->
</ul>
```

> CSS에서의 자식(child), 후손(descendant), 형제(sibling) 정의
>
> 1. 자식(child) : 요소의 1단계(1-depth) 하위 요소
> 2. 후손(descendant) : 요소 내의 모든 하위 요소
> 3. 형제(sibling) : 요소와 같은 단계의 요소

## Reference

[패스트캠퍼스 - 프론트엔드 개발 강의](https://www.fastcampus.co.kr/dev_online_react/) - HTML & CSS, SASS(SCSS) Part by [ParkYoungWoong](https://github.com/ParkYoungWoong)
