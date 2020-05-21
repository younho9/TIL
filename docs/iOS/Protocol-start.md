# 1장. 프로토콜 시작

**프로토콜지향 프로그래밍**은 단지 프로토콜뿐만이 아닌 애플리케이션을 개발하는 새로운 방법, 설계에 대해 생각하는 새로운 방법이다.

### 1장에서 다루는 내용

- 프로토콜을 사용해 **프로퍼티**와 **기능 요구 사항**을 정의하는 방법
- 프로토콜 상속과 **컴포지션**을 사용하는 방법
- 프로토콜을 타입으로 사용하는 방법
- **다형성**
- 프로토콜을 사용해 **연관 타입**을 사용하는 방법
- 프로토콜을 사용해 **델리게이션 패턴**을 구현하는 방법
- 프로토콜을 사용해 **타입 요구 사항**을 설계하는 방법

프로토콜지향 설계는 클래스 계층 구조로 시작하는 대신 프로토콜로 시작해야 한다.

스위프트에서 프로토콜은 객체지향 언어의 **인터페이스**와 유사하다. 프로토콜은 작업을 수행하기 위해 타입에서 필요로 하는 메소드, 프로퍼티, 그리고 다른 요구 사항을 정의하는 계약의 역할을 한다.

## 프로토콜 문법

프로토콜을 정의하는 방법과 프로토콜에 요구 사항을 추가하는 방법을 살펴봄.

### 프로토콜 정의

프로토콜을 정의할 때 사용하는 문법은 클래스나 구조체 또는 열거형을 정의할 때 사용하는 문법과 매우 유사하다.

```swift
protocol MyProtocol {
	// 프로토콜 정의는 여기에 위치한다.
}
```

프로토콜을 정의하기 위해서는 `protocol` 키워드를 사용하며, 그 다음으로 프로토콜 이름이 위치한다. 그런 다음 중괄호 사이에 프로토콜이 정의한 요구 사항을 입력한다.

커스텀 타입은 타입 이름 뒤에 콜론으로 구분해 프로토콜의 이름을 위치시킴으로써 해당 타입이 따르는 특정 프로토콜을 나타낼 수 있다.

```swift
struct MyStruct: MyProtocol {
	// 구조체 구현체는 여기에 위치한다.
}
```

또한 타입은 다중 프로토콜을 따를 수도 있다. 타입이 따르는 다중 프로토콜은 콜론으로 구분해 열거한다

```swift
struct MyStruct: MyProtocol, AnotherProtocol, ThirdProtocol {
	// 구조체 구현체는 여기에 위치한다.
}
```

타입이 다중 프로토콜을 따르게 하는 것은 프로토콜지향 프로그래밍에서 매우 중요한 개념이며, 1장 후반부 및 이 책 전반에 걸쳐 살펴본다. 이 개념은 **프로토콜 컴포지션**으로 알려져 있다.

### 프로퍼티 요구 사항

프로토콜은 프로토콜을 따르는 타입에 명시된 이름과 타입을 갖는 특정 프로퍼티를 제공할 것을 요구할 수 있다.

프로토콜에서 프로퍼티를 정의할 때에는 `get` 과 `set` 키워드를 사용해 프로퍼티가 읽기 전용 프로퍼티인지 읽기 쓰기 프로퍼티인지를 반드시 명시해주어야 한다. 또한 프로토콜에서는 **타입 추론**을 사용할 수 없으므로 프로퍼티의 타입 역시 명시해야만 한다.

```swift
protocol FullName {
	var firstName: String {get set}
  var lastName: String {get set}
}
```

이 예에서는 `firstName` 과 `lastName` 이라는 이름을 갖는 두 개의 읽기 쓰기 프로퍼티를 정의했다. 이 프로토콜을 따르는 모든 타입은 이 두 프로퍼티를 반드시 구현해야 한다. 읽기 전용 프로퍼티를 정의하고자 하는 경우에는 다음 코드에서 보이는 바와 같이 `get` 키워드만을 사용해 정의하면 된다.

```swift
var readOnly: String {get}
```

다음 예에서 보여주는 바와 같이 `static` 키워드를 사용하면 정적 프로퍼티를 정의하는 것도 가능하다.

```swift
static var typeProperty: String {get}
```

### 메소드 요구 사항

프로토콜은 프로토콜을 따르는 타입에 구체적인 메소드를 제공할 것을 요구할 수 있다.

이러한 메소드는 프로토콜에 정의되며, 이러한 메소드는 중괄호와 메소드 몸체가 없다는 점을 제외하고는 클래스와 구조체에서 정의했던 것과 똑같다. `static` 키워드를 사용함으로써 이러한 메소드가 인스턴스 메소드나 타입 메소드가 되도록 정의할 수 있다. 프로토콜에 메소드를 정의할 때는 메소드 매개변수에 기본 값을 추가하는 것은 허용되지 않는다.

FullName 프로토콜에 `getFullName()` 이라는 이름의 메소드를 추가해보자.

```swift
protocol FullName {
	var firstName: String {get set}
	var lastName: String {get set}
	func getFullName() -> String
}
```

이제 `fullName` 프로토콜은 `getFullName()` 이라는 이름을 갖는 한 개의 메소드 및 `firstName` 과 `lastName` 이라는 이름을 갖는 두 개의 읽기 쓰기 프로퍼티를 요구한다.

구조체와 같은 값 타입의 경우 메소드가 메소드 자신이 속해 있는 인스턴스를 변경하고자 의도하는 경우에는 반드시 메소드 정의부 앞부분에 `mutating` 키워드를 추가해야만 한다. 이 키워드는 메소드가 자신이 속해 있는 인스턴스와 인스턴스에 있는 어떠한 프로퍼티도 변경할 수 있음을 나타낸다. 다음 예에서는 메소드 정의와 함께 `mutating` 키워드를 사용하는 방법을 보여준다.

```swift
mutating func changeName()
```

메소드가 내용을 변경할 수 있게 메소드 요구 사항을 정의한 경우 참조(클래스) 타입에 해당 프로토콜을 적용할 때에는 메소드에 `mutating` 키워드를 입력할 필요가 없다. `mutating` 키워드는 오직 값(구조체 또는 열거형) 타입에만 사용된다.

### 선택 가능한 요구 사항

때로는 프로토콜이 선택 가능한 요구 사항을 정의하기를 바라는 경우가 있다. 선택 가능한 요구 사항은 메소드나 프로퍼티의 구현을 요구하지 않는다. 선택 가능한 요구 사항을 사용하기 위해서는 프로토콜을 표시할 때 `@objcc` 속성이 프로토콜 앞부분에 위치해야 한다.

> 오직 클래스만이 `@objc` 속성을 사용하는 프로토콜을 채용할 수 있다.
>
> 구조체와 열거형은 이러한 프로토콜을 채용할 수 없다.

`optional` 키워드를 사용하면 프로퍼티나 메소드가 선택 가능하다는 것으로 표시할 수 있다.

```swift
@objc protocol Phone {
	var phoneNumber: String {get set}
	@objc optional var emailAddress: String {get set}
	func dialNumber()
	@objc optional func getEmail()
}
```

## 프로토콜 상속

프로토콜은 한 개 이상의 프로토콜로부터 요구 사항을 받을 수 있으며, 요구 사항을 추가할 수도 있다. 다음 코드에서는 프로토콜 상속에 대한 문법을 보여준다.

```swift
protocol ProtocolThree: ProtocolOne, ProtocolTwo {
	// 요구 사항은 여기에 위치한다.
}
```

스위프트에서 프로토콜 상속을 위한 문법은 한 개 이상의 프로토콜을 상속할 수 있다는 점만 제외하면 클래식 상속을 위한 문법과 매우 유사하다. 이제 프로토콜 상속의 동작 방식에 대해 알아보자. 이번에는 앞에서 정의했던 `FullName` 프로토콜을 사용해 `Person` 이라는 이름의 새로운 프로토콜을 생성한다.

```swift
protocol Person: FullName {
	var age: Int {get set}
}
```

이제 `Person` 프로토콜을 따르는 타입을 생성할 때에는 `Person` 프로토콜에 정의된 요구 사항뿐만 아니라 `Fullname` 프로토콜에 정의된 요구사항 역시 반드시 구현해야만 한다. 예를 들어 다음 코드에서 보이는 바와 같이 `Person` 프로토콜을 따르는 `Student` 구조체를 생성할 수 있다.

```swift
struct Student: Person {
	var firstName = ""
	var lastName = ""
	var age = 0

	func getFullName() -> String {
		return "\(firstName) \(lastName)"
	}
}
```

`Student` 구조체에서는 `FullName` 과 `Person` 프로토콜에 정의된 요구 사항을 모두 구현했다는 점을 기억하길 바란다. 그러나 구조체 정의부에 명시된 프로토콜은 오직 `Person` 프로토콜뿐이다. 예에서는 `Person` 프로토콜만 열거했는데, 이는 `Person` 프로토콜이 `FullName` 프로토콜로부터 모든 요구 사항을 상속받았기 때문이다.

## 프로토콜 컴포지션

**프로토콜 컴포지션**은 타입이 여러 프로토콜을 채용할 수 있게 해준다. 이는 클래스 계층 구조 대신 프로토콜을 사용할 때 얻을 수 있는 가장 큰 장점인데, 스위프트나 다른 단일 상속 언어에서 클래스는 한 개의 슈퍼클래스만 상속할 수 있기 때문이다. 프로토콜 컴포지션을 위한 문법은 방금 살펴봤던 프로토콜 상속을 위한 문법과 같다. 다음 예에서는 프로토콜 컴포지션을 사용하는 방법을 보여준다.

```swift
struct MyStruct: ProtocolOne, ProtocolTwo, ProtocolThree {
	// 구현부는 여기에 위치한다.
}
```

프로토콜 컴포지션은 모든 요구 사항을 단일 프로토콜이나 단일 클래스에서 상속하지 않고 요구 사항을 여러 작은 컴포넌트로 나눌 수 있게 해준다. 프로토콜 컴포지션은 타입군의 높이를 증가시키기보다는 너비를 증가시키게 해주는데, 이는 해당 프로토콜을 따르는 타입 모두가 필요로 하는 요구 사항이 아닌 것을 포함하는 비대한 타입을 생성하는 것을 피하게 해준다는 것을 의미한다. 프로토콜 컴포지션은 매우 단순한 개념처럼 보이지만, 이는 프로토콜지향 프로그래밍에서 꼭 필요한 개념이다. 이제 프로토콜 컴포지션에 관한 예를 살펴보면 이를 사용해 얻을 수 있는 장점을 확인할 수 있을 것이다.

하나의 슈퍼클래스로부터 모든 기능을 상속받는 서브클래스를 갖는 대신, 프로토콜 컴포지션을 사용하면 타입에서 믹스앤매치가 가능한 프로토콜 컬렉션을 갖게 된다. 그러고 나면 타입의 필요에 따라 한 개 이상의 프로토콜을 사용할 수 있다. 예를 들면 `Athlete` 와 `Amateur` 그리고 `FootballPlayer` 프로토콜을 따르는 `AmFootballPlayer` 구조체를 생성할 수 있다. 그런 다음 `Athlete` 와 `Pro` 그리고 `FootballPlayer` 프로토콜을 따르는 `ProFootballPlayer` 구조체를 생성할 수 있다. 프로토콜 컴포지션은 타입의 요구 사항에 대해 매우 구체적으로 될 수 있게 해주며, 필요한 요구 사항만 채택할 수 있게 해준다.

순수 프로토콜 관점에서 보자면 프로토콜은 요구 사항만을 정의하기 때문에 지금 당장은 이 마지막 예가 이해되지 않을지도 모른다. 그러나 3장에서 최소한의 중복 코드를 가지고 이러한 타입을 구현하는 데 프로토콜 확장이 어떻게 사용될 수 있는지 살펴볼 수 있을 것이다.

## 프로토콜을 타입으로 사용

프로토콜에 아무런 기능이 구현돼 있지 않다고 하더라도 스위프트 프로그래밍 언어에서는 여전히 하나의 완벽한 타입으로 간주하며, 대부분 다른 타입과 마찬가지로 사용될 수 있다. 이는 프로토콜을 함수의 매개변수나 반환 타입으로 사용할 수 있다는 것을 의미한다. 또한 프로토콜을 변수나 상수, 그리고 컬렉션에 대한 타입으로도 사용할 수 있다. 이에 관한 몇 가지 예를 살펴보자. 다음 몇 가지 예에서는 `Person` 프로토콜을 사용할 것이다.

```swift
protocol Person {
	var firstName: String {get set}
	var lastName: String {get set}
	var birthDate: Date {get set}
	var profession: String {get}
	init (firstName: String, lastName: String, birthDate: Date)
}
```

`Person` 프로토콜에서는 네 개의 프로퍼티와 한 개의 생성자를 정의하고 있다.

첫 번째 예에서는 프로토콜을 함수나 메소드 또는 생성자의 매개변수와 반환 타입으로 사용하는 방법을 보여준다. 또한 함수 내에서는 `Person` 을 변수의 타입으로도 사용한다.

```swift
func updatePerson(person: Person) -> Person {
	var newPerson: Person
	// person을 갱신하는 코드는 여기에 위치한다.
	return newPerson
}
```

다음 예에서 볼 수 있듯이 프로토콜은 컬렉션에 저장하기 위한 타입으로도 사용될 수 있다.

```swift
var personArray = [Person]()
var personDict = [String: Person]()
```

이제 이 프로토콜 타입을 요구하는 곳 어디에서나 이 프로토콜을 따르는 타입의 인스턴스를 사용할 수 있다. 이번에는 `Person` 프로토콜을 따르는 `SwiftProgrammer` 와 `FootballPlayer` 이름의 두 타입이 있다고 가정해보자. 이 타입은 다음 예에서 보이는 것처럼 사용할 수 있다.

```swift
var myPerson: Person
myPerson = SwiftProgrammer(firstName: "Jon", lastName: "Hoffman", birthDate: birthDateProgrammer)
myPerson = FootballPlayer(firstName: "Dan", lastName: "Marino", birthDate: birthDatePlayer)
```

앞 예에서 보다시피 `Person` 프로토콜은 배열에 대한 타입으로 사용될 수 있으며, 이는 `Person` 프로토콜을 따르는 모든 타입의 인스턴스로 배열을 채울 수 있다는 것을 의미한다. 다음은 이에 관한 예를 보여준다.

```swift
var programmer = SwiftProgrammer(firstName: "Jon", lastName: "Hoffman", birthDate: birthDateProgrammer)

var player = FootballPlayer(firstName: "Dan", lastName: "Marino", birthDate: birthDatePlayer)

var people: [Person] = [] people.append(programmer) people.append(player)
```

마지막 예에서 살펴본 내용은 다형성의 한 형태다. 프로토콜이 가진 잠재력을 최대한으로 끌어올려 사용하기 위해서는 다형성이 무엇인지 이해해야만 한다.

## 프로토콜과 다형성

다형성이라는 단어는 그리스어인 poly(많다는 뜻)와 morphe(형태라는 뜻)에 어원을 두고 있다. 프로그래밍 언어에서 다형성은 여러 타입(다양한 형태)을 위한 단일 인터페이스다. 다형성이라는 단어를 배워야 하는 두 가지 이유가 있다. 첫 번째 이유는 일상적인 대화에서 이런 멋진 단어를 사용하면 매우 지적으로 보이기 때문이다. 두 번째 이유는 다형성은 가장 유용한 프로그래밍 기술 중 하나를 객체지향 프로그래밍뿐만 아니라 프로토콜지향 프로그래밍에도 제공하기 때문이다.

다형성은 하나의 일관된 인터페이스를 통해 여러 타입과 상호작용을 할 수 있게 해준다. 일반적으로 객체지향 프로그래밍에서는 슈퍼클래스에서 일관된 인터페이스가 나오는 반면, 프로토지향 프로그래밍에서는 프로토콜에서 일관된 인터페이스가 나오게 된다.

앞 절에서는 스위프트의 다형성에 대한 두 가지 예를 살펴봤다. 첫 번째 예는 다음 코드와 같다.

```swift
var myPerson: Person

myPerson = SwiftProgrammer(firstName: "Jon", lastName: "Hoffman", birthDate: birthDateProgrammer)

myPerson = FootballPlayer(firstName: "Dan", lastName: "Marino", birthDate: birthDatePlayer)
```

이 예에서는 `PersonProtocol` 타입의 변수 하나를 갖는다. 다형성은 `SwiftProgrammer` 나 `FootballPlayer` 타입과 같이 `PersonProtocol` 프로토콜을 따르는 타입의 인스턴스면 변수에 대입할 수 있게 해준다.

다형성의 또 다른 예는 다음 코드와 같다.

```swift
var programmer = SwiftProgrammer(firstName: "Jon", lastName: "Hoffman", birthDate: birthDateProgrammer)

var player = FootballPlayer(firstName: "Dan", lastName: "Marino", birthDate: birthDatePlayer)

var people: [Person] = []
people.append(programmer)
people.append(player)
```

이 예에서는 `PersonProtocol` 타입의 배열을 생성했다. 다형성은 `PersonProtocol` 을 따르는 타입의 인스턴스를 배열에 추가할 수 있게 해준다.

방금 살펴본 바와 같이 하나의 일관된 인터페이스를 통해 타입의 인터페이스에 접근하는 경우 타입 특정 기능에는 접근할 수 없다. 예를 들어 `FootballPlayer` 타입에 선수의 나이를 저장하는 프로퍼티가 있으면 해당 프로퍼티는 `PersonProtocol` 프로토콜에 정의되어 있지 않기 대문에 접근할 수 없다.

타입의 특정 기능에 접근해야만 하는 경우에는 형 변환을 사용할 수 있다.

## 프로토콜과 형 변환

형 변환은 인스턴스의 타입을 확인하거나 인스턴스를 명시된 타입으로 다루기 위한 방법이다. 스위프트에서는 특정 타입의 인스턴스인지를 확인하기 위해 `is` 키워드를 사용하며, 인스턴스를 특정 타입으로 다루기 위해 `as` 키워드를 사용한다.

다음 예는 `is` 키워드를 어떻게 사용하는지 보여준다.

```swift
if person is SwiftProgrammer {
	print("\(person.firstName) is a Swift Programmer")
}
```

이 예에서 `person` 인스턴스가 `SwiftProgrammer` 타입일 경우 조건문은 `true` 를 반환하며, 그렇지 않을 때는 `false` 를 반환한다. 특정 타입의 인스턴스만 반환하게 배열을 필터링하기 위해 `where` 문을 `is` 키워드와 함께 조합해 사용할 수도 있다. 다음 예에서는 `Person` 프로토콜의 인스턴스를 가진 배열을 필터링하고 `SwiftProgrammer` 타입의 인스턴스인 요소의 배열만 반환하게 한다.

```swift
for person in people where person is SwiftProgrammer {
	print("\(person.firstName) is a Swift Programmer")
}
```

이번에는 인스턴스를 구체적인 타입으로 형 변환하는 방법을 알아보자. 이러한 동작을 수행하기 위해 `as` 키워드를 사용할 수 있다. 인스턴스가 명시된 타입이 아닌 경우에는 형 변환이 실패할 수 있기 때문에 `as` 키워드는 `as?` 와 `as!` 이렇게 두 가지 형식으로 이뤄져 있다. `as?` 형식에서는 형 변환에 실패하면 `nil` 을 반환한다. `as!` 형식에서는 형 변환에 실패하면 런타임 에러가 발생한다. 그러므로 인스턴스 타입을 확신하거나 형 변환을 수행하기 전에 인스턴스 타입을 검사하지 않는 한은 `as?` 형식을 사용할 것을 추천한다.

다음 예제에서는 변수의 인스턴스를 `SwiftProgrammer` 타입으로 형 변환을 시도하기 위해 `as?` 키워드를 어떻게 사용하는지를 보여준다.

```Swift
if let _ = person as? SwiftProgrammer {
	print("\(person.firstName) is a Swift Programmer")
}
```

`as?` 키워드는 옵셔널을 반환하므로, 마지막 예제에서는 형 변환을 수행하기 위해 옵셔널 바인딩을 사용할 수 있다.

이번에는 프로토콜과 함께 연관 타입을 어떻게 사용할 수 있는지 알아보자.
