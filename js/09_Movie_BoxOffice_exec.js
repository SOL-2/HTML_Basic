function call_ajax() {

        //var date = $("input[type=date]").val()

        //var yyyyMMdd = String(date_str);
        // alert("dddd")
        //if(event.keyCode===13)
        //var modifiedDate=new Date($("input[type=date]")).toDateString("yyyyMMdd");
        //alert(new Date($("input[type=date]")).toDateString("yyyyMMdd"))
        //console.log(($("input[type=date]").val()))

            var d = $("input[type=date]").val();
            d = d.replace(/-/g,"");

            console.log(d)
            $.ajax({
                async: true,
                url: "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json",
                data:
                    {
                    key: "dcc8cb114359e2c52eb06dba68ef03ac",
                    targetDt: d,//$("input[type=date]").val(),

                    },
                type: "GET",
                timeout: 3000,
                dataType: "json",

                success: function (result) {
                    $("tbody").empty()  // 날짜 조회할 때 마다 초기화

                    $.each(result.boxOfficeResult.dailyBoxOfficeList, function (idx, item) {
                        //console.log(value.rank)
                        //console.log(value.dailyBoxOfficeList)

                        var tr = $("<tr></tr>")
                        var numTd = $("<td></td>").text(item.rank)
                        var titleTd = $("<td></td>").text(item.movieNm)
                        var salesAccTd = $("<td></td>").text(item.salesAcc)
                        var audiAccTd = $("<td></td>").text(item.audiAcc)
                        var detailTd = $("<td></td>")
                        var detailBtn = $("<input />").attr("type", "button").attr("value", "상세")

                        detailBtn.on("click", function () {
                            $.ajax({
                                async: true,
                                url: "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json",
                                data:
                                    {
                                        key: "dcc8cb114359e2c52eb06dba68ef03ac",
                                        movieCd: item.movieCd,
                                    },
                                type: "GET",
                                timeout: 3000,
                                dataType: "json",

                                success: function (result) {
                                    console.log(result)

                                        detail_str = ""

                                        var moviebox = result.movieInfoResult.movieInfo
                                        detail_str += "영화:"+" "+moviebox.movieNm+"\n"
                                        detail_str += "제작년도:"+" "+moviebox.prdtYear+"\n"

//                                        genres_str = ''
                                        for(i=0;i<moviebox.genres.length;i++){
                                            detail_str += "장르:"+moviebox.genres[i].genreNm + " "+"\n"
                                        }

//                                        directors_str = ''
                                        for(i=0;i<moviebox.directors.length;i++){
                                            detail_str += "감독:"+moviebox.directors[i].peopleNm + " "+"\n"
                                        }

//                                        actors_str = ''
                                        for(i=0;i<moviebox.actors.length;i++){
                                            detail_str += "배우:"+moviebox.actors[i].peopleNm + " "+"\n"
                                        }
//                                        console.log(actors_str)

//                                        detail_str += "영화:"+" "+movieNm+"\n";
//                                        detail_str += "제작년도:"+" "+prdtYear+"\n";
//                                        detail_str +=
//                                        detail_str += "장르:"+" "+genres.text()+"\n";
//                                        detail_str += "감독:"+" "+directors.text()+"\n";
//                                        detail_str += "배우:"+" "+actors.text()+"\n";
                                        alert(detail_str)

                                }
                            })
                        })


                        var post_td=$("<td></td>")
                        $.ajax({
                            async: true, // 동기 비동기, 디폴트 동
                            url: "https://dapi.kakao.com/v2/search/image", // 호출할 서버쪽 프로그램
                            data: {
                                query: item.movieNm + " 포스터",
                                sort: "accuracy"

                            },
                            beforeSend: function (xhr) {
                                xhr.setRequestHeader("Authorization",
                                    "KakaoAK f8d16ffc7ede2648036f107773b911fc")

                            },
                            type: "GET",
                            timeout: 3000,
                            dataType: "json",

                            success: function (result) {
                                var img_list = result.documents
                                var img_url = img_list[0].thumbnail_url
                                //var li = $("<li></li>")
                                //var img = $("<img />").attr('src',img_list[0].thumbnail_url).addClass("myImage")
                                var img_td = $("<img />").attr("src",img_url)
                                post_td.append(img_td)
                                //img_list[0].thumbnail_url
                            },
                        } )


                        detailTd.append(detailBtn)
                        tr.append(numTd)
                        tr.append(post_td)
                        tr.append(titleTd)
                        tr.append(salesAccTd)
                        tr.append(audiAccTd)
                        tr.append(detailTd)

                        $("tbody").append(tr)

                    })
                }
            })

        }











    // function naverAPI(movieName) {
//     console.log(movieName);
//     $.ajax({
//         async: true,
//         url: "https://openapi.naver.com/v1/search/movie.json?query="+encodeURIComponent(movieName),
//         //data: {
//         //    query: movieName
//
//        // },
//         type: "GET",
//         timeout: 3000,
//         //dataType: "jsonp",
//         headers : {
//             "X-Naver-Client-Id": "cNU2zuFqZLEqiDgDiHke",
//             "X-Naver-Client-Secret":"aTHhALXiZ6"
//         },
//
//         success: function (result) {
//             console.log("success naver")
//             console.log(result);
//         }
//     })
//
// }