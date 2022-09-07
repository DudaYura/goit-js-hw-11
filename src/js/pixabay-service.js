import axios from 'axios';

export default class PixabayApiService {
  static KEY = '29769386-c1c38227ab8ea455d4e3063b7';
  static BASE_URL = 'https://pixabay.com/api/';

  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchImages() {
    const queryParams = {
      key: PixabayApiService.KEY,
      q: this.searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 40,
      page: this.page,
    };

    const response = await axios.get(PixabayApiService.BASE_URL, {
      params: queryParams,
    });
    this.page += 1;
    return response.data;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  resetPage() {
    this.page = 1;
  }
}
