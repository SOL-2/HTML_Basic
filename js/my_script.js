//자바 스크립트 코드를 작성해 보자

// Java Script : web Client에서 실행 되는 언어
//               요즘에는 서버용 개발 언어로 사용 되기도 함(Node.js)

// 변수 만들어 보자!
// python은 변수를 선언한다
// my_var = 100 (python)
var my_var = 100 // 자바 스크립트
var tmp = 3.14   //number
var tmp1 = 'hello' //string (python과 동일)
var tmp2 = true    //boolean (python True)
var tmp3 = [1,2,3,4,5.555] // array (python list)

// 객체를 어떻게 표현 할까?
var tmp4 = {name : '홍길동', age : 25} //python 딕셔너리 생김새와 같음
console.log(tmp4.name) // 화면에 보이지 않지만 콘솔창에서 홍길동이 실행된 것이 보임

// 함수는 2가지 존재

// 1. 선언적 함수 ( python의 일반적인 함수 정의하는 방법 )
// def 대신 function 활용 , : 없음, 들여쓰기 없음
// 선언적 함수는 함수 이름이 존재함

function my_add(x,y) {
    return x+y
}
//def my_add(x,y):
//    return x + y

// 2. 익명 함수 ( 함수의 이름이 없음 = python 일급함수 ) => 람다함수
//  변수에 저장해서 사용
// 함수를 다른 함수의 인자로, 함수의 리턴값으로 함수를 이용.

var my_add = function (x,y) {
    return x+y
}
