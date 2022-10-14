import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Torneo } from 'src/app/models/torneo';

@Component({
  selector: 'app-demo-table',
  templateUrl: 'demo-table.component.html',
  styleUrls: ['./demo-table.component.css']
})
export class DemoTableComponent implements OnInit {
  torneo: Torneo[] = [
    {
      juego: 'FIFA',
      modalidad: 'offline',
      fechaInicio: new Date (2022, 0, 1),
      fechaFin: new Date(2022, 3, 30),
      inscripcionAbierta: true,
      imagen: 'https://esports.eldesmarque.com/wp-content/uploads/2022/07/FIFA-233.jpg'
    },
    {
      juego: 'Rocket League',
      modalidad: 'Presencial',
      fechaInicio: new Date (2022, 0, 1),
      fechaFin: new Date(2022, 3, 28),
      inscripcionAbierta: false,
      imagen:'https://imjustcreative.com/wp-content/uploads/2017/03/Rocket-League-Game-Logo-Design-750x304.jpg'
    },
    {
      juego: 'GTA V',
      modalidad: 'online',
      fechaInicio: new Date (2022, 0, 1),
      fechaFin: new Date(2022, 3, 28),
      inscripcionAbierta: true,
      imagen: 'https://www.freepnglogos.com/uploads/gta-5-logo-png/grand-theft-auto-v-1.png',
    },
    {
    juego: 'CS GO',
      modalidad: 'Presencial',
      fechaInicio: new Date (2022, 0, 1),
      fechaFin: new Date(2022, 3, 28),
      inscripcionAbierta: false,
      imagen: 'https://i.imgur.com/LitsEzw.jpeg'
    },
  ]
  columnas: string[] = ['juego', 'modalidad', 'fechaInicio', 'fechaFin', 'inscripcionAbierta', 'acciones']
  dataSource: MatTableDataSource<Torneo> = new MatTableDataSource<Torneo> (this.torneo);
  constructor() { }

  ngOnInit(): void {
  }

  filtrarJuego(event: Event){
const valorObtenido = (event.target as HTMLInputElement).value;
this.dataSource.filterPredicate = function(juego: Torneo, filtro: string){
  return juego.juego.toLocaleLowerCase().includes(filtro.toLocaleLowerCase())
};
this.dataSource.filter = valorObtenido.trim().toLowerCase()

 }

}
