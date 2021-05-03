export const state = () => {
    return {
      listUser: [],
      current: {
        id: "",
        name: "",
        email: "",
        address: "",
        phone: "",
        gender: "",
        createdAt: "",
        updatedAt: ""
      }
    };
  };
  
  export const mutations = {
    setUser(state, listUser) {
      state.listUser = listUser;
    },
    setCurrent(state, currentUser) {
      state.current = currentUser;
    }
  };
  
  export const actions = {
    setUser({ commit }, data) {
      commit("setUser", data.reverse());
    }
  };
  