function selecionarImgProduto(imgMiniaturaEscolhida){
    document.getElementById("imgPrincipal").src = imgMiniaturaEscolhida.src;
}

function mudarCamisa(botaoEscolhido){
    if(botaoEscolhido.id == "btnPreto"){
        document.getElementById("imgPrincipal").src = "../assets/img/produto1.png";
    } 
    else if (botaoEscolhido.id == "btnAzul"){
        document.getElementById("imgPrincipal").src = "../assets/img/produto2.png";
    }
    else if (botaoEscolhido.id == "btnVerde"){
        document.getElementById("imgPrincipal").src = "../assets/img/produto3.png";
    }
    else if (botaoEscolhido.id == "btnCinza"){
        document.getElementById("imgPrincipal").src = "../assets/img/produto4.png";
    }
    else if (botaoEscolhido.id == "btnRosa"){
        document.getElementById("imgPrincipal").src = "../assets/img/produto5.png";
    }
}

function mudarTamanho(tamanhoEscolhido){
    if(tamanhoEscolhido.id == "btnP"){
        document.getElementById("tamanhoSelecionado").innerHTML = "P";
    } 
    else if (tamanhoEscolhido.id == "btnM"){
        document.getElementById("tamanhoSelecionado").innerHTML = "M";
    }
    else if (tamanhoEscolhido.id == "btnG"){
        document.getElementById("tamanhoSelecionado").innerHTML = "G";
    }
    else if (tamanhoEscolhido.id == "btnGG"){
        document.getElementById("tamanhoSelecionado").innerHTML = "GG";
    }
}