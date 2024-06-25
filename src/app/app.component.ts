import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CreatecitationComponent } from './createcitation/createcitation.component';
import { CreationDeCitationsComponent } from './creation-de-citations/creation-de-citations.component';
import { CitationlistComponent } from './citationlist/citationlist.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, HomeComponent, CreatecitationComponent, CreationDeCitationsComponent, CitationlistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'projetCitation';
}
