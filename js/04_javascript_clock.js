function start_clock() {
    //alert('버튼이 눌리다니!')
    //시계를 출력해야 함
    //현재 시간을 구하고 현재 날짜의 시 분 초를 구할 수 있다!!
    //이 시간을 HTML 특정 영역에 출력
    //위의 작업을 1초마다 반복 하면 된다
    //자바 스크립트는 특정 시간마다 특정함수를 반복해주는 함수를 제공




    setInterval(function() {
        var today = new Date() // 날짜 객체 생성
        console.log(today.toLocaleString())

        var my_div = document.getElementById("myDiv")  //바디 전체가 document
        my_div.innerText = today.toLocaleString()},1000) //innerText = 안에 있는 텍스트를 지칭

}