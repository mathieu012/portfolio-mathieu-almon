import { Component } from '@angular/core';

export interface Experience {
  companie: string;
  duree: string
  description: string;
}

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent {



}
