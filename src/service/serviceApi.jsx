import axios from "axios";

const fetchImage = {
  key: "20241631-8c2a23c9fab91569c058a3702",
  page: 1,

  quiry(search) {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${search}&page=${this.page}&per_page=12&key=${this.key}`;
    this.page += 1;

    return axios.get(url);
  },
};

export default fetchImage;
