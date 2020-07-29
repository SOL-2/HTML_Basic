//jQuery CDN 방식을 사용
//jQuery code 사용할 수 있

function my_func() {
    // 0. jQuery 를 공부할 때 selector!!
    // 1. 전체 선택자 (universal selector)
    //$("*").css('color','red') // element 전체 선택해서 css 하겠다
    // 2. 태그 선택자 (tag selector)
    //$("li").remove()
    // 3. 아이디 선택자 (id selector)
    //$('#center').text() //인자가 없으면 값을 알아오라는 의미
    //$('#center').text('제주')//인자가 있으면 값을 변경하라는 의미
    //4. 클래스 선택자 (class selector) class는 중복이 가능 아이디는 중복 불가
    //$('.region').css('background-color','yellow')
    // 5. 구조 선택자 (자식 선택자, 후손 선택자)
    //$("ol > *").css('color','steelblue') //ol의 자식의 모든 것을 선택하라는 뜻 $('ol>li')

    //$('div li').css('color','pink') //div의 후손으로 있는 li (스페이스바는 후손처리)
    // 6. 구조 선택자 (형제 선택자)
    //$('#center + li').remove() //다음 나오는 거 딱 하나 선택할 수 있음
    //$('#hong ~ li').remove() // 다음 나오는 거 전체 선택
    // 7. 속성 선택자
    //$('[id]').css('color','green') //id라는 속성을 가지고 있는 것 싹 다
    // 7가지 조합하면 웬만한 element 지정 가능


}