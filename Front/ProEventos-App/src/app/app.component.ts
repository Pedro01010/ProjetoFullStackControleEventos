import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { EventosComponent } from './eventos/eventos.component';
import { PalestrantesComponent } from "./palestrantes/palestrantes.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, EventosComponent, PalestrantesComponent]
})
export class AppComponent {
  title = 'ProEventos-App';
}
