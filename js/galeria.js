//selecionando todos os elementos necessários
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".gallery .image");

window.onload = ()=>{ //após a janela carregada
  
  filterItem.onclick = (selectedItem)=>{ //se o usuário clicar em filterItem div
    if(selectedItem.target.classList.contains("item")){ //se o item selecionado pelo usuário tiver a classe .item
      filterItem.querySelector(".active").classList.remove("active"); //remove a classe ativa que está no primeiro item
      selectedItem.target.classList.add("active"); //adicione aquela classe ativa no item selecionado pelo usuário
      let filterName = selectedItem.target.getAttribute("data-name"); //obter valor de nome de dados do item selecionado pelo usuário e armazenar em uma variável de nome de arquivo
      filterImg.forEach((image) => {
        let filterImges = image.getAttribute("data-name"); //obtendo valor de nome de dados de imagem
        //se o valor do nome-dos-dados do item selecionado pelo usuário for igual ao valor do nome-dos-dados das imagens
        //ou o valor do nome-dos-dados do item selecionado pelo usuário é igual a "todos"
        if((filterImges == filterName) || (filterName == "all")){
          image.classList.remove("hide"); //primeiro remova a classe oculta da imagem
          image.classList.add("show"); //adicionar classe show na imagem
          
        }else{
          image.classList.add("hide"); //adicionar ocultar classe na imagem
          image.classList.remove("show"); //remover classe show da imagem
        }
      });
    }
  }
  for (let i = 0; i < filterImg.length; i++) {
    filterImg[i].setAttribute("onclick", "preview(this)"); //adicionar o atributo onclick em todas as imagens disponíveis

  }
}

// ------------------

//função de visualização de imagem em tela cheia
//selecionando todos os elementos necessários
const previewBox = document.querySelector(".preview-box"),
categoryName = previewBox.querySelector(".title p"),
previewImg = previewBox.querySelector("img"),
closeIcon = previewBox.querySelector(".icon"),
shadow = document.querySelector(".shadow");

function preview(element){
  //uma vez que o usuário clica em qualquer imagem, remova a barra de rolagem do corpo, para que o usuário não possa rolar para cima ou para baixo
  document.querySelector("body").style.overflow = "hidden";
  let selectedPrevImg = element.querySelector("img").src; //obter o link de origem da imagem clicada pelo usuário e armazenado em uma variável
  let selectedImgCategory = element.getAttribute("data-name"); //obtendo valor de nome de dados de imagem clicada pelo usuário
  previewImg.src = selectedPrevImg; //passando a fonte da imagem clicada pelo usuário na fonte da imagem de visualização
  categoryName.textContent = selectedImgCategory; //passando o valor do nome de dados clicado pelo usuário no nome da categoria
  previewBox.classList.add("show"); //mostra a caixa de visualização da imagem
  shadow.classList.add("show"); //mostrar o fundo cinza claro
  closeIcon.onclick = ()=>{ //se o usuário clicar no ícone de fechamento da caixa de visualização
    previewBox.classList.remove("show"); //esconda a caixa de antevisão
    shadow.classList.remove("show"); //esconda o fundo cinza claro
    document.querySelector("body").style.overflow = "auto"; //mostre a barra de rolagem no corpo
  }
}

function popup(URL) {
  var width = 1024;
  var height = 700;
  var left = 30;
  var top = 50;
  window.open(URL, 'janela', 'width=' + width + ', height=' + height + ', top=' + top + ', left=' + left + ', scrollbars=yes, status=no, toolbar=no, location=no, directories=no, menubar=no, resizable=no, fullscreen=no');}