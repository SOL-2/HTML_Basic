
function search_image() {
    if(event.keyCode === 13) {

        //AJAX를 이용해서 api 호출
        $.ajax({
            async : true, // 동기 비동기, 디폴트 동
            url : "https://dapi.kakao.com/v2/search/image", // 호출할 서버쪽 프로그램
            data : {
                query : $("#movie_name").val() + " 포스터",
                sort : "accuracy"

            },
            beforeSend : function (xhr) {
                xhr.setRequestHeader("Authorization",
                    "KakaoAK f8d16ffc7ede2648036f107773b911fc")

            },
            type : "GET",
            timeout : 3000,
            dataType : "json",

            success : function (result) {
                var img_list = result.documents
                var li = $("<li></li>")
                var img = $("<img />").attr('src',img_list[0].thumbnail_url).addClass("myImage")
                li.append(img)
                $("ul").append(li)

                //img_list[0].thumbnail_url
            },
            error : function (error) {
                alert('실패')
            }



        })
    }

}