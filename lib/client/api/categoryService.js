import { get } from './service';

class CategoryService {
  async getCategories() {
    const categories = await get('/categories');
    return categories.data.categories;
  }

  async getCategory(id) {
    const category = await get(`/categories/${id}`);
    return category;
  }
}

export default new CategoryService();