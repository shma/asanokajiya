var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('katana', { title: '浅野鍛冶屋',contentPath: 'katana', contentName: '刀  katana', descH2: '刀匠房太郎', descP: '２００４年岐阜県関市にて創業、２００６年岐阜県羽島市に鍛錬場を移転。２０１２年フランスでの日本刀公開鍛錬を皮切りに国内外から招聘され、世界各地の鍛冶職人・学芸員・研究家と国際交流を実施。世界最古の技法と最高峰の鍛冶技術をもち日本の刀鍛冶が必要とされており、刀匠本人の知識力と探検心で鋼の研究等に協力しています。' });
});

module.exports = router;
