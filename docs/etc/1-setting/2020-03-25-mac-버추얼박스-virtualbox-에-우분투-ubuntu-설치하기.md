---
icon: ./images/2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-icon-0.png
cover: ./images/2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-cover-0.png
slug: 'mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기'
title: '[Mac] 버추얼박스(VirtualBox)에 우분투(Ubuntu) 설치하기'
main_category: ETC
category: 1. Setting
author: younho9
created_time: 2020-03-25
updated_time: 2021-02-15
---

## Intro...

> 대학생으로서 쓰는 리눅스(Linux) 설치기

컴퓨터공학과를 복수전공하면서 운영체제 수업에서 리눅스를 처음 알게 되었다. 오픈소스 운영체제로 서버OS로 사용하기 적합하고, 윈도우보다 안정적이고 자유롭다는 특징 등을 갖고 있다고 한다.

맥도 Unix 기반의 커널로 유사한 명령어로 터미널을 조작할 수 있지만 리눅스의 커널과 완전히 같은 것은 아니다. 따라서 운영체제, 컴퓨터구조, 시스템프로그래밍 등 수업의 실습, 과제 환경을 구축하려면 리눅스를 설치해야 한다.

이런 실습 환경을 구축하는 것이 은근히 까다로웠기 때문에 글로 남겨놓는다.

가상 머신(Virtual Machine)을 활용해 호스트 컴퓨터 위에서 동작하는 게스트 컴퓨터를 만들 수 있는데 Oracle 사의 VirtualBox를 이용해 리눅스를 설치하려고 한다. (VMWare for mac이 유료이므로..)

이 시점에서 최신 버전인 VirtualBox 6.1.4 버전, Ubuntu 18.04 버전 기준으로 설치를 진행하였다.

<br />

## 버추얼박스(VirtualBox) 설치하기

아래의 링크에서 버추얼박스를 무료로 설치할 수 있다.

[Oracle VM VirtualBox](https://www.virtualbox.org/)

아래 사진에서 Download 배너를 클릭하고,

![2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-0](./images/2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-0.png)

VirtualBox 6.1.4 platform packages에서 OS X hosts를 선택한다.

![2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-1](./images/2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-1.png)

설치가 완료된 후 dmg 파일을 실행한다.

![2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-2](./images/2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-2.png)

![2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-3](./images/2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-3.png)

![2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-4](./images/2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-4.png)

시스템 확장 프로그램이 차단됨이라는 알림이 표시되면 보안 환경설정을 변경해야한다.

![2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-5](./images/2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-5.png)

"개발자 'Oracle America, Inc.'의 시스템 소프트웨어가 차단되어 로드할 수 없습니다." 를 허용해 준다.

![2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-6](./images/2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-6.png)

설치가 완료되었다.

![2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-7](./images/2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-7.png)

설치를 완료한 후 VirtualBox를 실행하면 이러한 창이 나타난다.

![2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-8](./images/2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-8.png)

이제 VirtualBox, 가상 머신 위에서 동작할 게스트 OS를 설치해야 한다. 먼저 게스트 OS로 설치할 Ubuntu 18.04의 설치파일을 다운받아야 한다.

<br />

## 우분투(Ubuntu) 18.04 LTS 설치하기

### 우분투(Ubuntu)란

우분투는 데비안 GNU/리눅스를 기반으로 개발된, 사용 편의성에 초점을 맞춘 리눅스 배포판이다. 6개월마다 새로운 판이 공개되며 장기지원판(LTS)은 2년에 한번씩 출시된다. 우분투 역시 자유 소프트웨어로 아래의 링크에서 설치파일을 다운로드할 수 있다.

[The leading operating system for PCs, IoT devices, servers and the cloud | Ubuntu](https://ubuntu.com/)

우분투 홈페이지에서 "다운로드 > 18.04 LTS(Ubuntu Desktop)" 버튼을 클릭하면 Ubuntu Desktop 18.04 LTS를 바로 다운받을 수 있다. 하지만 다운로드 속도가 굉장히 느리기 때문에 이 링크는 추천하지 않는다.

![2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-9](./images/2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-9.png)

![2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-10](./images/2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-10.png)

다운로드를 클릭하고 나면 Ubuntu를 위해 PayPal로 후원할 수도 있다.

![2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-11](./images/2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-11.png)

<br />

### mirror server로 설치하기

위에서 18.04 LTS 버튼이 아니라 Ubuntu Desktop 링크를 클릭한다. 그러면 아래의 창이 나오는데 다운로드 버튼 아래의 글을 읽어보면 alternative downloads라는 링크가 있다.

![2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-12](./images/2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-12.png)

여기에서 Other images and mirrors를 찾고 See all Ubuntu mirrors 링크로 들어가면, 국가별로 있는 미러 서버를 통해 빠르게 설치할 수 있다.

![2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-13](./images/2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-13.png)

한국(Korea)을 찾아보면 Kakao Corp에서 제공하는 미러 서버를 확인할 수있다. 여기서 http로 들어가서

![2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-14](./images/2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-14.png)

여기서 Ubuntu 18.04.4 LTS (Bionic Beaver)를 클릭,

![2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-15](./images/2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-15.png)

Desktop image를 다운받는다.

![2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-16](./images/2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-16.png)

<br />

## 버추얼박스에 우분투 설치하기

이제 우분투 설치파일의 다운로드가 완료되면 버추얼박스에 우분투를 설치하면 된다.

버추얼박스를 열고, 새로 만들기를 클릭한다. 가상 머신의 이름을 설정하고 종류와 버전을 설정한다.

![2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-17](./images/2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-17.png)

메모리 크기를 설정하는데, 홈페이지에서는 4GB를 권장하고 있다.

![2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-18](./images/2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-18.png)

하드디스크를 지정한다.

![2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-19](./images/2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-19.png)

VDI를 선택하면 된다.

![2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-20](./images/2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-20.png)

하드디스크를 동적 할당하거나 고정 크기로 정할 수 있다. 호스트 컴퓨터 하드디스크에 여유가 없다면 동적 할당을 하면 되고, 고정 크기로 하면 조금 더 빠르게 사용할 수 있다.

![2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-21](./images/2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-21.png)

우분투가 설치될 파일 위치를 정할 수 있다. 기본적인 세팅 그대로 하면 된다.

![2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-22](./images/2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-22.png)

이제 설치할 운영체제의 disk 파일을 넣으면 된다. 아까 다운받은 경로에서 우분투 설치파일을 선택한다.

![2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-23](./images/2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-23.png)

![2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-24](./images/2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-24.png)

![2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-25](./images/2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-25.png)

설치 파일에 문제가 없다면, 우분투 설치과정이 정상적으로 시작될 것이다. 설치할 우분투의 언어를 설정할 수 있는데 영어로 설치해도 되고, 한국어도 지원하므로 한국어로 설치해도 된다.

![2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-26](./images/2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-26.png)

![2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-27](./images/2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-27.png)

한국어로 설정했다면 키보드 설정은 한국어 (101/104키 호환)으로 설정한다.

![2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-28](./images/2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-28.png)

업데이트 및 기타 소프트웨어는 다음과 같이 설정한다.

![2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-29](./images/2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-29.png)

설치 형식은 기타로 설정하면 된다.

![2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-30](./images/2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-30.png)

디스크 파티션 작업이다. 여기서는 파티션을 나눌 장치 `/dev/sda` 를 선택하고 새 파티션 테이블을 클릭하는 것으로 파티션을 수동으로 나눌 수 있다.

<br />

![2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-31](./images/2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-31.png)

일반적으로 50GB의 용량을 가진 하드 디스크라면 이렇게 파티션을 나누어줄 수 있다. (참고용도)

| 용도/형식 | 파티션 종류 | 크기                 | 마운트 위치 | 비고                             |
| --------- | ----------- | -------------------- | ----------- | -------------------------------- |
| EXT4      | 주          | 510 MB (약 0.5 GB)   | /boot       | 약 100 MB ~ 500 MB 권장          |
| SWAP      | 주          | 4096 MB (약 4GB)     |             | 기존 RAM 용량의 2배 크기 권장    |
| EXT4      | 논리        | 10078 MB (약 10 GB)  | /home       | 전체 계정 디렉토리에 할당할 크기 |
| EXT4      | 주          | 38998 MB (남은 크기) | /           | 남은 용량을 할당                 |

파티션 나누기를 완료하고 지금 설치를 클릭한다.

![2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-32](./images/2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-32.png)

계속하기

![2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-33](./images/2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-33.png)

<br />

### 우분투 해상도 문제(버튼 클릭 불가 현상)

> ❗️설치 과정 중에서 화면 해상도의 문제로 특정 버튼이 보이지 않는 경우가 발생한다면,

이럴 때에는 먼저 우분투를 종료한 후에 버추얼박스의 디스플레이 설정에서 그래픽컨트롤러를 VBoxSVGA로 변경한다.

![2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-34](./images/2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-34.png)

그리고 우분투를 다시 실행하고, VM의 오른쪽 아래에서 디스플레이의 해상도 조절을 선택해 Resize 하면서 버튼이 보일 때까지 변경해보면서 진행한다.

![2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-35](./images/2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-35.png)

![2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-36](./images/2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-36.png)

<br />

### 계정 설정

파티션 설정을 마쳤다면 시간대 설정이 나타난다. 거주지에 맞춰 선택한다.

![2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-37](./images/2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-37.png)

운영체제와 사용자 정보를 편집한다.

- 이름 : username. 컴퓨터에 표시되는 이름.

- 컴퓨터 이름 : 다른 컴퓨터에서 표시될 컴퓨터의 이름.

보안을 위해 암호를 잘 설정하도록 한다.

![2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-38](./images/2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-38.png)

이제 계속하기를 클릭하면 우분투 설치가 진행된다.

![2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-39](./images/2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-39.png)

모든 과정이 완료되면 시스템을 다시 시작해야 한다.

![2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-40](./images/2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-40.png)

아래의 화면이 나온다면 엔터를 누르면 재시작 된다.

![2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-41](./images/2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-41.png)

재부팅되고 나면 이러한 로그인 화면이 나타난다.

![2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-42](./images/2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-42.png)

이제 모든 우분투 설치 과정이 완료되었다.

![2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-43](./images/2020-03-25-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기-image-43.png)
