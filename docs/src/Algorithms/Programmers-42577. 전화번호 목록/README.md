# Programmers-42577. 전화번호 목록

[코딩테스트 연습 - 전화번호 목록](https://programmers.co.kr/learn/courses/30/lessons/42577)



| 난이도 | 걸린 시간 | 해결 유무(✅/❌) | 문제 유형 |
| --- | --- | --- | --- |
| lv.1 | 30분 | ✅ | 해시 |


## 설계 방법

- 해시로 풀이하는 법이 떠오르지 않았음.

- `phone_book`을 먼저 정렬함.

   - `['119', '97674223', '1195524421'] -> ['119', '1195524421', '97674223']` 로 정렬됨.

- `sort`된 배열을 `reduce`로 순회하며 현재 값이 그 이전 값으로 `startsWith` 하는지 판단함.

- `startsWith` 이 `true` 라면 `answer`를 `false`로 바꾸고 `reduce`를 `early break` 함.

## 코드

#### JavaScript

```javascript
function solution(phone_book) {
    let answer = true;

    phone_book
        .sort()
        .slice(0)
        .reduce((short, long, _, arr) => {
            if (long.startsWith(short)) {
                answer = false;
                arr.splice(1);
            }
            return long;
        });

    return answer;
}
```

### Python

```python
def solution(phone_book):
    phone_book = sorted(phone_book)

    for short, long in zip(phone_book, phone_book[1:]):
        if long.startswith(short):
            return False
    return True
```

## 시간 복잡도

`sort()` : O(NlogN)
`reduce` : O(N)

O(NlogN) + O(N) 맞나..?

## 어려웠던 점

- 해시로 분류되어 있어서 생각이 해시로 고정되었는데, 해시로 푸는 방법이 쉽게 안떠올랐음.

- 프로그래머스에서 JS를 지원하지 않는 문제라, 파이썬으로 먼저 풀었어야 했음.

## 참고자료

- [reduce early break](https://stackoverflow.com/questions/36144406/how-to-early-break-reduce-method)

- [Time & Space Complexity of Array.sort in V8](https://blog.shovonhasan.com/time-space-complexity-of-array-sort-in-v8/)

- [MDN - startsWith](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith)

