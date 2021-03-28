---
icon: ./images/2021-03-27-python-pip-패키지-관리-icon-0.png
slug: 'python-pip-패키지-관리'
title: 'Python PIP 패키지 관리'
main_category: ETC
category: 3. Python
created_time: 2021-03-27
---

## requirements.txt에 명시된 의존성 설치

```bash
pip install -r requirements.txt
```

## 현재 pip에 설치된 모듈 requirements.txt에 명시하기

```bash
pip freeze > requirements.txt
```

## 현재 pip에 설치된 리스트 보기

```bash
pip list
```

## pip에 설치된 모듈 모두 삭제하기

```bash
pip freeze | xargs pip uninstall -y
```

## requirements.txt에 GitHub 소스로 명시하기

[How to state in requirements.txt a direct github source](https://stackoverflow.com/a/35998253/12983614)
