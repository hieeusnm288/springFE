import axios from "./customaxios";

const orderService = {
  getListOrder(key) {
    return axios.get(`/order/search?name=${key.name}&page=${key.page}&size=5`);
  },
  createOrder(data) {
    return axios.post("/order", data);
  },
  getDetailOrder(id) {
    return axios.get(`order_detail/${id}`);
  },
  confirmOrder(id) {
    return axios.put(`order/${id}`);
  },
  cancelOrder(id) {
    return axios.put(`order/cancel/${id}`);
  },
};

export default orderService;
