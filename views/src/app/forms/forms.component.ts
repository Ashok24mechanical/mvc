import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  form !: FormGroup;
  recieved: any
  subject1: Number = 0
  subject2: Number = 0
  subject3: Number = 0
  subject4: Number = 0
  subject5: Number = 0
  totalvalue: Number = 0
  spliceuser: any
  acknoledgementno !: number
  age: any
  showAge:any
  citizenship: any
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getdata();
    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      subject: new FormGroup({
        sub1: new FormControl('', [Validators.required,Validators.min(1),Validators.max(100)]),
        sub2: new FormControl('', [Validators.required]),
        sub3: new FormControl('', [Validators.required]),
        sub4: new FormControl('', [Validators.required]),
        sub5: new FormControl('', [Validators.required]),
      }),
      phonenumber: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
      total: new FormControl({value:'',disabled:true}, [Validators.required]),
      date : new FormControl('', [Validators.required]),
      ages : new FormControl({value:'',disabled:true}, [Validators.required]),
      citizen : new FormControl({value:'',disabled:true}, [Validators.required]),
    });
  }

  sum() {
    let value1 = this.form.get('subject.sub1')?.value
    let value2 = this.form.get('subject.sub2')?.value
    let value3 = this.form.get('subject.sub3')?.value
    let value4 = this.form.get('subject.sub4')?.value
    let value5 = this.form.get('subject.sub5')?.value
    // console.log(value1);
    // console.log(value2);
    // console.log(value3);
    // console.log(value4);
    // console.log(value5);
    let data1 = value1 && value2 !== null
    let data2 = value3 && value4 && value5 !== null
    // value1 && value2 && value3 && value4 && value5 !== null
    if(data1 && data2){
      this.totalvalue =  value1 + value2 + value3 + value4 + value5
    }else{
      null
    }

    // value1 && value2 && value3 && value4 && value5 !== null ? this.totalvalue = value1 + value2 + value3 + value4 + value5 : null;
    
  }

  
  data(data: any) {
    let username = this.form.get('username')?.value;
    console.log(username);
    if(username !== null ){
      let value1 = this.form.get('subject.sub1')?.value
      let value2 = this.form.get('subject.sub2')?.value
      let value3 = this.form.get('subject.sub3')?.value
      let value4 = this.form.get('subject.sub4')?.value
      let value5 = this.form.get('subject.sub5')?.value

      let data1 = value1 && value2 !== null
      let data2 = value3 && value4 && value5 !== null
      // value1 && value2 && value3 && value4 && value5 !== null
      if(data1 && data2){
        this.totalvalue =  value1 + value2 + value3 + value4 + value5
      }else{
        null
      }
      
      let data = username.slice(0, 3)
      let num = Math.floor(Math.random() * 1000 + 10000)
      this.acknoledgementno = data + num;
      console.log(this.acknoledgementno);
    }else{
      alert('Please Enter Username')
    }
    data.total = this.totalvalue
    data.ak =this.acknoledgementno
    data.citizen = this.citizenship
    data.ages = this.showAge
    console.log(this.form);
    console.log(data);
    
    return this.api.postdata(data).subscribe((res) => {
      console.log(res);
      this.form.reset();
    })
    
  }
  ageCalculator(){
    let date = this.form.get('date')?.value
    if(date){
      const convertAge = new Date(date);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      this.showAge = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
      console.log(this.showAge);
      
    }
    if(this.showAge <= 18){
      this.citizenship = 'Minor'
    }
    if(this.showAge > 18 && this.showAge <=60){
      this.citizenship = 'Major'
    }
    if(this.showAge >60){
      this.citizenship = 'Senior Citizen'
    }
  }
  
  getdata() {
    this.api.getdata().subscribe((res) => {
      console.log(res);
      this.recieved = res;
      return this.recieved;
    })
  }
}
