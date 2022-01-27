import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  movies: any[] = [];
  movie = {
    id: '',
    series_title: '',
    released_year: 0,
    runtime: '',
    genre: '',
    rating: 0.00,
    meta_score: 0,
    no_of_votes: 0,
    gross: '',
    cluster: 0
  }
  constructor(
    private appService: AppService) {

  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.appService.getAll()
      .subscribe((data: any) => this.movies = data);
  }

  save() {
    if (this.movie.id) {
      this.appService.update(this.movie.id!, this.movie).
        subscribe(() => this.getAll());
    } else {
      this.appService.create(this.movie).
        subscribe(() => this.getAll());
    }

    this.movie =
    {
      id: '',
      series_title: '',
      released_year: 0,
      runtime: '',
      genre: '',
      rating: 0.0,
      meta_score: 0,
      no_of_votes: 0,
      gross: '',
      cluster: 0
    }
  }
  edit(movie: any) {
    this.movie = movie;

  }
  delete(movie: any) {
    this.appService.delete(movie.id).
      subscribe(() => this.getAll());

  }
}

