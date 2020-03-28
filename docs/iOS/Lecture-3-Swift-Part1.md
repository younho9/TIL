# Lecture 3. Swift - Part. 1

## Review

### Brief Review of Week 1

- Target/Action and Outlets and Outlet Collections
- Methods and Properties (aka instance variables)
- Property Observer (didset)
- `Array<Element>`
- MVC
- Value types (struct) versus reference types (class)
- initializers
- Type (static) methods
- lazy properties
- for in loops
- Dictionary<key, Value>
- Type conversion (e.g. UInt32(anInt))
- And, of course, Optionals, which we're going to revisit in more detail a bit later in this lecture

## Range

> : 부동소수점에 대해 for loop을 돌리는 방법.

```c
for (i=0.5; i<=15.25; i+=0.3) // c에서 가능하지만 swift에서는 불가능
```

부동소수점(Floating point numbers)은 셀 수 있는 범위(CountableRange)가 아니다. -> `stride` 를 사용해야 함

### stride

>  : 셀 수 있는 범위를 생성해 주는 전역 함수

```swift
for i in stride(from: 0.5, through: 15.25, by: 0.3) {
	// ...
}
// through: 닫힌 범위(ClosedCountableRange)
// to: 열린 범위 (OpenedCountableRange)
```

※ `CountableRange` 는 `generic type` 이다. (`Int` 일 필요가 없다) 

## Tuple

> : 메소드나 변수가 없는 소형 구조체.  

```swift
let x: (String, Int, Double) = ("hello", 5, 0.85) // the type of x is a tuple
let (word, number, value) = x // this names the tuple elements when accessing the tuple
print(word) // hello
print(number) // 5
print(value) // 0.85

// 각각의 값에 이름을 정할 수 있다
let x: (w: String, i: Int, v: Double) = ("hello", 5, 0.85)
print(x.w) // hello
print(x.i) // 5
print(x.v) // 0.85
let (wrd, num, val) = x // tuple의 요소에 접근할 이름을 다시 선언하는 것도 가능하다
```

### Tuple의 장점

- 여러 값을 가볍게 묶을 수 있다
- return values
  - `tuple` 은 함수나 메소드에서 여러 `return` 값을 받기 위해 사용할 수 있다.

```swift
func getSize() -> (weight: Double, height: Double) { return (250, 80) }

let x = getSize()
print("weight is \(x.weight)") // weight is 250
print("height is \(x.height)") // height is 80
```

## Computed Properties

>  : 메모리에 저장되지 않고 호출할 때마다 값을 가지고, 새로운 값이 설정 될 때마다 특정 역할을 수행하는 프로퍼티

```swift
var foo: Double // 일반적으로 사용하는 저장 프로퍼티

// Computed 프로퍼티
var bar: Double {
	get {
		// bar를 요청할 때마다 실행되는 코드
	}
	set(newValue) {
		// bar에 값을 할당할 때마다 실행되는 코드
	}
}
```

```swift
var bar: Double {
	// bar를 요청할 때마다 실행되는 코드
}
```

> `get` 은 꼭 필요하지만 `set` 은 꼭 필요하지 않다. 
>
> `get` 만 사용하면 "read only" 프로퍼티가 된다. 
>
> 읽기 전용 프로퍼티로 사용할 때 `get` 은 굳이 쓰지 않아도 된다. 

```swift
set {
	// newValue라는 이름으로 새롭게 설정한 값을 지역 변수를 사용할 수 있다.
}
...
set(index) {
	// index라는 이름으로 새롭게 설정한 값을 지역 변수를 사용할 수 있다.
}
```

> `set(newValue)` 에서 `newValue` 는 `set` 내부에서 지역 변수가 되는데, `newValue` 가 `default` 값이다.
>
> 아무것도 적지 않으면 `newValue` 로 사용할 수 있고, 다른 이름을 사용하고 싶으면 다른 이름을 넣으면 된다.
>
> 그러나 많은 경우 `newValue` 를 사용한다. 

## Access Control

> : 대규모의 프로젝트를 진행하는 경우, API에 접근하는 것을 제어해야할 요구가 발생

### Keywords

- `internal` : `default` 로 정해져 있으며, 입력하지 않는다면 기본적으로 `internal` 로 인식된다. 앱 내 또는 프레임워크 내의 모든 요소가 접근 가능하도록 한다.
- `private` : 객체 내에서만 접근 가능하다. 다른 객체로 불러올 수 없다.
- `private(set)` : 호출은 할 수 있지만 값을 설정하지 못하도록 할때 사용한다.
- `fileprivate` : Source file 내에서 접근 가능하도록 할때 사용한다.
- `public` : (for frameworks only) 프레임워크 밖에서도 객체에 의해 사용될 수 있다.
- `open` : (for frameworks only) 프레임워크 밖에서도 객체에 접근 가능하며, 상속을 받아서 `override` 도 가능 하도록 한다. 완전히 열려 있음.

> 기본적으로 모든 요소에 `private` 를 사용하는 것이 좋은 전략일 수 있다.
>
> 다른 사용자에게 공유할 필요성이 생길 때 `private` 을 해제하라.

### Assertion (단언문)

> : 어떤 것이 참임을 단언하는 함수. 접근제어에 해당하지 않지만 API를 보호하는 수단의 일종이다. 협업을 하는 과정에서 내부 구조를 모르는 상태에서 존재하지 않는 값에 접근하게 되면 오류를 발생시키게 될 것이고, 어떠한 이유인지 인지하지 못하는 경우가 발생한다. 단언문을 사용하면 단언이 실패할 때 콘솔에 에러를 출력해서 디버그하기 쉽도록 만들어 준다.

```swift
assert(cards.indices.contains(index), "Concentration.chooseCard(at: \(index)): chosen index not in the cards")
...
assert(numberOfPairsOfCards > 0, "Concentration.init(\(numberOfPairsOfCards)): you must have at least one pair of cards")
```

## Extensions

> : 현재 존재하는 데이터 구조에 확장을 할 수 있다. `class` / `struct` / `enum` 등에 `method` 와 `properties` 를 추가할 수 있다. 하나의 제한 사항은 저장할 수 있는 공간을 할당할 수 없다는 것이다. 즉 `var` , `let` 과 같이 저장 프로퍼티를 선언해서 사용할 수 없다. (computed properties만 사용 가능) 확장을 할 때, 연동성이 적은 코드를 작성하는 것은 지양해야 한다.

```swift
extension Int {
  var arc4random: Int {
    if self > 0 {
      return Int(arc4random_uniform(UInt32(self)))
    } else if self < 0 {
      return -Int(arc4random_uniform(UInt32(abs(self))))
    } else {
      return 0
    }
  }
}
```

> `Int` 형 변수에 난수를 생성해 주는 `arc4random` 이라는 `method` 를 추가했다.

## enum

> : 열거형 데이터 타입. 값 타입으로서 전달할 때 복제된다. 제한적인 선택지를 제공하고 싶을 때 사용한다. `Swift` 에서의 `enum` 은 각각의 케이스들이 연동된 데이터를 가질 수 있다.

### 연동된 데이터 (Associated Data)

```swift
enum FastFoodMenuItem {
  case hamburger(numberOfPatties: Int)
  case fries(size: FryOrderSize)
  case drink(String, ounces: Int)
  case cookie
}

enum FryOrderSize {
  case large
  case small
}
```

> `drink` 의 경우와 같이 `enum` 의 `case` 들은 두 가지 연동된 데이터를 가질 수 있다. (또한 "unnamed"일 수 있다.)

### enum 값 할당

```swift
let menuItem: FastFoodMenuItem = FastFoodMenuItem.hamburger(numberOfPatties: 2) 
var otherItem: FastFoodMenuItem = FastFoodMenuItem.cookie
```

> 연동된 데이터가 있다면 제공해 주어야 한다

```swift
let menuItem = FastFoodMenuItem.hamburger(patties: 2)
var otherItem: FastFoodMenuItem = .cookie
var yetAnotherItem = .cookie // Swift can't figure this out
```

> `Swift` 에서 타입 추론이 가능하지만 추론할 수 있도록 어떤 열거형인지 알려주어야 한다.
>
> (`cookie` 가 포함된 다른 `enum` 이 있을 수 있다.)

### enum의 상태 확인

> : `enum` 의 상태는 `switch` 를 사용해서 확인한다.

```swift
var menuItem = FastFoodMenuItem.hamburger(patties: 2)

switch menuItem {
  case FastFoodMenuItem.hamburger: print("burger")
  case FastFoodMenuItem.fries: print("fries")
  case FastFoodMenuItem.drink: print("drink")
  case FastFoodMenuItem.cookie: print("cookie")
}
```

> `switch` 문의 경우 연동된 데이터는 신경쓰지 않아도 된다.
>
> `enum` 이 비교값인 경우 `switch` 문에서 `default` 구문은 작성하지 않아도 된다.

```swift
switch menuItem {
  case .hamburger: break
  case .fries: print("fries")
  case .drink: print("drink")
  case .cookie: print("cookie")
  default: print("other")
}
```

> `switch` 문에서는 모든 경우를 확인해야 하지만, `Swift` 의 타입 추론을 사용할 수 있다.
>
> 아무 작업도 수행하고 싶지 않은 케이스에는 `break` 를 사용할 수 있다.
>
> 그 외의 모든 경우에 해당하는 케이스를 다루기 위해 `default` 를 사용할 수 있다.

```swift
var menuItem = FastFoodMenuItem.drink("Coke", ounces: 32)
switch menuItem {
  case .hamburger(let pattyCount): print("a burger with \(pattyCount) patties!") 
  case .fries(let size): print("a \(size) order of fries!")
  case .drink(let brand, let ounces): print("a \(ounces)oz \(brand)")
  case .cookie: print("a cookie!")
}
```

> 각 케이스에 `let` `지역 변수 이름` 을 사용하면 연동된 데이터를 얻을 수 있고, 지역 변수 이름은 `enum` 을 선언할 때의 이름과 같지 않아도 된다. (`tuple` 과 매우 흡사)

### enum 내부의 Methods

> : `enum` 은 `methods` 를 가질 수 있지만 저장 프로퍼티는 가질 수 없다.

```swift
enum FastFoodMenuItem {
  case hamburger(numberOfPatties: Int)
  case fries(size: FryOrderSize)
  case drink(String, ounces: Int)
  case cookie

  func isIncludedSpecialOrder(number: Int) -> Bool {
    switch self {
      case .hamburger(let pattyCount): return pattyCount == number
      case .fries, .cookie: return true // a drink and cookie in every special order
      case .drink(_, let ounces): return ounces == 16 // & 16oz drink of any kind
    }
  }
  var calories: Int { 
    // calculate and return caloric value here 
  }
}
```

> `enum` 내부의 함수에서 `switch self` 를 사용해서 자신의 연동된 데이터를 사용할 수 있다.
>
> `.fires, .cookie ` 처럼 하나의 경우로 묶을 수 있다.
>
> `.drink(_, let ounces)` 의 경우처럼 어느 것이든 상관 없을 때 사용하는 기호가 `_` 이다.
>
> 프로퍼티는 Computed Properties 만 사용할 수 있다.

### enum내의 self를 수정하기

```swift
enum FastFoodMenuItem {
  ...
  mutating func switchToBeingACookie() {
    self = .cookie // this works even if self is a .hamburger or ...
  }
}
```

> 변수 내에 있을 때에는 `self` 를 수정하는 것이 가능하다.
>
> `mutating` 이라는 keyword를 꼭 사용해야 한다. (`enum` 이 값 타입이기 때문이다.)  

## Optionals

> : `Optional` 은 배열처럼 어떠한 값이든 올 수 있는 `generic` 이며, 값을 가지거나 가지지 않는 두 가지 경우가 있는  `enum` 이다.

```swift
enum Optional<T> { // a generic type, like Array<Element> or Dictionary<key,Value>
	case none
	case some(<T>) // the some case has associated data of type T
}
```

옵셔널을 `enum` 처럼 사용할 경우에 코드가 길어지기 때문에 `?, !` 등의 특수문자를 사용해 옵셔널의 가능한 경우에 대해  `switch` 를 사용하지 않아도 된다. 

### 선언과 할당

```swift
var hello: String?           // var hello: Optional<String> = .none
var hello: String? = "hello" // var hello: Optional<String> = .some("hello")
var hello: String? = nil     // var hello: Optional<String> = .none
```

> `Optional` 의 초기값은 `nil` 이다.

### Unwrapping

- **Force Unwrapping**

```swift
let hello: String? = ...
print(hello!)

// 아래와 같은 의미
switch hello {
	case .none: // raise an exception (crash)
	case .some(let data): print(data)
}
```

- **Optional Binding**

```swift
if let greeting = hello {
	print(greeting)
} else {
	// do something else
}

// 아래와 같은 의미
switch hello {
	case .some(let data): print(data)
	case .none: { 
    // do something else 
  }
}
```

- **Implicitly Unwrapped Optional**

```swift
var hello: String! 
print(hello)

// 아래와 같은 의미
var hello: Optional<String> = .none

switch hello {
	case .none: // raise an exception (crash)
	case .some(let data): print(data)
}
```

- **Nil-coalescing operator**

> : `nil` 병합 연산자. 옵셔널을 기본값으로 만들어주기 위한 것.

```swift
let x: String? = ...
let y = x ?? "foo"

// 아래와 같은 의미
switch x {
	case .none: y = "foo"
	case .some(let data): y = data
}
```

- **Optional chaining**

> : 하나라도  `nil` 인 경우 `nil` 을 할당함

```swift
let x: String? = ...
let y = x?.foo()?.bar?.z

// 아래와 같은 의미
switch x {
  case .none: y = nil
  case .some(let data1):
  switch data1.foo() {
    case .none: y = nil
    case .some(let data2):
    switch data2.bar {
      case .none: y = nil
      case .some(let data3): y = data3.z
    }
  }
}
```

## Data Structures

> : `Swift` 의 4가지 주요 자료구조 개념

### class

> : 객체지향 디자인을 지원하고 기능과 데이터 모두를 단일 상속할 수 있으며 레퍼런스 타입으로 힙에 저장된다. `Swift` 에서는 힙이 자동적으로 clean 상태가 된다. (via reference counting, not garbage collection)

- **Automatic Reference Counting**
  - 힙 내의 참조 타입에 포인터를 만들 때마다 `Swift` 는 어딘가에 있는 카운터에 1을 더한다. 매번 그 포인터가 가리키는 것이 없어지거나 더 이상 가리키지 않을 때 마치 옵셔널처럼 `nil` 로 설정되고 그 카운터가 1 줄어들게 된다. 카운터가 0이 되면 즉시 힙에서 꺼낸다. 가리키는 포인터가 없어질 때 바로 사라진다. 
- **Influencing ARC**
  - 다음의 3가지 키워드를 레퍼런스 타입 변수 앞에 선언함으로 ARC에 영향을 줄 수 있다.
    - `strong` : `default` 레퍼런스 카운팅. 가리키고 있는 한 힙 내에 그것을 둔다.
    - `weak` : 힙 내의 어떤 것을 가리키고 있지만 다른 사람이 흥미를 가져야만 흥미를 가지게 된다. 다시 말해서 다른 사용자가 `strong` 포인터를 가지면 그것을 힙 내에 유지하고 아무도 흥미가 없게 되면 다시말해 스트롱 포인터가 없으면 `nil` 을 받아서 그것을 힙에서 제거한다. 나 때문에 어떤 것을 힙에 두지 않는 것을 의미한다.  모든 `strong` 이 없어 졌을 때 `nil` 로 설정된다. `weak` 은 옵셔널 포인터로 참조 타입을 가리키는 것만 가능하다. `delegation` 에서 `weak` 을 사용한다.
    - `unowned`  : 참조하지 않는다는 의미. 만약 힙 내부의 어떤 것을 가리키고 있을 때 `strong` 포인터로 인식하지 않는 것이고 힙에서 사라졌을 때 접근하지 않는 것이다. 매우 위험. 자동 참조 횟수 계산 시스템을 뛰어넘으려고 하는 것. 메모리 사이클을 피하기 위해서 사용된다. `closure` 과 함께 사용한다.

### struct

> : 값 타입. 힙 안에 존재하는 것이 아니라 copy on write을 사용하는 효율적인 자료구조이다. 데이터의 상속이 없다.

### enum

> : 값 타입. 분리된 값. 기능 상속을 가질 수 있다.

### protocol

> : 프로토콜은 작업을 수행하기 위해 타입에서 필요로 하는 메소드, 프로퍼티, 그리고 다른 요구 사항을 정의하는 계약의 역할. 다음 수업에서 다룸 