'use strict';


{
  const button = document.querySelector('button');
  const texts = ['大吉', '中吉', '小吉', '末吉', '凶', '大凶', '大大凶'];

  button.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * texts.length);
    button.textContent = `${texts[randomNumber]}`;
  });
}