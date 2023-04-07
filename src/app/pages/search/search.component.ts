import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { MovieApiService } from 'src/app/service/movie-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{

  constructor(private service:MovieApiService) {}

  ngOnInit(): void {
    
  }

  searchResult:any;
  searchForm = new FormGroup({
    'movieName' :new FormControl(null)
  });

  submitForm() {
    console.log(this.searchForm.value);
    this.service.getSearchMovie(this.searchForm.value)
      .subscribe((result) => {
        console.log(result);
        this.searchResult = result.results;
      })
  }

}
