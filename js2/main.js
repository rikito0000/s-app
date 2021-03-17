

const $buttonList = document.querySelectorAll('button');

[...$buttonList].forEach((button) => {
  button.addEventListener('click', () => {
    const $li = button.closest('li');
    $li.classList.toggle('done');
  })
})
