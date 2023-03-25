import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http:HttpClient) { }
  geturl='http://localhost:8080/get';
  getonep='http://localhost:8080/getone';
  posturl = 'http://localhost:8080/post';


  getdata(){
    return this.http.get(this.geturl).pipe(map((res)=>{
      return res;
    }))
  }
  postdata(data:any){
    return this.http.post(this.posturl,data).pipe(map(res=>{
      return res;
    }))
  }
  getone(data:any){
    return this.http.post(this.getonep,data).pipe(map(res=>{
      return res;
    }))
  }
}
