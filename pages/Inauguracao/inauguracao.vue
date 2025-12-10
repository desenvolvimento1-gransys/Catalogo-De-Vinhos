<template>
  <v-container fluid style="margin:0; padding:0">
    <!-- <v-container>

      <v-row no-gutters class="equal-height-row">
        <v-col cols="12" sm="6" class="equal-height text-container">
          <div class="card-text">
            <p class="Title">Assessoria de decoração</p>
            <p class="text">
              O que é e porque você precisa de uma assessoria de Decoração! Você não tem tempo e tem medo de errar na escolha dos móveis e da decoração, ou não conta com um profissional para isso? Então a assessoria de decoração da Decora By Lu é para você!
              É na sua casa que você vai viver os pequenos/grandes momentos com as pessoas que ama. Portanto, é ali que você precisa se sentir bem!
            </p>
          </div>
        </v-col>
        <v-col cols="12" sm="6" class="video-container equal-height">
          <iframe class="video" src="https://www.youtube.com/embed/Pi0D9y2fXeY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
          </iframe>
        </v-col>
      </v-row>
    </v-container> -->




<br>
    <v-row no-gutters >
      <v-col sm="12" md="6" cols="12">
        <div class="card-text">
          <p class="Title">Assessoria de decoração</p>
          <p class="text">
            O que é e porque você precisa de uma assessoria de Decoração! Você não tem tempo e tem medo de errar na escolha dos móveis e da decoração, ou não conta com um profissional para isso? Então a assessoria de decoração da Limp-Já da Miss é para você!
            É na sua casa que você vai viver os pequenos/grandes momentos com as pessoas que ama. Portanto, é ali que você precisa se sentir bem!
          </p>
        </div>
      </v-col>
      <v-col cols="12" sm="6" class="video-container equal-height">
        <iframe class="video" src="https://www.youtube.com/embed/oaXncPA5BDs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
        </iframe>
      </v-col>
    </v-row>


    <br>

    <!-- Segunda v-row -->
    <v-row no-gutters >
      <v-col sm="12" md="6" cols="12">
        <div class="Image2">
          <v-img class="img2" src="/FotoLu.jpg"></v-img>
        </div>
      </v-col>
      <v-col sm="12" md="6">
        <div class="Text2">
          <p class="title2">
            O que é e porque você precisa de uma assessoria de Decoração!
          </p>
          <p class="txt2">
            1. <b>Escolha assertiva</b> – Evita móveis desproporcionais e erros de harmonia nos acabamentos.
            <br> <br>
            2. <b>Personalização</b> – Sua casa refletindo seu estilo, unindo forma, função e estética.
            <br> <br>
            3. <b>Economia</b> – Evita gastar com móveis inadequados, optando por alternativas mais acessíveis.
            <br> <br>
            4. <b>Serviço completo</b> – Decoração, showroom de marcas, catálogo de acabamentos, entrega e instalação.
          </p>
          <v-btn :href="whatsapplink" target="_blank" class="btn2">
            <span style="font-size:17px" class="mdi mdi-whatsapp"/>Contato
          </v-btn>
        </div>
      </v-col>
    </v-row>

    <!-- Terceira v-row -->
    <v-row no-gutters class="second-row">
      <v-col sm="12" md="6" cols="12">
        <div class="Text2">
          <p class="title2">
            <br><br>
            Veja como funciona a nossa assessoria de decoração
          </p>
          <p class="txt2">
            <b>1. Primeiro contato:</b> Envie uma história do que gostaria para sua nova casa, incluindo fotos e projetos.
            <br>
            <b>2. Agendamento da visita técnica:</b> Marque uma visita com nossos profissionais.
            <br>
            <b>3. Briefing e levantamento fotográfico:</b> Coletamos as informações necessárias.
            <br>
            <b>4.Criação de referências:</b> Criamos pastas, plantas e moodboards com as principais escolhas.
            <br>
            <b>5. Reunião de apresentação:</b> Apresentamos o estudo e o orçamento.
            <br>
            <b>6. Pedidos personalizados:</b> Fazemos os pedidos de móveis personalizados.
            <br>
            <b>7. Entrega e instalação:</b> Realizamos a instalação e ambientação final.
            <br><br>
            <b>Limp-Já da Miss</b>, deixe-nos fazer parte da sua história!
          </p>
          <v-btn :href="whatsapplink" target="_blank" class="btn2">
            <span style="font-size:17px" class="mdi mdi-whatsapp"/>Contato
          </v-btn>
        </div>
      </v-col>
      <v-col sm="12" md="6">
        <div class="Image2">
          <v-img class="img2" src="/FotoLuTio.jpg"></v-img>
        </div>
      </v-col>
    </v-row>

    <!-- Quarta v-row -->
    <!-- <v-row no-gutters class="fourth-row" reverse>
      <v-col sm="12" md="6" cols="12">
        <div class="Image2">
          <v-img class="img2" src="/sofaLu.jpg"></v-img>
        </div>
      </v-col>
      <v-col sm="12" md="6">
        <div class="Text2">
          <p class="title2">
            Funcionamento da nossa assessoria
          </p>
          <p class="txt2">
            <b>5. Reunião de apresentação:</b> Apresentamos o estudo e o orçamento.
            <br> <br>
            <b>6. Pedidos personalizados:</b> Caso o móvel escolhido seja personalizado, fazemos os pedidos.
            <br> <br>
            <b>7. Entrega e instalação:</b> Instalação de quadros, colocação de tapetes e ambientação.
            <br><br>
            <b>Decora by Lu</b>, deixe-nos fazer parte da sua história!
          </p>
          <v-btn :href="whatsapplink" target="_blank" class="btn2">
            <span style="font-size:17px" class="mdi mdi-whatsapp"/>Contato
          </v-btn>
        </div>
      </v-col>

    </v-row> -->
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      whatsapplink: 'https://api.whatsapp.com/send?phone=5519997718057'
    }
  }
}
</script>

<style scoped>
.equal-height-row {
  display: flex;
  align-items: stretch;
}

.equal-height {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.text-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
}

.card-text {
  display: flex;
  flex-direction: column;
  justify-content: flex-start; 
  height: 100%; 
}

.text {
  flex-grow: 1; 
  font-size: 1rem;
  margin-left: 110px;
}

.video-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.video {
  width: 600px;
  height: 350px;
  border-radius: 20px;
}

.Image2 {
  height: auto;
}

@media screen and (max-width: 936px) {
  .video {
    width: 350px;
    height: 200px;
  }
}




.Image2 {
  height: 719.5px;
  object-fit: cover;
}

.btn2 {
  margin-left: 110px;
  margin-top: 30px;
  background: #64b161 !important;
  width: 200px;
  color: #fff;
  font-weight: 900;
  text-transform: none;
}

.img2 {
  height: 719.5px;
  object-fit: cover;
}

.Text2 {
  background: #1d1e20;
  height: 719.5px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.Text3 {
  background: #1d1e20;
  height: 719.5px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.title2 {
  margin-top: -70px;
  font-size: 2.5rem;
  color: white;
  font-weight: 900;
  line-height: 1; 
  padding: 0 110px;
  max-width: 720px;
  margin-bottom: 20px;
  word-wrap: break-word;

}
.title3 {
  margin-top: -70px;
  font-size: 2.5rem;
  color: white;
  font-weight: 900;
  line-height: 1; 
  padding: 0 110px;
  max-width: 720px;
  margin-bottom: 20px;
  word-wrap: break-word;
}
.Title{
  font-size: 2.5rem;
  margin-left: 110px;
  font-weight: 900;
}
.txt2 {
  font-size: 1rem;
  color: white;
  padding-left: 110px;

  max-width: 650px;
  margin-top: 10px;
  word-wrap: break-word;
}
.txt3 {
  font-size: 1rem;
  color: white;
  font-weight: 500;
  padding-left: 110px;
  max-width: 650px;
  margin-top: 10px;
  word-wrap: break-word;
}
.card-text{
  padding:70px;
  padding-left: 30px !important;
  background: #fff;
  border-radius: 30px;
  width: 95%;
  height: 95%;
}
@media screen and (max-width: 1300px) {
  .txt3 {
    font-size: 1rem;
    color: white;
    font-weight: 500;
    padding-left: 30px;
    max-width: 750px;
    margin-top: 10px;
    word-wrap: break-word;
  }
  .title2 {
    padding-left: 30px;
    max-width: 550px;
  }
  .title3 {
    padding-left: 30px;
    max-width: 700px;
  }

  .txt2 {
    padding-left: 30px;
    max-width: 450px;
  }

  .btn2 {
    margin-top: 10px;
    margin-left: 30px;
  }

  .card-text {
    padding-top: 70px;
    padding-left: 0px;
    background: #fff;
    border-radius: 30px;
    width: 95%;
    height: 95%;
  }
}

@media screen and (max-width: 936px) {
  .second-row {
    flex-direction: column-reverse;
  }
  .video{
    width:85% !important; 
    height:220px !important; 
    margin-bottom: 0px;
  }
  .Image2 {
    height: 100%;
  }
  .Title{
    margin-left: 20px;
    line-height: 1;
  }
  /* Reverte a ordem das colunas em mobile */
 .third-row {
    flex-direction: column-reverse;
  }

  .img2 {
    width: 100%;
    height: auto;
  }

  .Text2 {
    margin-top: 0;
    height: 699.5px;
    padding: 30px;
  }
  .Text3 {
    margin-top: 0;
    height: 900px;
    padding: 30px;
  }

  .title2 {
    padding-left: 10px;
    font-size: 1.5rem;
    margin-top: 10px;
    width: 470px;
  }
  .title3 {
    padding-left: 10px;
    font-size: 1.5rem;
    margin-top: -10px;
    width: 450px;
  }

  .txt2, .txt3 {
    padding-left: 10px;
    max-width: 100%;
  }

  .btn2 {
    margin-left: 10px;
  }

  .card-text {
    padding: 15px !important;
    background: #fff;
    border-radius: 30px;
    width: 75% !important;
    height: 80% !important;
  }

  .video {
    width: 350px;
    height: 200px;
  }

  .text {
    width: 350px;
    margin-left: 20px;
  }

}

</style>
