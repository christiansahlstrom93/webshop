import { get } from "./service";

class ProductService {
  async getProduct(id) {
    const product = await get(`/products/${id}`);
    return product;
  }
}

export default new ProductService();