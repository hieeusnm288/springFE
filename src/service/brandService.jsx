import axios from "./customaxios";

const brandService = {
  getListBrand(page) {
    return axios.get(`/brand/page?size=10&sort=id&page=${page}`);
  },
  deleteBrand(id) {
    return axios.delete(`/brand/${id}`);
  },
  getDetailBrand(id) {
    return axios.get(`/brand/${id}`);
  },
  updateBrand(data) {
    return axios.get(`/brand/${data.id}`, data);
  },
  insertBrand(data) {
    return axios.get(`/brand`, data);
  },
};

export default brandService;
