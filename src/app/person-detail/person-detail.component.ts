import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  personDetail: any = {} ;
  loading: boolean = false ;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    // Subscribe to route parameter changes
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug') ;
      if (slug) {
        this.getPersonDetail(slug) ;
      }
    });
  }

  getPersonDetail(slug: string) {
    this.loading = true ;
    this.http.get<any>(`https://api.gameofthronesquotes.xyz/v1/character/${slug}`)
      .subscribe(data => {
        this.personDetail = data[0] ;
        this.loading = false ;
      });
  }

}
