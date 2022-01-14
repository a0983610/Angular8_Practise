import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})

export class CounterComponent {
  public currentBMI:number = 0;
  public height:number = 0;
  public weight: number = 0;

  public incrementBMI() {
    //把這段寫完讓BMI計算出來的結果取到小數第二位
    debugger
    //this.height = (Number)((<HTMLInputElement>document.getElementById("height")).value);
    //this.weight = (Number)((<HTMLInputElement>document.getElementById("weight")).value);


    this.currentBMI = this.weight / ((this.height / 100) * (this.height / 100));
    this.currentBMI = Math.round(this.currentBMI * 100) / 100;
  }
}
