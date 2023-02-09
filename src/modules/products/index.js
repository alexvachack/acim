import actions from "./actions";
import mutations from "./mutations";
import state from "./state";
import getters from "./getters";

const products_module = {
  namespaced: true,
  actions,
  mutations,
  state,
  getters,
};

export default products_module;
