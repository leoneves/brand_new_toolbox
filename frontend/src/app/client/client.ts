import axios, { AxiosInstance } from 'axios';

class Client {
  private static instance: AxiosInstance;

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = axios.create({
      baseURL: 'https//localhost:3000',
    });
  }
}

export default Client;
