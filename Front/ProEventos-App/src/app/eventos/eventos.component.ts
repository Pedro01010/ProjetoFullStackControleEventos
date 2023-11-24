import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.scss'
})



export class EventosComponent {

  ngOnInit(): void {
    this.getEventos();
  }


public eventos: any


public getEventos():void{
  this.eventos = [{
    Tema:'Angular',
    Local:'Anápolis'
    },
    {
      Tema:'Angular',
      Local:'Anápolis'
      }
    ]
}


};






