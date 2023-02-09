const actions = {
  setProducts({ commit }) {
    if (
      this.state.products.form.search == null ||
      this.state.products.form.search == ""
    ) {
      commit("setProducts", this.state.productsCatalog);
    }
  },
  searchProduct({ commit }) {
    commit("setStatus", "Buscando");
    commit("setProducts", this.state.productsCatalog);
    commit("searchProduct", this.state.products.form.search);
  },
};

export default actions;
