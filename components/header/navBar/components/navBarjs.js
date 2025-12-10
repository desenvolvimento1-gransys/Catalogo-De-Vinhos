import { mapActions, mapState } from "vuex";

export default {
  computed: {
    ...mapState("Settings", ["navBarList", "routeSearchSettings"]),
    ...mapState("Layouts", ["layout"]),
    
    sortedNavBarList() {
      return this.navBarList
        ? this.navBarList.slice().sort((a, b) => a.name.localeCompare(b.name))
        : [];
    }
  },
  methods: {
    sortedChildren(children) {
      return children.slice().sort((a, b) => a.name.localeCompare(b.name));
    }
  },
  data() {
    return {
      dialog: false,
      menu: false
    };
  }
};
