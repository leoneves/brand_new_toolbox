import axios, { AxiosInstance } from 'axios';

class Client {
  private static instance: AxiosInstance;

  static getInstance(): AxiosInstance {
    if (this.instance || this.instance) {
      return this.instance;
    }
    this.instance = axios.create({
      baseURL: 'http://localhost:8000',
    });
    return this.instance;
  }
}

export default Client;
