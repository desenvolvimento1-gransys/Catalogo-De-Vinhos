<template>
  <span>
    <div class="corpo">
      <h1>Quem somos?</h1>
      <br />
      <div class="texto">
        <p>
          <strong>CONHEÇA NOSSA HISTÓRIA.</strong>
          <br /><br />
        </p>
        <p>
         Limp-Já da Miss nasceu da necessidade de reunir móveis e itens de decoração em um só lugar, oferecendo peças com design moderno e estética diferenciada. A jornada começou em 2018, quando Lu, formada em arquitetura e urbanismo desde 2014, decidiu abrir seu primeiro espaço após anos de experiência na decoração de casas-modelo para construtoras. A dificuldade de encontrar as melhores opções de móveis em diferentes lojas inspirou a criação de um espaço completo e prático.
        </p>
        <p>
          No ano seguinte, em 2019, seu tio Marcelo, designer de interiores, juntou-se ao time para trazer uma visão ainda mais especializada e técnica na escolha das peças, oferecendo um serviço personalizado aos clientes.
        </p>
        <p>
          Nosso diferencial é a assessoria de decoração, que orienta na escolha, dimensionamento e harmonização dos móveis no ambiente, além de possibilitar uma experiência sensorial única, levando itens de decoração diretamente à casa do cliente para uma seleção personalizada e imersiva.
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

.corpo {
  margin: 0 auto;
  max-width: 1000px;
  height: auto;
  padding: 2%;
  border-radius: 10px;
  background-color: #f9f9f9;
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
  background-color: #ffffff;
}

@media only screen and (max-width: 600px) {
  .corpo {
    border-radius: 5px;
    padding: 10%;
    background-color: white;
  }

  .texto {
    font-size: 14px;
  }
}
</style>
