import axios from "./customaxios";
const productService = {
  insertProduct(product) {
    let formData = new FormData();
    formData.append("name", product.name);
    formData.append("price", product.price);
    formData.append("quantity", product.quantity);
    formData.append("status", product.status);
    formData.append("specifications", product.specifications);
    formData.append("description", product.description);
    formData.append("category_id", product.categoryId);
    formData.append("brand_id", product.brandId);
    if (product.productFile[0].originFileObj) {
      formData.append("productFile", product.logoFile[0].originFileObj);
    }
    return axios.post("/product", formData);
  },
  getListProduct(param) {
    return axios.get(
      `/product/search?name=${param.name}&categoryId=${param.categoryId}&brandId=${param.brandId}&page=${param.page}&size=10`
    );
  },
  deleteProduct(id) {
    return axios.delete(`product/${id}`);
  },
  getDetailProduct(id) {
    return axios.get(`product/${id}`);
  },
  updateProduct(product) {
    let formData = new FormData();
    formData.append("name", product.name);
    formData.append("price", product.price);
    formData.append("quantity", product.quantity);
    formData.append("status", product.status);
    formData.append("specifications", product.specifications);
    formData.append("description", product.description);
    formData.append("category_id", product.categoryId);
    formData.append("brand_id", product.brandId);
    if (product.productFile[0].originFileObj) {
      formData.append("productFile", product.logoFile[0].originFileObj);
    }
    return axios.put(`product/${product.id}`, formData);
  },
  getImageProduct(url) {
    return axios.get(`/product/image/${url}`);
  },
};

export default productService;
