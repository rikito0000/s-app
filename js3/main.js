
const $button = document.getElementById('add-button');
$button.addEventListener('click', () => {


  // 受け取った要素を新しく使ったタグに入れている
  const $input = document.getElementById('new-todo');
  const $element = document.createElement('li');
  $element.innerText = $input.value;


  // 消す用の消去ボタンを作成
  const $doneButton = document.createElement('button');
  $doneButton.innerText = 'done'
  $element.appendChild($doneButton);

  // 達成したらトグルで消せるようにしている
  $doneButton.addEventListener('click', () => {
    const li = $doneButton.closest('li');
    li.classList.toggle('done')
  })

  //タスクが描かれた要素タグと一緒にulタグを一番下に入れるイメージ
  // 表示せている命令
  const $ul = document.querySelector('ul');
  $ul.appendChild($element);


});
