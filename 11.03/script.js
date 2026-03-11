let botao = document.getElementById('botaoCor');
botao.addEventListener('click',() => {
    let corAtual = 
      document.body.style.backgroundColor;
      if(corAtual== 'yellow'){
        document.body.style.backgroundColor = 'black';
        document.body.style.color = "white";
        botao.style.backgroundColor = "yellow";
        botao.style.color = "black";
        a
      } else  {
        document.body.style.backgroundColor = 'yellow';
        document.body.style.color = "black";
        botao.style.backgroundColor = "black";
        botao.style.color = "white";
    }});