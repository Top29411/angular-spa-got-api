import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule



import { AppComponent } from './app.component';

import {MatTabsModule} from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

import {MatButtonModule} from '@angular/material/button';

import { NoopAnimationsModule } from '@angular/platform-browser/animations' ;
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HousesComponent } from './houses/houses.component';
import { PersonsComponent } from './persons/persons.component';
import { HouseDetailComponent } from './house-detail/house-detail.component';
import { MatListModule } from '@angular/material/list'; // Import the MatListModule

import {MatExpansionModule} from '@angular/material/expansion';
import { FormsModule ,ReactiveFormsModule  } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field'; // Add this line
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';


import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { RandomQuotesComponent } from './random-quotes/random-quotes.component';


const routes: Routes = [
  { path: '', redirectTo: '/houses', pathMatch: 'full' },
  { path: 'quotes', component: RandomQuotesComponent },
  { path: 'houses', component: HousesComponent },
  { path: 'houses/:slug', component: HouseDetailComponent },
  { path: 'persons', component: PersonsComponent },
  { path: 'persons/:slug', component: PersonDetailComponent },
  // { path: 'housesdetial', component: HouseDetailsComponent },
  { path: '**', redirectTo: '/houses', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HousesComponent ,
    PersonsComponent,
    HouseDetailComponent,
    PersonDetailComponent,
    RandomQuotesComponent,


  ],

  imports: [
    BrowserModule,
    HttpClientModule, // Add HttpClientModule to imports array
    RouterModule.forRoot(routes) ,
    MatTabsModule ,
    BrowserAnimationsModule ,
    MatToolbarModule ,
    MatButtonModule ,
    MatListModule ,
    MatExpansionModule ,
    FormsModule ,
    MatIconModule ,
    MatFormFieldModule ,
    MatAutocompleteModule ,
    ReactiveFormsModule ,
    MatInputModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent] ,

})
export class AppModule { }
