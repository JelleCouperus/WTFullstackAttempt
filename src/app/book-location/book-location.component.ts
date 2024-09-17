import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookLocation } from '../book-location';

@Component({
  selector: 'app-book-location',
  standalone: true,
  imports: [],
  template: `
    <section class="listing">
      <img class="listing-photo">
      <h2 class="listing-heading"></h2>
      <p class="listing-location"></p>
    </section>
  `,
  styles: ``
})
export class BookLocationComponent {
  @Input() bookLocation!: BookLocation;
}
