$(function () {
  function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
  }
  let id = getUrlParam('id')
  //alert(getUrlParam('id'));
  $.get('http://localhost:3000/playlist/detail',{ id: id }, function (res) {
    console.log(res);
    rows = []
    let result = res.playlist.tracks
    $.each(result, function (i, item) {
      let name = item.name
      console.log(i);
      let singer = item.ar[0].name
      let newDiv = `<div class="song_list_item" songid="${item.id}">
      <span>${i+1}</span>
      <div>
        <h3>${name}</h3>
        <p>${singer}</p>
      </div>
      <i class="layui-icon layui-icon-play"></i>
    </div>`
      rows.push(newDiv) 
      $('.song_list').empty().append(rows.join(' '))
    })

    let titleName = res.playlist.name
    let titleDes = res.playlist.description
    let titleImg = res.playlist.coverImgUrl
    $('#titleName').text(titleName)
    $("#titleDes").text(titleDes)
    $("#titleImg").attr("src", titleImg)
    
    $('.song_list_item').on('click',function(){
      let id = this.getAttribute('songid')
      let url = `/Users/macbook/Desktop/web_song/player.html?id=${id}`
      window.location.href = url

    })
  })
})