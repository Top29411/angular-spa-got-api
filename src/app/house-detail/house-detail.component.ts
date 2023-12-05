import { Component, OnInit } from '@angular/core' ;
import { ActivatedRoute } from '@angular/router' ;
import { HttpClient } from '@angular/common/http' ;
import { Router } from '@angular/router' ;

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent implements OnInit {
  houseDetail: any = {} ;
  loading: boolean = false ;

  constructor(private route: ActivatedRoute, private http: HttpClient , private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug') ;
      if (slug) {
        this.getHouseDetail(slug);
      }
    });
  }

  getHouseDetail(slug: string) {
    this.loading = true ;
    this.http.get<any>(`https://api.gameofthronesquotes.xyz/v1/house/${slug}`)
      .subscribe(data => {
        this.houseDetail = data[0] ;
        this.loading = false ;
  }) ;
  }
  showPersonDetail(slug: string) {
    this.router.navigate(['/persons', slug]) ;
  }
}
