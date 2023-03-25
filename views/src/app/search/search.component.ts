import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private api: ApiService) { }
data!: FormGroup
  ngOnInit(): void {

    this.data = new FormGroup({
      search : new FormControl('',[Validators.required, Validators.minLength(10),Validators.maxLength(10)])
    })
  }
  getpho(data: any){
    console.log(data);
    
    this.api.getone(data).subscribe((res) => {
      console.log(res);
      
    })
  }

}
