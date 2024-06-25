import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { citations } from '../shared/services/bdd';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent{

citations = citations;

}
