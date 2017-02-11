var kuromoji = require('kuromoji');
var fs = require('fs');
var sentense = require('./settings');

// この builder が辞書やら何やらをみて、形態素解析機を造ってくれるオブジェクトです。
var builder = kuromoji.builder({
  // ここで辞書があるパスを指定します。今回は kuromoji.js 標準の辞書があるディレクトリを指定
  dicPath: 'node_modules/kuromoji/dict'
});

// 形態素解析機を作るメソッド
builder.build(function(err, tokenizer) {
  // 辞書がなかったりするとここでエラーになります(´・ω・｀)
  if(err) { throw err; }

  // tokenizer.tokenize に文字列を渡すと、その文を形態素解析してくれます。
  var tokens = tokenizer.tokenize(sentense.a);
  var sum = 0;
  var count = 0;
  console.log(tokens.length);
  for(var i = 0; i < tokens.length; i++){
    var form = tokens[i].basic_form;
    switch(tokens[i].pos){
      case "動詞":
      /*fs.readFileSync('./txt/verb.csv', 'utf8', function (err, data) {
        console.log(err);
        var tmp = data.split('\n');
        console.log(tmp.length);
        for(var j = 0; j < tmp.length; j++){
          //console.log(tmp[j]);
          var splitData = tmp[j].split(',');
          //console.log(splitData.length);
          if(j === 0){
            console.log('WWWWWWWWWWWWWWWWW' + splitData[0] + "," + form);
          }
          if(form == splitData[0]){
            console.log('form' + form);
            console.log(tokens[i]);
          }
        }
      });*/
      outNum = outPoint('verb', tokens[i]);
      if(outNum !== -1){
        sum += outNum;
        count++;
      }
      break;

      case "形容詞":
      outNum = outPoint('adj', tokens[i]);
      if(outNum !== -1){
        sum += outNum;
        count++;
      }
      break;

      case "副詞":
      outNum = outPoint('adverb', tokens[i]);
      if(outNum !== -1){
        sum += outNum;
        count++;
      }
      break;

      case "名詞":
      outNum = outPoint('noun', tokens[i]);
      if(outNum !== -1){
        sum += outNum;
        count++;
      }
      break;

      default:
      outNum = outPoint('out', tokens[i]);
      if(outNum !== -1){
        sum += outNum;
        count++;
      }
      break;
    }
    console.log(tokens[i].basic_form + ',' + outNum);
    //console.log(tokens[i]);
  }
  console.log(sum/count);
});

function outPoint(fileName, token){
  var out = fs.readFileSync('./txt/' + fileName + '.csv' , 'utf8');
  var tmp = out.split('\n');
  var returnNum = -1;
  for(var j = 0; j < tmp.length; j++){
    var splitData = tmp[j].split(',');
    if(token.basic_form == splitData[0]){
      //return 0;
      //console.log(splitData[3]);
      returnNum = splitData[3];
    }
  }
  return parseFloat(returnNum);
}
