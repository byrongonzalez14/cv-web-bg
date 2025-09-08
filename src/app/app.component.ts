import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CvDisplayComponent } from './components/cv-display/cv-display.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, CvDisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cv-web-byron';
}
