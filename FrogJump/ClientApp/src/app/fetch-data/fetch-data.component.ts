import { Component, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public currentBMI: number = 0;
  public height: number = 0;
  public weight: number = 0;
  public url = '';
  public Http: HttpClient;


  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.url = baseUrl;
    this.Http = http;
  }
  
  public incrementBMI() {
    //把這段寫完讓BMI計算出來的結果取到小數第二位
    //已經在Controllers底下幫你加了BMIController，裡面有個CalBMI的方法，你只要這邊能把參數丟過去就能算出答案了...

    debugger

    let param: HttpParams = new HttpParams;
    param = param.append('height', this.height.toString());
    param = param.append('weight', this.weight.toString());

    //this.Http.post<any>(this.url + "BMI/CalBMI",
    //  null,
    //  {
    //    params: param,
    //    observe: 'response'
    //  }
    //  ).subscribe(rs => {
    //  debugger
    //  this.currentBMI = rs.body;
    //});

    this.Http.post<any>(this.url + "BMI/CalBMI", null, { params: param })
      .subscribe(rs => {
        this.currentBMI = rs;
      });


    //this.Http.post<any>(this.url + "BMI/CalBMI2", { height: this.height, weight: this.weight })
    //  .subscribe(rs => {
    //    this.currentBMI = rs;
    //  });


  }
}

