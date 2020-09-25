# CSS Reset

> ❗️ 해당 글은 [패스트캠퍼스 - 프론트엔드 개발 강의](https://www.fastcampus.co.kr/dev_online_react/)에서 HTML & CSS, SASS(SCSS) Part의 [박영웅 강사님](https://github.com/ParkYoungWoong)의 강의자료를 정리한 것입니다.

브라우저마다 기본적으로 가지고 있는 스타일이 있기 때문에 브라우저가 갖고 있는 CSS 스타일을 초기화할 필요가 있다.

일일이 Reset을 해주는 것이 번거롭기 때문에 `reset.css` 라는 라이브러리를 사용할 수 있다.

[jsDelivr - A free, fast, and reliable Open Source CDN for npm and GitHub](https://www.jsdelivr.com/package/npm/reset-css)

```html
<link rel="stylesheet" href="<https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css>" />
```

> 주의사항 : 이 스타일시트가 스타일시트 중에 가장 먼저 와야한다. 초기화가 먼저 진행된 이후에 직접 만든 스타일시트가 적용되어야 하기 때문이다.

이렇게 모든 브라우저가 가진 기본적인 스타일을 없애고 우리가 만든 스타일시트를 모든 브라우저에서 동일하게 볼 수 있도록 만들 수 있다.

### Reference

[패스트캠퍼스 - 프론트엔드 개발 강의](https://www.fastcampus.co.kr/dev_online_react/) - HTML & CSS, SASS(SCSS) Part by [ParkYoungWoong](https://github.com/ParkYoungWoong)
