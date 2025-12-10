<template>
 <!-- SEARCH (mantido) -->
    <div class="mt-3" v-if="$vuetify.breakpoint.smAndDown">
      <v-col cols="12" class="px-4">
        <div class="search-container">
          <input
            v-model="searchText"
            type="text"
            class="search-input"
            placeholder="Buscar"
            @keyup.enter="search"
          />
          <button
            type="button"
            class="search-btn"
            aria-label="Buscar"
            @click="search"
          >
            <v-icon size="18" color="white">mdi-magnify</v-icon>
          </button>
        </div>
      </v-col>
    </div>
</template>

<script >
export default {
  data() {
    return {
      searchText: "",
    } 
  },
  methods: {
    search() {
      if (this.searchText && this.searchText.length > 0) {
        this.$router.push(`/busca/texto/${this.searchText}`);
        this.searchText = "";
      }
    },
  },
}
</script>

<style>
/* Search mantido do seu snippet anterior */
.search-container {
  position: relative; width: 100%;
  margin: 0 auto; display: flex; align-items: center;
}
.search-input {
  flex: 1 1 auto; height: 40px; border: 1px solid #cfd6e4; border-right: 0;
  border-top-left-radius: 6px; border-bottom-left-radius: 6px;
  padding: 0 14px; font-family: "Poppins", sans-serif; font-size: 14px;
  color: #1a1a1a; background: #fff; outline: none; transition: box-shadow .15s, border-color .15s;
}
.search-input::placeholder { color: #5b6b7f; font-weight: 400; }
.search-input:focus { border-color: #9bb0c8; box-shadow: 0 0 0 2px rgba(155,176,200,.25); }
.search-btn {
  height: 40px; width: 44px; border: 1px solid #000; border-left: 0;
  background: #000; color: #fff; display: inline-flex; align-items: center; justify-content: center;
  cursor: pointer; border-top-right-radius: 6px; border-bottom-right-radius: 6px;
  transition: filter .15s ease, transform .05s ease; padding: 0;
}
.search-btn:hover { filter: brightness(1.08); }
.search-btn:active { transform: translateY(0.5px); }

@media (max-width: 480px) {
  .search-container { max-width: 100%; }
  .search-input { font-size: 13px; }
}

</style>