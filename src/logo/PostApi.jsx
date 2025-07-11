import axios from "axios";

const booksAPI = axios.create({
  baseURL: "https://openlibrary.org"
});

export const searchBooks = (query) => {
  return booksAPI.get(`/search.json?q=${encodeURIComponent(query)}`);
};

export const getBookDetails = (olid) => {
  return booksAPI.get(`/works/${olid}.json`);
};
