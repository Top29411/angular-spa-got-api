// random-quotes.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-random-quotes',
  templateUrl: './random-quotes.component.html',
  styleUrls: ['./random-quotes.component.css']
})
export class RandomQuotesComponent implements OnInit {
  quotes: any[] = [];
  loading: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getQuotes();
  }

  getQuotes() {
    this.loading = true;
    this.http.get<any[]>('https://api.gameofthronesquotes.xyz/v1/random/5')
      .subscribe(data => {
        this.quotes = data;
        this.loading = false;
      });
  }
}
