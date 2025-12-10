<template>
  <div>
    <span class="nav-list" :style="layout.navBar.main">
      <span v-for="item in sortedNavBarList" :key="item.name">
        <v-menu transition="slide-x-transition" open-on-hover offset-y>
          <template v-slot:activator="{ on }">
            <router-link :to="`/busca${item.route}`" class="no-decoration">
              <li :style="layout.navBar.navText" v-on="on">
                {{ item.name }}
              </li>
            </router-link>
          </template>
          <v-list
            :style="layout.navBar.sub"
            class="nav-subitens-main-class"
            v-if="item.children && item.children.length > 0"
          >
            <v-list-item v-for="detail in sortedChildren(item.children)" :key="detail.name">
              <router-link :to="`/busca${detail.route}`" class="no-decoration">
                <v-list-item-title
                  :style="layout.navBar.subText"
                  class="ml-5 mr-5 nav-subitens"
                >
                  {{ detail.name }}
                </v-list-item-title>
              </router-link>
            </v-list-item>
          </v-list>
        </v-menu>
      </span>

      <router-link :to="`/quem-somos`" class="no-decoration">
        <li :style="layout.navBar.navText" v-on="on">
          Quem Somos
        </li>
      </router-link>
      <!-- <!-- <router-link :to="`/Inauguracao/inauguracao`" class="no-decoration">
        <li :style="layout.navBar.navText" v-on="on">
          Assessoria
        </li> 
      </router-link> -->
    </span>
  </div>
</template>

<script src="./../navBarjs" />

<style scoped>
.nav-list {
  display: flex;
  justify-content: center;
}

.nav-list li {
  text-decoration: none !important;
  list-style-type: none;
}

/* Adicione o seguinte CSS para a rolagem */
.nav-subitens-main-class {
  max-height: 500px; 
  overflow-y: auto; 
}

.nav-subitens-main-class::-webkit-scrollbar {
  width: 6px; /* Tamanho da barra de rolagem (opcional) */
}

.nav-subitens-main-class::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.3); 
  border-radius: 3px;
}
</style>
