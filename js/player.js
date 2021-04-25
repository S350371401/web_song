$(function () {
  function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
  }
  let id = getUrlParam('id')
  console.log(id);
  $.get('http://localhost:3000/song/url', { id: id }, function (res) {
    console.log(res);
    let url = res.data[0].url
    console.log(url);
    $('#player').on('click', function () {
      
      /* let song = $('#song') */
      let song = document.getElementById('song')
      song.src = url;
      song.play()
      console.log(song);
    })

    $('#pause').on('click', () => {
      let pauseSong = document.getElementById('song')
      pauseSong.pause()
    })

  })

  //"http://m801.music.126.net/20210424210837/13a807cc23938afb3eb4b3f5422ed46a/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/8045656223/0043/42ad/f376/daed2f8dff96060d2dd368e13ca1c4fb.mp3"
})