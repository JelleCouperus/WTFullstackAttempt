import {Component} from '@angular/core';
import { BookWebPageComponent } from './book-web-page/book-web-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BookWebPageComponent],
  template: `
    <main>
      <header class="brand-name">
        <img class="brand-logo" src="" alt="logo" aria-hidden="true" />
      </header>
      <section class="content">
        <app-book-web-page></app-book-web-page>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'books';
}
