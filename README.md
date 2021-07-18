# 練習串接youtube api
[Demo](https://youtube202008.herokuapp.com/)

### 內容
純前端（無後端，ＤＢ）
- 到google apis console申請⼀個api⾦鑰(for youtube V3 api)
- 首頁頁面（推薦影片）
  -  圖片
  -  影片長度
  -  影片標題
  -  影片描述
  -  收藏按鈕（星星）
- 收藏頁面（收藏影片）
  -  跟首頁需求依樣
- 首頁＆收藏（router）
- 手刻ＲＷＤ不使用第三方套件（scss）
- 頁碼功能（jw-angular-pagination）
- 收藏按鈕（推薦影片）
  - 按鈕點擊後加入收藏，再按⼀下取消
  - 已收藏以及未收藏的影片，收藏按鈕需有區別
  - 已收藏的影片，重新整理或再次進入時仍會是已收藏的狀態localstorage
- 影片播放功能（ngx-youtube-player）
  - 轉跳頁（router/:id）
- Loading（ngx-spinner）
- 彈窗（設計成共用元件service觸發）

P.S. 由於部署在免費的Heroku因此當進入會等主機喚醒要比較久，要耐心等待ＸＤ





