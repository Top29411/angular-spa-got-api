// houses.component.ts
import { Component, OnInit } from '@angular/core' ;
import { HttpClient } from '@angular/common/http' ;
import { FormControl } from '@angular/forms' ;
import { Router } from '@angular/router' ;

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {
  searchControl = new FormControl() ;
  houses: any[] = [] ;
  filteredHouses: any[] = [] ;
  loading: boolean = false ;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.getHouses() ;
    this.searchControl.valueChanges.subscribe(() => {
      this.filterHouses() ;
    });
  }

  getHouses() {
    this.loading = true ;
    this.http.get<any[]>('https://api.gameofthronesquotes.xyz/v1/houses')
      .subscribe(data => {
        this.houses = data ;
        this.filteredHouses = data ;
        this.loading = false ;
  });
  }

  filterHouses() {
    const searchTerm = this.searchControl.value.toLowerCase() ;
    this.filteredHouses = this.houses.filter(house =>
      house.name.toLowerCase().includes(searchTerm)
    );
  }

  showHouseDetail(slug: string) {
    this.router.navigate(['/houses', slug]) ;
  }
  removeSearchValue () {
    this.searchControl.reset('') ;
  }
}
