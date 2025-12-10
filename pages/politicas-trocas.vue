<template>
  <span>
    <div class="corpo">
      <h1>Política de Trocas</h1>
      <br />
      <div class="texto">
        <p class="titulo">
          PRAZO DE TROCA 7 DIAS CORRIDOS.
          <br />
          <br />
        </p>
        <p>
          Passados o prazo de troca após o recebimento da peça em mãos, não efetuamos a troca;
          <br />
          Entrar em contato pelo WhatsApp.
          <br />
          <br />
          A etiqueta deve estar fixada à peça intacta, afixada conforme enviada.
          <br />
          • Informar o número do pedido, as peças a serem trocadas e motivo;
          <br />
          • A troca pode ser feita tanto na loja física quanto online;
          <br />
          • O frete referente à troca é de responsabilidade do cliente;
          <br />
          • A sua peça não pode ter nenhum sinal ou indício de uso (Arranhões, Manchas ou qualquer outro tipo de dano por mau uso);
          <br />
          • Não trocamos peças do SALE (Promoção);
          <br />
          • Caso haja alguma incoerência no item de troca, a sua solicitação será cancelada e o produto será devolvido a você.
          <br />
          • A peça será trocada sem custo ao cliente em caso de defeito, ou erro por parte da empresa;
          <br />
          <br />
          <p class="grife">Em casos de:</p>
          • Embalagem aberta, violada ou danificada;
          <br />
          • Produto avariado, quebrado ou danificado;
          <br />
          • Produto em desacordo com o pedido;
          <br />
          <br />
          RECUSE O RECEBIMENTO E ESCREVA O MOTIVO DA RECUSA NO VERSO DO DANFE!
          <br />
          <br />
          <br />
          <p class="grife">Devolução</p>
          Em casos de devoluções, pedimos para que nos contate pelo WhatsApp no prazo máximo de 7 dias corridos após o recebimento da mercadoria, estando a mesma intacta e com etiquetas afixadas conforme enviado.
          <br />
          • Informar o número do pedido, as peças a serem devolvidas e motivo.
          <br />
          • No caso de devolução, o cliente deve enviar a peça de volta para a loja no prazo estipulado acima, exatamente como foi entregue, dentro de sua embalagem original, etiqueta afixada ao produto, brindes e nota fiscal.
          <br />
          • O produto passará por um padrão de qualidade assim que chegar à loja para verificar se o mesmo se encontra dentro das condições de troca. Caso aprovada a devolução, entraremos em contato;
          <br />
          • O valor será estornado da mesma forma que foi efetuado o pagamento.
        </p>
      </div>
    </div>
  </span>
</template>

<script>
export default {};
</script>

<style>
.grife {
  font-weight: 700;
}
.titulo {
  font-size: 25px;
  font-weight: 700;
  color: black;
  font-family: "Roboto", sans-serif;
  text-decoration: none;
  text-align: center;
}
h1 {
  text-align: center;
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
  .titulo {
    font-size: 20px;
    font-weight: 700;
    color: black;
    font-family: "Roboto", sans-serif;
    text-decoration: underline;
    text-align: center;
  }
}
</style>
