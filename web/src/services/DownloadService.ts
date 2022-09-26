import axios from 'axios';
import { response } from 'express';
import { IDownloadRequest } from '../components/DownloadsPage';
import authHeader from "./auth-header";

const API_URL = process.env.REACT_API_BASE_URL;

class DownloadService {
  createDownloadRequest(data: IDownloadRequest) {
    return axios.post(API_URL +  '/api/downloads', data, { headers: authHeader() });
  }

  getDownloadRequests() {
    return axios.get(API_URL + '/api/downloads', { headers: authHeader() });
  }

  downloadFile(data: IDownloadRequest) {
    return axios.post(API_URL +  `/api/download-file`, data, { headers: authHeader(), responseType: 'blob' });
  }
}
export default new DownloadService();