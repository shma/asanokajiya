var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('workshop', {  title: '浅野鍛冶屋',contentPath: 'workshop',  contentName: '伝  workshop', descH2: '刀匠から学ぶ、伝統の技', descP: '鎚（つち）で打ち延ばす、金やすりで整える、刃付け、焼き入れ、研ぎなどの作業に挑戦できます。ナイフの鍛造には、たくさんの工程と時間が必要ですが、たった１日（約７時間）で完成します。昼食は刀匠と一緒にテーブルを囲み、楽しみながら学べる侍ナイフ作り体験です。<br><br>料金：￥２５,４００/人〜（４名様の場合）美味しい昼食付きプラン<br>所要時間：およそ７時間<br><br>予約申し込み：<a href="http://activityjapan.com/publish/feature/1739" target=”_blank”>Activity Japan</a><br><br>２０１５年よりインバウンド会社Voyaginに鍛冶体験ツアーの企画を掲載。日本の伝統工芸を鍛冶場で「鍛造ナイフ作り」体験ができるため、特にアメリカ・イギリス・オーストラリア等で参加され、作刀に関わる技術を提供しています。' });
});

module.exports = router;
