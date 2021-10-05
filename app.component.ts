import { Component } from '@angular/core';
import { alunos } from './arquivo'; // importa variaveis de arquivo

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  lista_alunos = alunos; // exporta variaveis de arquivo alunos

};