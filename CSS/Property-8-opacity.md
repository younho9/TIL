# CSS 속성 8. `opacity`

## `opacity`

요소의 투명도를 지정

### 속성 값

| 값   | 의미                            | 기본값 |
| ---- | ------------------------------- | ------ |
| 숫자 | `0` 부터 `1` 사이의 소숫점 숫자 | `1`    |

### 사용법

```css
opacity: 투명도;
```

```css
.harf {
  opacity: 0.5;  /* 50% 투명도, 반투명 */
}
.transparent {
  opacity: 0;    /* 0% 투명도, 투명 */
}
.box {
  opacity: .75;  /* 75% 투명도, 반투명 (0 생략 가능) */
}
```

### 예제

```html
<div class="parent">
  <div class="child">123</div>
</div>
```

```css
.parent {
  width: 300px;
  height: 250px;
  background: cyan;
}
.parent .child {
  width: 150px;
  height: 100px;
  background: tomato;
  font-size: 50px;
  opacity: .5;
}
```

> `display: none;` : 요소가 완벽히 존재하지 않는 것처럼 만들어준다.
>
> `opacity: 0;` : 요소가 존재하지만 보이지 않게만 만들어준다. 