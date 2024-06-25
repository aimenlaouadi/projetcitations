import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { CitationInterface } from '../shared/services/entites';
import { CommonModule } from '@angular/common';
import { citations } from '../shared/services/bdd';

      

@Component({
  selector: 'app-creation-de-citations',
  standalone: true,
  imports: [CommonModule, FormsModule,],
  templateUrl: './creation-de-citations.component.html',
  styleUrl: './creation-de-citations.component.css'
})
export class CreationDeCitationsComponent {

  citations: CitationInterface[] = citations;

  citation= '';
  author= '';
  year= '';
  category= '';
  rating='';
  image='';

  constructor() {
   
  }


  onSubmit() {
    const newCitation: CitationInterface = {
      id: this.citations.length + 1,
      citation: this.citation,
      author: this.author,
      year: parseInt(this.year),
      category: this.category,
      rating: parseFloat(this.rating),
      image: this.image
    };
    
    console.log(newCitation); 
    this.citations.push(newCitation);
       
}
  
}


 /*  if (this.citationForm.valid) {
      const newCitation: CitationInterface = {
        id: this.citationForm.controls.id.value,
        citation: this.citationForm.controls.citation.value,
        author: this.citationForm.controls.author.value,
        year: this.citationForm.controls.year.value,
        category: this.citationForm.controls.category.value,
        rating: parseFloat(this.citationForm.controls.rating.value),
        image: this.citationForm.controls.image.value
      };

      this.citations.push(newCitation);
      this.citationForm.reset();
    }
  } */