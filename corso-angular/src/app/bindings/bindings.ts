import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-bindings',
  imports: [],
  templateUrl: './bindings.html',
  styleUrl: './bindings.css'
})
export class Bindings {
  // crea un signal se si aggiorna alla modifica
  studente: WritableSignal<string> = signal("Federico");

  // signal per un contatore numerico
  contatore: WritableSignal<number> = signal(0);
  immagini: string []= ['corso-angular/public/500.png', 'corso-angular/public/aereo.png', 'corso-angular/public/scooter.png'];
  indiceImmagine: WritableSignal<number> = signal(0);
  cambiaNome(): void {
    this.studente.set("Luca Boschi");
  }

  incrementa(): void {
    this.contatore.update(n => n + 1);
  }

  decrementa(): void {
    this.contatore.update(n => n - 1);
  }
}
