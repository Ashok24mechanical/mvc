
import { Component , OnInit} from '@angular/core';
import{ FormGroup,FormControl,Validators} from '@angular/forms';
import { json } from 'body-parser';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form:any = FormGroup;
  recieved:any;
  constructor(private api:ApiService) {}
  ngOnInit(){
    this.getdata();
    this.form = new FormGroup({
      name: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(10)]),
      role: new FormControl('',[Validators.required]),
    });
  }
  getdata(){
    this.api.getdata().subscribe((res) =>{
      
      console.log(res);
      this.recieved = res;
      return this.recieved;
    }
      )
  }
  data(data:any){
    console.log(this.form);
    return this.api.postdata(data).subscribe((res)=>{
      console.log(res);
      this.form.reset();
    })
    
  }
}
