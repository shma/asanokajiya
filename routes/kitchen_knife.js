var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('kitchen_knife', { title: '淺野鍛冶屋', contentPath: 'kitchen_knife', contentName: '侍  kitchen knife', descH2: '伝統技術を身近なキッチンで', descP: '淺野鍛冶屋の包丁は、日本の伝統「刀鍛治」の技術から生まれた、日常使いの包丁です。その研ぎ澄まされた切れ味は、食材の繊細な旨味を引き立て、料理に洗練された美味しさと美しさをもたらします。“貴人に仕え、支える人”という意味を持つ「侍（サムライ）」という言葉のように、ご家庭の普段の食卓を支える存在でありたいと願い、1本1本丁寧に心を込めてお造りしています。<br><br><a class="more-kitchen" target="_blank" href="https://www.samuraiknife-japan.com/">［淺野鍛冶屋の包丁］https://www.samuraiknife-japan.com/</a>' });
});

module.exports = router;