import { create } from 'apisauce';
import * as tokenStorage from '../storage/token';

// define the api
export const api = create({
  baseURL: 'http://localhost:9000',
});

api.addRequestTransform((request: any) => {
  // Get the token from the storage
  const token = tokenStorage.getToken();

  // add token to the Authorization header
  request.headers['Authorization'] = `Bearer ${token}`;
});
