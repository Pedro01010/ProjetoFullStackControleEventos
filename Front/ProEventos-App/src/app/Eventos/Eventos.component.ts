import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-Eventos',
  templateUrl: './Eventos.component.html',
  styleUrls: ['./Eventos.component.scss']
})
export class EventosComponent implements OnInit {
  isCollapsed = false;
  public eventos: any = [];
  public eventosFiltrados :any =[];
  widhtImage:number = 150;
  marginImage:number = 2;
  exibirImagem: boolean =true;
  exibirBotao: boolean =true;
  private _filtroLista: string = '';

  public get filtroLista(): string{
    return this._filtroLista;
  }

  public set filtroLista(value: string){
   this._filtroLista = value
   this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos;
  }

  filtrarEventos(Filtrarpor: string) : any{
  Filtrarpor= Filtrarpor.toLocaleLowerCase();
  return this.eventos.filter(
    (   evento: { tema: string; }) => evento.tema.toLocaleLowerCase().indexOf(Filtrarpor) !== -1
  )
  }
  constructor(private http:HttpClient) { }

  ngOnInit():void {

    this.getEventos();
  }
  alterarImagem(){
    this.exibirImagem=!this.exibirImagem;
  }
  alterarBotao(){
    this.exibirBotao=!this.exibirBotao;
  }
   public getEventos():void{
    this.http.get('https://localhost:5001/api/eventos').subscribe(

      response => {
        this.eventos = response;
        this.eventosFiltrados=this.eventos;
       },
      error => console.log(error),

    );



   }
}
