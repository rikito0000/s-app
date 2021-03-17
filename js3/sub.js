const $element = document.createElement('li');
$element.innerText = $input.value;

//ボタン要素を作成してその中に文字列を入れる
//さらにある要素の一番したに要素
const $doneButton = document.createElement('button');
$doneButton.innerText = 'done';
$element.appendChild($doneButton);

//トグルで達成したら線で消せるようにする
$doneButton.addEventListener('click', () => {
  const li = $doneButton.closest('li');
  li.classList.toggle('done')
})

const $ul = document.querySelector('ul');
$ul.appendChild($element);
//タスクが書かれた要素がタグと一緒にulタグの一番下に入るイメージ

});
