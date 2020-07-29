// //document는 바디 안 element
// $(document).ready(function() {
//     // ready => 안에 있는 람다 함수는 크롬 브라우저에 내용이 완전히 출력 되는 그 시점에 실행
//     // li를 찾아서 각각에 대해 event처리를 지정한다.
//     $("ul > li").on('mouseover',function () {  //mouseover : 마우스가 올라가는 이벤트
//         $(this).addClass('myStyle')
//     })
//
//     $("ul > li").on('mouseleave',function () { //mouseleave: 마우스가 내려가는 이벤트
//         $(this).removeClass('myStyle')   //클래스 내용을 지운
//     })
// })



//function set_active() {
    //alert('마우스가 위에 올라갔다')
    // 현재 이벤트가 발생된 이벤트 소스에 CSS를 적용한다!!
    // 이벤트 소스 : 이벤트가 발생된 element => this
  //  $(this).addClass('myStyle')

function insert_text() {
    $('#myDiv').html('<h1>이것은 소리없는 아우성</h1>') //text 대신 html 메소드 대신 넣으면다 <h1></h1>이 동작
    // text() : 문자를 그냥 가져다가 넣음 태그적용 안함
    // html() : text() 와 동일하게 동작하지만 태그 적용을 한

}

function deleteDiv() {
    //$('#deleteDiv').remove()   // remove() : 자신을 포함해서 후손들도 삭제
    $('#deleteDiv').empty()     //  empty() : 자신을 제외한 후손들만 삭제

}

function add_list() {
    // 없는 태그를 만드려면 어떻게 해야하나
    // <li class='myStyle'>박길동</li> 이렇게 만들어짐
    var my_li = $('<li></li>').text("박길동").addClass('class','myStyle')

    // 태그를 생성한 다음 원하는 위치에 가져다 붙여요!!
    // 1. append() : 자식으로 붙이고 맨 마지막 자식으로 붙인다
    //$('ul').append(my_li)
    // 2. prepend() : 자식으로 붙이고 첫번째 자식으로 붙인다
    //$('ul').prepend(my_li)
    // 3. after :
    //$('ul > li:nth-child(3)').after(my_li)
    // 4. before :
    //$('ul>li:last').before(my_li)
}