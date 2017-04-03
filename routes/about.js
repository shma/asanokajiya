var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('about', { title: '浅野鍛冶屋',contentPath: 'about', contentName: '匠  about', descH2: '浅野鍛冶屋', descP: '501−6236　岐阜県羽島市江吉良町　454−1　電話：058−374−3818<br><br>「和鍛冶技法に特化した商品の開発」「世界最高峰の鍛冶技法の技術協力」「後継者育成活動」「国際社会への日本刀文化の普及活動」「地域社会への貢献」<br><br><table class=aboutTable><tr><td>1997年<td>25代藤原兼房の元で弟子として修行<tr><td>2004年<td>岐阜県関市にて創業<tr><td>2005年<td>カナダにて日本刀公開鍛錬<tr><td>2006年<td>岐阜県羽島市に鍛錬場を移転<tr><td>2012年<td>高岡クラフトコンペティション グランプリ<tr><td>2012年<td>フランス（洗心館道場20周年記念行事招聘）日本刀公開鍛錬<tr><td>2012年<td>フランス（国際刀剣会招聘）日本刀公開鍛錬<tr><td>2013年<td>個展「かぬちの技」（かさじゅう）<tr><td>2013年<td>カナダ（Tamahagane art主催）鍛造技法指導<tr><td>2013年<td>アメリカ（メタルアーティスト対象）日本刀公開鍛錬<tr><td>2013年<td>アメリカ（ミネソタ大学招聘）日本刀講演<tr><td>2014年<td>フランス（世界遺産シタデル・デ・ブザンソン招聘）日本投稿会鍛錬<tr><td>2015年<td>東急ハンズ名古屋高島屋店にて刃物・鍛冶道具の販売開始<tr><td>2015年<td>カナダ（Tamahagane art主催）鍛造技法指導<tr><td>2015年<td>滋賀県（とんてんかん祭り鍛冶屋町招聘）日本刀公開鍛錬<tr><td>2015年<td>浅野鍛冶屋にて鍛造ナイフ作り体験受け入れ開始<tr><td>2016年<td>アメリカ（オレゴンより国際交流羽島市）公開鍛錬・鍛冶体験<tr><td>2016年<td>カナダ（NAIT大学招聘）日本刀公開鍛錬・鍛冶体験<tr><td>2016年<td>カナダ（Tamahagane art主催）鍛造技法指導<tr><td>2016年<td>羽島市（なまずまつり）鍛冶体験出展<tr><td>2017年<td>事業所・鍛冶場増設<tr><td>2017年<td>日米共同開発研究所設立（アメリカ：シアトル）<tr><td>2018年<td>作刀公開鍛錬プロジェクト「YUGO」（スイス：博物館 ESPACE HORLOGER)</table>'  });
});

module.exports = router;
