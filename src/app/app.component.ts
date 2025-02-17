import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'; // Importar ReactiveFormsModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'classcraft';
}
