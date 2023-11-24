import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

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
constructor(private http:HttpClient){}

public getEventos():void{
  this.http.get('https://localhost:5001/api/eventos').subscribe(
    (response: any) => {
      this.eventos = response;
    },
    (error: any) => {
      console.log(error);
    }
  );


};
}





