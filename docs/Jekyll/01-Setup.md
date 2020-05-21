# [Step by Step Tutorial] 1. Setup

[Setup](https://jekyllrb.com/docs/step-by-step/01-setup/)

이 튜토리얼의 목적은 프론트엔드 웹 개발 경험이 없어도 기본 gem 기반 테마에 의존하지 않고 처음부터 Jekyll 사이트를 구축하도록 하는 것이다.

## 설치

Jekyll은 Ruby 프로그램이므로 먼저 컴퓨터에 Ruby를 설치해야한다.

[Installation](https://jekyllrb.com/docs/installation/)

Ruby 설정을 사용하면 터미널에서 다음을 실행하여 Jekyll을 설치할 수 있다.

```bash
gem install jekyll bundler
```

먼저 Jekyll 튜토리얼을 진행할 루트 디렉토리를 하나 만든다

```bash
mkdir first-jekyll-project
cd first-jekyll-project
```

프로젝트의 dependencies list를 만들기 위해 새로 `Gemfile` 을 만든다.

```bash
bundle init
```

`Gemfile` 에 `jekyll` 을 dependency로 추가한다 (vi, vim을 이용)

    gem "jekyll"

`bundle` 을 실행한다

```bash
bundle
```

`Gemfile.lock` 파일이 생성된 것을 확인할 수 있다.

![terminal output : ls](images/01-Setup/terminal-output.png)

## 사이트 만들기

`index.html` 을 생성하고 아래를 입력한다.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Home</title>
  </head>
  <body>
    <h1>Hello World!</h1>
  </body>
</html>
```

## 빌드

- `jekyll build` - jekyll이 빌드하여 static한 site를 `_site` 디렉토리에 내보낸다.
- `jekyll serve` - 빌드를 하고, 로컬 웹 서버를 실행한다. 브라우저에서 `[http://localhost:4000/](http://127.0.0.1:4000/)` 로 접속하면 결과를 볼 수 있다.
