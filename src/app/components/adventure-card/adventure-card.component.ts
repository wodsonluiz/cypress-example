import { Component, Input } from '@angular/core';
import { IAdventure } from '../../interfaces/IAdventure';

@Component({
  selector: 'app-adventure-card',
  templateUrl: './adventure-card.component.html',
  styleUrls: ['./adventure-card.component.css']
})
export class AdventureCardComponent {
  @Input() adventure!: IAdventure;
}
