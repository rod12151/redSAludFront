import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-forms',
  imports: [],
  templateUrl: './forms.html',
  styleUrl: './forms.css'
})
export class Forms {
  name = signal('');
  email = signal('');
  save() {
    console.log('Nombre:', this.name());
    console.log('Email:', this.email());
  }

}
