import { Component } from '@angular/core';

@Component({
  selector: 'app-table-contents',
  templateUrl: './table-contents.component.html',
  styleUrl: './table-contents.component.css'
})
export class TableContentsComponent {

  scrollToSection(sectionId: string): void {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
