import { Component, Input } from '@angular/core';
import { faDumbbell, faClock, faMountain, faUserFriends, faCalendar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-adventure-info',
  templateUrl: './adventure-info.component.html',
  styleUrls: ['./adventure-info.component.css']
})
export class AdventureInfoComponent {

  @Input() level!: string;
  @Input() duration!: string;
  @Input() mountainRange!: string;
  @Input() numberOfParticipants!: string;
  @Input() availability!: string;

  icons = {
    level: faDumbbell,
    duration: faClock,
    mountainRange: faMountain,
    numberOfParticipants: faUserFriends,
    availability: faCalendar
  }
}
