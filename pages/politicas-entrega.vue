<template>
  <span>
    <div class="corpo">
      <h1>Política de Entrega</h1>
      <br />
      <div class="texto">
        <p>
          <h2>Prazo e Valores.</h2>
        </p>
        <p>
          Para calcular o preço do frete, adicione o produto à lista de
          favoritos e clique no ícone <br> "entrar em contato", ou então clique no
          botão "entrar em contato" na página do produto.<br> Você será redirecionado 
          para uma de nossas atendentes que dará andamento na cotação do frete
          do móvel desejado.
          <br /><br />
          O preço do envio pode variar por região, peso e tamanho do produto
          selecionado.
          <br /><br />
          Para clientes de Leme, Araras e Pirassununga, a entrega é gratuita.
          <br /><br />
          O envio é feito por transportadora e o valor é repassado ao cliente no
          ato da cotação.
          <br /><br />
          Será enviado um código de rastreamento para acompanhar o status do
          pedido.
          <br /><br />
          O prazo de postagem é de até 5 dias úteis após o término da confecção
          do móvel.
        </p>
      </div>
    </div>
  </span>
</template>

<script>
export default {};
</script>

<style>
h1 {
  text-align: center;
  color: black;
}
h2 {
  text-align: left;
  color: black;
}
.corpo {
  margin-left: auto;
  margin-right: auto;
  max-width: 1000px;
  height: auto;
  padding: 2%;
  border-radius: 10px;
}

.texto {
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  text-align: justify;
  border: 3px solid black;
  padding: 30px;
  font-weight: normal;
  border-radius: 10px;
  overflow: hidden;
}

@media only screen and (max-width: 600px) {
  .corpo {
    border-radius: 5px;
    padding: 10%;
    background-color: "white";
  }
  .texto {
    font-size: 14px;
  }
}
</style>
