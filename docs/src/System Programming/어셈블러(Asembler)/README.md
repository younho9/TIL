# 어셈블러(Asembler)

## Assembly Language Statements

### 3 types of functional statements

- 명령어(Instructions) : 어셈블러에 의해 오브젝트 코드로 해석되어 런타임에 실행된다. 각 인스트럭션은 하나의 연산(operation)을 실행하는 것이다.

- 지시어(Directives) : 어셈블러가 어떤 액션을 취해야 하는지를 지시한다. 오브젝트 코드로 변화되지 않는다. 

- 매크로(Macro) : 반복되는 명령어를 하나의 명령어로 표현한다.



## Actual Machine Architecture

### CISC(Complex Instruction Set Computers)

- 크고 복잡한 인스트럭션 세트가 제공

- 다양한 인스트럭션 포맷과 길이를 가짐 

- 다양한 어드레싱 모드

- 하드웨어 구현이 어려움



### RISC(Reduced Instruction Set Computers)

- 소수의 인스트럭션, 인스트럭션 포맷, 어드레싱을 제공

- 표준의 고정된 인스트럭션 길이와 single-cycle excution

- 장점

   - 프로세서 디자인 단순화

   - 프로세서 개발을 빠르고 저렴하게

   - 신뢰성을 높이고 빠른 인스트럭션 실행 시간

   

## Assembler란

- 어셈블리 언어로 작성된 프로그램을 머신 코드(오브젝트 코드)로 번역하는 시스템 소프트웨어

- 기계종속적 기능

   - 인스트럭션 포맷과 어드레싱 모드에 의존

- 기계독립적 기능

   - 머신 아키텍쳐와 직접 관련이 없다.

   

### Example of a SIC assembler language program

사용되는 어셈블러 지시어(directives)

- START : 프로그램의 이름과 시작 주소를 가리킴

- END : 프로그램의 끝을 가리킴

- BYTE, WORD : character 또는 constant를 생성

- RESB, RESW : 데이터 영역의 byte/word를 예약함



### Forward reference

```plain text
LOC     Source statement              Object code
1000    FIRST    STL    RETADR        141033
...
1033    RETADR   RESW   1
```

소스 코드가 순차적으로 실행되기 때문에 주소 변환을 한번에 할 수 없다. (어셈블러가 RETADR의 주소를 나중에 알게 되기 때문에) 이를 forward reference라고 한다.

따라서 대부분의 어셈블러는 Two passes 알고리즘으로 디자인하여 해결한다.

- 1st pass는 소스 코드를 스캔하며 레이블 정의를 찾고 주소를 할당한다.

- 2nd pass는 실제 번역의 대부분을 수행한다.

이렇게 어셈블러는 오브젝트 코드를 출력 장치에 생성해내고, 이 코드가 실행을 위해 메모리에 로드될 수 있다. 이 오브젝트 프로그램은 다음의 3가지 타입의 레코드를 갖고 있다.

- Header

- Text

- End



