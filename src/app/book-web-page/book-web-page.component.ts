import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookLocationComponent } from '../book-location/book-location.component';
import { BookLocation } from '../book-location';

@Component({
  selector: 'app-book-web-page',
  standalone: true,
  imports: [CommonModule, BookLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter op titel">
        <button class="primary" type="button">Zoeken</button>
      </form>
    </section>
    <section class="results">
      <app-book-location></app-book-location>
    </section>
  `,
  styles: ``
})
export class BookWebPageComponent {
  bookLocationList: BookLocation[] = [
      {
        "id": 102,
        "titel": "Introduction to Algorithms",
        "auteur": "Thomas H. Cormen",
        "aantalExemplaren": 5,
        "afbeeldingURL": "https://dummyimage.com/200x300/000/fff&text=Algorithms"
      },
      {
        "id": 103,
        "titel": "Clean Code",
        "auteur": "Robert C. Martin",
        "aantalExemplaren": 3,
        "afbeeldingURL": "https://dummyimage.com/200x300/000/fff&text=Clean+Code"
      },
      {
        "id": 104,
        "titel": "Design Patterns: Elements of Reusable Object-Oriented Software",
        "auteur": "Erich Gamma",
        "aantalExemplaren": 4,
        "afbeeldingURL": "https://dummyimage.com/200x300/000/fff&text=Design+Patterns"
      },
      {
        "id": 105,
        "titel": "The Pragmatic Programmer",
        "auteur": "Andy Hunt",
        "aantalExemplaren": 6,
        "afbeeldingURL": "https://dummyimage.com/200x300/000/fff&text=Pragmatic+Programmer"
      },
      {
        "id": 106,
        "titel": "Refactoring: Improving the Design of Existing Code",
        "auteur": "Martin Fowler",
        "aantalExemplaren": 2,
        "afbeeldingURL": "https://dummyimage.com/200x300/000/fff&text=Refactoring"
      },
      {
        "id": 107,
        "titel": "Artificial Intelligence: A Modern Approach",
        "auteur": "Stuart Russell",
        "aantalExemplaren": 5,
        "afbeeldingURL": "https://dummyimage.com/200x300/000/fff&text=AI+Modern+Approach"
      },
      {
        "id": 108,
        "titel": "You Don't Know JS: Scope & Closures",
        "auteur": "Kyle Simpson",
        "aantalExemplaren": 3,
        "afbeeldingURL": "https://dummyimage.com/200x300/000/fff&text=You+Don%27t+Know+JS"
      },
      {
        "id": 109,
        "titel": "Effective Java",
        "auteur": "Joshua Bloch",
        "aantalExemplaren": 4,
        "afbeeldingURL": "https://dummyimage.com/200x300/000/fff&text=Effective+Java"
      },
      {
        "id": 110,
        "titel": "Eloquent JavaScript",
        "auteur": "Marijn Haverbeke",
        "aantalExemplaren": 3,
        "afbeeldingURL": "https://dummyimage.com/200x300/000/fff&text=Eloquent+JavaScript"
      },
      {
        "id": 111,
        "titel": "The Mythical Man-Month: Essays on Software Engineering",
        "auteur": "Frederick P. Brooks Jr.",
        "aantalExemplaren": 2,
        "afbeeldingURL": "https://dummyimage.com/200x300/000/fff&text=Mythical+Man-Month"
      },
      {
        "id": 112,
        "titel": "Code Complete",
        "auteur": "Steve McConnell",
        "aantalExemplaren": 5,
        "afbeeldingURL": "https://dummyimage.com/200x300/000/fff&text=Code+Complete"
      },
      {
        "id": 113,
        "titel": "Structure and Interpretation of Computer Programs",
        "auteur": "Harold Abelson",
        "aantalExemplaren": 4,
        "afbeeldingURL": "https://dummyimage.com/200x300/000/fff&text=SICP"
      }
    ]
}
