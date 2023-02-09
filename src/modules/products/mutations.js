let searchProduct = (rootState) => {
  let results = [];
  let search = new RegExp(rootState.products.form.search, "ig");
  let parent = "";
  rootState.products.details.products.map((product) => {
    // search in category
    if (search.test(product.name)) {
      if (parent != product.category) {
        results.push(product);
        parent = product.category;
      }
    } else if (
      product.subcategories !== undefined &&
      product.subcategories !== null &&
      product.subcategories.length > 0
    ) {
      // search in subcategory
      product.subcategories.map((subproduct) => {
        if (search.test(subproduct.name)) {
          if (parent != product.category) {
            results.push(product);
            parent = product.category;
          }
        }
      });
    }
  });
  rootState.products.status =
    results.length > 0
      ? "Se encontraron " + results.length + " resultados"
      : "Sin resultados";
  rootState.products.details.products = results;
};

const mutations = {
  setProducts(state, products) {
    state.details.products = products;
  },
  searchProduct(state, value) {
    state.form.search = value;
    searchProduct(this.state);
  },
  setStatus(state, status) {
    state.status = status;
  },
};
export default mutations;
