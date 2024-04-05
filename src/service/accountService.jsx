import axios from "./customaxios";
const accountService = {
  registerAccount(acc) {
    return axios.post("/account", acc);
  },

  getListAccount(param) {
    return axios.get(
      `/account/search?name=${param.name}&page=${param.page}0&size=10`
    );
  },
  deleteAccount(id) {
    return axios.delete(`account/${id}`);
  },
  detailAccount(id) {
    return axios.get(`account/${id}`);
  },
  updateAccount(acc) {
    return axios.get(`account/${acc.id}`, acc);
  },
};

export default accountService;
