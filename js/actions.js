document.getElementById('nextImg').addEventListener('click', function () {
  // Obtenha todas as imagens dentro da div com id 'i78jh'
  var imagens = document.querySelectorAll('#i78jh img');
  // Encontre a imagem atualmente visível
  var visivelAtual = Array.from(imagens).findIndex(function (imagem) {
    return imagem.style.display !== 'none';
  });
  // Torne a imagem atual invisível
  imagens[visivelAtual].style.display = 'none';
  // Calcule o índice da próxima imagem
  var proximoIndice = (visivelAtual + 1) % imagens.length;
  // Torne a próxima imagem visível
  imagens[proximoIndice].style.display = 'block';
});

document.getElementById('iyq4t').addEventListener('click', function () {
  var imagens = document.querySelectorAll('#i78jh img');
  var visivelAtual = Array.from(imagens).findIndex(function (imagem) {
    return imagem.style.display !== 'none';
  });
  imagens[visivelAtual].style.display = 'none';
  // Calcule o índice da imagem anterior
  var anteriorIndice = (visivelAtual - 1 + imagens.length) % imagens.length;
  imagens[anteriorIndice].style.display = 'block';
});
