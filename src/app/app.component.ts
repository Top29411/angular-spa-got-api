import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  quotes: any[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getQuotes() ;
  }
  getQuotes() {
    this.http.get<any[]>('https://api.gameofthronesquotes.xyz/v1/random/5')
      .subscribe(data => {
        this.quotes = data;
      });
  }


}
