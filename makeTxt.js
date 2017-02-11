var fs = require('fs');
var fs = require('fs');
fs.readFile('./origin/pn_ja_utf8.dic', 'utf8', function (err, text) {
  if(!err){
    var splitTxt = text.split('\r\n');
    var a = 'orign,origin,phonetic,parts_of_speech,postitive_degree\n';
    fs.appendFileSync('./txt/noun.csv', a, 'utf8');
    fs.appendFileSync('./txt/adverb.csv', a, 'utf8');
    fs.appendFileSync('./txt/adj.csv', a, 'utf8');
    fs.appendFileSync('./txt/out.csv', a, 'utf8');
    fs.appendFileSync('./txt/verb.csv', a, 'utf8');
    for(var i = 0; i < splitTxt.length; i++){
      //console.log(splitTxt[i]);
      var splitTxt2 = splitTxt[i].split(':');
      var data = splitTxt2[0] + ','
        + splitTxt2[1] + ','
        + splitTxt2[2] + ','
        + splitTxt2[3] + ',\n';
      console.log(JSON.stringify(data));
      switch(splitTxt2[2]){
        case '名詞':
        fs.appendFileSync('./txt/noun.csv', data, 'utf8', function(err){
          if(err) console.log(err);
          //console.log(data.toString());
        });
        //if(i !== splitTxt.length) fs.appendFileSync('./txt/noun.txt', ',', 'utf8');
        break;

        case '動詞':
        fs.appendFileSync('./txt/verb.csv', data, 'utf8', function(err){
          if(err) console.log(err);
        });
        //if(i !== splitTxt.length) fs.appendFileSync('./txt/verb.json', ',', 'utf8');
        break;

        case '形容詞':
        fs.appendFileSync('./txt/adj.csv', data, 'utf8', function(err){
          if(err) console.log(err);
        });
        //if(i !== splitTxt.length) fs.appendFileSync('./txt/adj.json', ',', 'utf8');
        break;

        case '副詞':
        fs.appendFileSync('./txt/adverb.csv', data, 'utf8', function(err){
          if(err) console.log(err);
        });
        //if(i !== splitTxt.length) fs.appendFileSync('./txt/adverb.json', ',', 'utf8');
        break;

        default:
        fs.appendFileSync('./txt/out.csv', data, 'utf8', function(err){
          if(err) console.log(err);
        });
        //if(i !== splitTxt.length) fs.appendFileSync('./txt/out.json', ',', 'utf8');
        break;

      }
    } //for
    /*fs.appendFileSync('./txt/noun.json', '[ ', 'utf8');
    fs.appendFileSync('./txt/adverb.json', '[ ', 'utf8');
    fs.appendFileSync('./txt/adj.json', '[  ', 'utf8');
    fs.appendFileSync('./txt/out.json', '[  ', 'utf8');
    fs.appendFileSync('./txt/verb.json', '[ ', 'utf8');
    //console.log(text);
    var splitTxt = text.split('\r\n');
    for(var i = 0; i < splitTxt.length; i++){
      //console.log(splitTxt[i]);
      var splitTxt2 = splitTxt[i].split(':');
      var data = {
        origin:splitTxt2[0],
        phonetic:splitTxt2[1],
        parts_of_speech:splitTxt2[2],
        postitive_degree:splitTxt2[3]
      };
      console.log(JSON.stringify(data));
      switch(splitTxt2[2]){
        case '名詞':
        fs.appendFileSync('./txt/noun.json', JSON.stringify(data, '', ' '), 'utf8', function(err){
          if(err) console.log(err);
          //console.log(data.toString());
        });
        if(i !== splitTxt.length) fs.appendFileSync('./txt/noun.json', ',', 'utf8');
        break;

        case '動詞':
        fs.appendFileSync('./txt/verb.json', JSON.stringify(data, '', ' '), 'utf8', function(err){
          if(err) console.log(err);
        });
        if(i !== splitTxt.length) fs.appendFileSync('./txt/verb.json', ',', 'utf8');
        break;

        case '形容詞':
        fs.appendFileSync('./txt/adj.json', JSON.stringify(data, '', ' '), 'utf8', function(err){
          if(err) console.log(err);
        });
        if(i !== splitTxt.length) fs.appendFileSync('./txt/adj.json', ',', 'utf8');
        break;

        case '副詞':
        fs.appendFileSync('./txt/adverb.json', JSON.stringify(data, '', ' '), 'utf8', function(err){
          if(err) console.log(err);
        });
        if(i !== splitTxt.length) fs.appendFileSync('./txt/adverb.json', ',', 'utf8');
        break;

        default:
        fs.appendFileSync('./txt/out.json', JSON.stringify(data, '', ' '), 'utf8', function(err){
          if(err) console.log(err);
        });
        if(i !== splitTxt.length) fs.appendFileSync('./txt/out.json', ',', 'utf8');
        break;

      }

    }
    fs.appendFileSync('./txt/noun.json', '  ]', 'utf8');
    fs.appendFileSync('./txt/adverb.json', '  ]', 'utf8');
    fs.appendFileSync('./txt/adj.json', ' ]', 'utf8');
    fs.appendFileSync('./txt/out.json', ' ]', 'utf8');
    fs.appendFileSync('./txt/verb.json', '  ]', 'utf8');
    //console.log(splitTxt[0]);*/

  }
});

/*fs.appendFile('writetest.txt', data ,'utf8', function (err) {
    console.log(err);
});*/
