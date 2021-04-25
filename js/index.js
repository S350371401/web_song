$(function () {
  getRecommend()
  function getRecommend() {
    $.get('http://localhost:3000/personalized', function (res) {
      console.log(res.code);
      if (res.code !== 200) {
        return res.code
      }
      let result = res.result
      console.log(result);


      let rows = []
      $.each(result, function (i, item) {
        let name = item.name
        let playCount = item.playCount
        let picUrl = item.picUrl
        rows.push(
          `<div class="cover" recommendid="${item.id}">
            <div>
              <div class="views layui-icon layui-icon-headset">${playCount}</div>
            </div>
            <img src="${picUrl}" alt="" class="song_bg">
            <p class="cover_details">${name}</p>
          </div>`
        )
        $('.recommend').empty().append(rows.join(' '))

        $('.cover').on('click', function () {
          let id = this.getAttribute("recommendid")
          let url = `/Users/macbook/Desktop/web_song/songList.html?id=${id}`
          window.location.href = url
        })
      })
      
      
    })
  }
  
  
  
})