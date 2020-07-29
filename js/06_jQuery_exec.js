
function print_text() {
    //버튼을 눌렀을 때 실행할 코드를 기술
    //alert('호출 돼요!!') 테스트할 떄 사용(화면에 경고창을 띄우는 것)
    console.log($('#pineapple').text()) // id가 파인애플 -> 파인애플
    console.log($("ul > li.myList").text()) // ul의 자식 중 myList -> 참외
    console.log($("ul > li[class]").text()) // ul의 자식 중 속성이 class

    //입력상자에 입력했을 때 출력될 수 있도록 .text(태그 사이에 글자 땡기는 메소드)
    console.log($("input[type=text]").val()) //입력상자 내 글씨를 당기는 메소드는 val

    console.log($('ol > li.myList:first').text()) //같은 구조 내에서 선택할때는 :first ->고양이
    console.log($('ol > li.myList:last').text()) // 순서 마지막 last -> 강아지

    console.log($('ol > li.myList:first + li').text()) // 형제 다음번 형제 -> 호랑이

    console.log($('ol > li.myList:nth-child(1)').text()) //nth-child() 리스트 형제 내 순번으로 구하는 메소드(괄호는 1번부터)

    $('input[type=text]').attr("size",10) //attr 은 속성을 제어하는 메소드 -> 입력상자 글자넣는 사이즈를 20->10으로 줄이겠다


    //사용자가 하는 행동을 이벤트 -> 사용자가 셀렉트에서 선택했을 때 이벤트가 발생
}

function my_func() {

    //alert('멍멍냠냠')
    //select box에서 과일이 바뀌면 실행된다!!
    // 1. 선택한 과일이 어떤 과일인지 알아내야 한다
    var fruit = $('select > option:selected').text() //:selected(선택된 것을 찾는 메소드)

    // 2. ul 아래 li 엘리먼트를 선택하여 each(for문과 유사한)로 돌린다
    var my_list = $('ul > li')
    my_list.each(function(idx, item)
    {
        //console.log($(item).text())
        if($(item).text() == fruit)
            $(item).css('color','red')

        else{
            $(item).css('color','black')
        }

    })
}