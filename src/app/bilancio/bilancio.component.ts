import { Component } from '@angular/core';

@Component({
  selector: 'app-bilancio',
  templateUrl: './bilancio.component.html',
  styleUrls: ['./bilancio.component.css']
})
export class BilancioComponent {
  bilancio: number[] = [];

  numero: number = 0;

  aggiungiEntrata(){
    if(this.numero <= 0)
    {
      alert("non inserire numeri negativi")
    }
    else
    {
      this.bilancio.push(this.numero)
      this.numero = 0;

    }
  }

  aggiungiUscita(){
    if(this.numero <= 0)
    {
      alert("non inserire numeri negativi")
    }
    else
    {
    this.bilancio.push(-this.numero)
    this.numero = 0;
    }
  }

  rimuoviMovimento(index: number){
    this.bilancio.splice(index,1)
  }

  sommaMovimenti(){
    let somma = 0;
    for(let i = 0; i < this.bilancio.length; i++)
    {
      somma += this.bilancio[i];
    }
    return somma;
  }
}
