# Lecture1. Introduction to iOS 11, Xcode 9 and Swift 4

## what's in iOS

### Core OS 

OSX Kernel, Power Management, Mach 3.0, Keychain Access, BSD Certificates, Sockets File System, Security, Bonjour

### Core Services

Collections, Core Location, Address Book, Net Services, Networking, Threading, File Access, Preferences, SQLite, URL Utilities

### Media

Core Audio, JPEG, PNG, TIFF, OpenAL, PDF, Audio Mixing, Quartz, Audio Recording, Core Animation, Video Playback, OpenGL ES

### Cocoa Touch

Multi-Touch, Alerts, Core Motion, Web View, View Hierarchy, Map Kit, Localization, Image Picker, Controls, Camera

--> Cocoa Touch와 Core Services에 집중하여 학습할 예정

## Platform Components

Tools : Xcode 9, Instruments

Language(s) : Swift

Frameworks : Foundation, UIKit

Design Strategy : MVC (Model, View, Controller) 

## Xcode

1. Create a new Xcode project
2. Single View App
3. Product Name : Concentration

왼쪽 : Navigater

오른쪽 : Utility

아랫쪽 : Console

4. Run > Simulation

5. AppDelegate.swift, Assets.xcassets, LaunchScreen.storyboard > Supporting Files

Main.storyboard : UI, 그래픽으로 만듬

ViewController.swift

Connection

Action, name

Type : UIButton 버튼이 메소드를 보내주는 것

Event

Arguments 

Swift 문법 

func (keyword) touchCard (method name) (arguments )

error

- 빨간 에러 앱을 컴파일하고 실행 불가
- 노란색 에러 컴파일과 실행 가능, 경고 (그것도 고쳐야 함)

Swiftd에선 인스턴스 변수를 속성(Property)이라고 한다

속성엔 초기값이 있어야 한다.

인스턴스 변수를 초기화 하는 2가지 방법

1. 이니셜라이저 : 메소드 

2. = 0

Swift의 타입 : 강타입

어떤 타입을 사용하는지 아주 분명히 해야함

하지만 Swift는 강한 타입 추론을 가지는 언어

가능하면 타입을 추론함 : Int가 필요 없음

Action : 메소드를 만듬

Outlet : 인스턴스 변수를 만듬

! : init이 필요 없음

