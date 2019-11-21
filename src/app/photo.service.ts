import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Photo} from './photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  API_URL = 'http://jsonplaceholder.typicode.com/photos';

  constructor(private httpClient: HttpClient) {
  }

  getPhotos(): Observable<Photo[]> {
    return this.httpClient.get<Photo[]>(this.API_URL);
  }

  create(photo: Photo) {
    return this.httpClient.post(this.API_URL, photo);
  }

  edit(id: number, photo: Photo): Observable<Photo> {
    return this.httpClient.put<Photo>(`${this.API_URL}/${id}`, photo);
  }

  getById(id: string): Observable<Photo> {
    return this.httpClient.get<Photo>(this.API_URL + '/' + id);
  }

  delete(id: number): Observable<Photo> {
    return this.httpClient.delete<Photo>(this.API_URL + '/' + id);
  }
}
