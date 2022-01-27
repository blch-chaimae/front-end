import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get('http://localhost:8080/movies');
  }
  create(movie: any) {
    return this.http.post('http://localhost:8080/movies', movie);
  }
  update(id: String, movie: any) {
    return this.http.put('http://localhost:8080/movies/${id}', movie);
  }
  delete(id: String) {
    return this.http.delete('http://localhost:8080/movies/${id}');
  }

}
