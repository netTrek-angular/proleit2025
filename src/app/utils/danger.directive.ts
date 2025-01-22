import {Directive, HostBinding, HostListener, input, output} from '@angular/core';

@Directive({
  selector: 'button[plDanger]'
})
export class DangerDirective {
  confirmed = output(); // erweiterte Attribute und Ereignisse können für Direktiven Nachgelagert sein
  plDanger = input ('plDanger'); // wenn der input name === attributs name der Direktive kann ich gleichzeitig werte durchreichen

  @HostBinding('style.color') color = 'red'; // Jedes Element (in diesem Ball Button) dass das Attribut trägt, wird rote Schriftfarbe bekommen
  @HostBinding('style.fontWeight') fontWeight = 'bold'; // Jedes Element (in diesem Ball Button) dass das Attribut trägt, wird fette Schrift bekommen

  @HostListener('click') //klickt man auf den danger button wird ein cofirm Dialg des Browser geöffnet
  onClick() {
    if ( confirm( this.plDanger() === '' ? 'bist du sicher?' : this.plDanger() ) ) {
      // bestätigt man im Dialog die Nachricht wird das Direktiv-Eigene Event gefeuert das nur nach Bestätigung gefeuert wird
      this.confirmed.emit();
    }
  }
}
