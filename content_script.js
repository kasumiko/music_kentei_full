if($('div.kesu b').text()==' 検定スタート') embButtonsHTML();

function getButton(){
  return $('div.kesu a.btn-lg')//.attr('outerHTML');
}

function makeButtonsHTML(){
  const button = getButton();
  let ret = getOuterHTML(makeButton(button, 0)).replace(/検定スタート/, 'トップソングから出題 初級編');
  ret += getOuterHTML(makeButton(button, 1)).replace(/検定スタート/,'トップソング以外からも出題 上級編');
  ret += getOuterHTML(makeButton(button, 2)).replace(/検定スタート/,'配信曲全て出題、間違ったら即終了 全曲編');
  return ret;
}

function embButtonsHTML(){
  const buttons = makeButtonsHTML()
  $('div.kesu a.btn-lg').value[0].remove();
  $('div.kesu').insertFirst(buttons);
}

function makeButton(button, number, text){
  const attr = button.getAttr('onclick');
  if(number==2) button.attr('onclick', attr.replace(/playStart/, 'playStart_all'));
  else button.attr('onclick', attr.replace(/,0/,',' + number));
  return button;
}

function getOuterHTML(doc){
  return doc.value[0].outerHTML + '<br>';
}