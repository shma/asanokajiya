var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('samurai_knife', { title: '浅野鍛冶屋',contentPath: 'samurai_knife',  contentName: '侍  samurai knife', descH2: '伝統技術を身近なキッチンで', descP: '侍ナイフは日本刀の伝統的な技法を応用し、手に馴染むよう丁寧に１本１本を手作業で松炭を用いて鍛造・焼き入れ、浅野鍛冶屋オリジナルの柄をつけ仕上げています。世界最高峰のナイフビルダー：ボブ・クレイマー氏と共同開発し、２０１７年春、包丁作りに特化した鍛冶場増設しました。'});
});

module.exports = router;
