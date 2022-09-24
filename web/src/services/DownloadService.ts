import axios from 'axios';
import { IDownloadRequest } from '../components/DownloadsPage';
import authHeader from "./auth-header";

const API_URL = process.env.REACT_API_BASE_URL + '/api/downloads';

class DownloadService {
  createDownloadRequest(data: IDownloadRequest) {
    return axios.post(API_URL, data, { headers: authHeader() });
  }

  getDownloadRequests() {
    return axios.get(API_URL, { headers: authHeader() });
  }
}
export default new DownloadService();