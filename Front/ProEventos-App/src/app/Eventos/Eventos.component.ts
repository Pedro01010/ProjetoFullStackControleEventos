import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Eventos',
  templateUrl: './Eventos.component.html',
  styleUrls: ['./Eventos.component.scss']
})
export class EventosComponent implements OnInit {

  public eventos: any;
numRows: any;
numCols: any;
gridCards: any;

  constructor(private http:HttpClient) { }

  ngOnInit():void {

    this.getEventos();
  }
   public getEventos():void{
    this.http.get('https://localhost:5001/api/eventos').subscribe(
      response => this.eventos = response,
      error => console.log(error)
    );


   }
}
