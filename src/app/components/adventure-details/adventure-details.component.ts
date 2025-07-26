import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommentModalComponent } from '../comment-modal/comment-modal.component';
import { IAdventure } from '../../interfaces/IAdventure';
import { DataService } from '../../services/DataService';

@Component({
  selector: 'app-adventure-details',
  templateUrl: './adventure-details.component.html',
  styleUrls: ['./adventure-details.component.css']
})
export class AdventureDetailsComponent implements OnInit {

  adventure: IAdventure = {
    id: 0,
    title: '',
    image: '',
    description: '',
    level: '',
    duration: '',
    mountainRange: '',
    numberOfParticipants: '',
    availability: '',
    defaultCommentsLength: 0,
    comments: []
  }
  
  constructor(private route: ActivatedRoute, private dataService: DataService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.dataService.getAdventureById(params['id']).subscribe(adventure => {
        this.adventure = adventure;
      })
    })
  }

  handleModal() {
    const modalRef = this.modalService.open(CommentModalComponent).result.then(
      (result) => {
        this.dataService.updateComments(this.adventure.id, [...this.adventure.comments, result])
          .subscribe(adventure => this.adventure = adventure);
      },
      (_reason) => {}
    );
  }

  resetComments() {
    this.dataService.updateComments(this.adventure.id, this.adventure.comments.slice(0, this.adventure.defaultCommentsLength))
      .subscribe(adventure => this.adventure = adventure);
  }
}
