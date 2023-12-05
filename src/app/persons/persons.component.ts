import { Component, OnInit } from '@angular/core' ;
import { HttpClient } from '@angular/common/http' ;
import { FormControl } from '@angular/forms' ;
import { Router } from '@angular/router' ;


@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})



export class PersonsComponent implements OnInit {


  searchControl = new FormControl() ;
  persons: any[] = [] ;
  filteredPersons: any[] = [] ;
  loading: boolean = false ;



  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.getPersons() ;
    this.searchControl.valueChanges.subscribe(() => {
      this.filterPersons() ;
    });
  }

  getPersons() {
    this.loading = true ;
    this.http.get<any[]>('https://api.gameofthronesquotes.xyz/v1/characters')
      .subscribe(data => {
        this.persons = data ;
        this.filteredPersons = data ;
        this.loading = false ;
      });
  }

  filterPersons() {
    const searchTerm = this.searchControl.value.toLowerCase() ;
    this.filteredPersons = this.persons.filter(person =>
      person.name.toLowerCase().includes(searchTerm)
    );
  }

  showPersonDetail(slug: string) {
    this.router.navigate(['/persons', slug]) ;
  }
  removeSearchValue () {
    this.searchControl.reset('') ;
  }
}
