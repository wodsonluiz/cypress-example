import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IComment } from '../../interfaces/IComment';

@Component({
  selector: 'app-comment-modal',
  templateUrl: './comment-modal.component.html',
  styleUrls: ['./comment-modal.component.css']
})
export class CommentModalComponent {

  constructor(public activeModal: NgbActiveModal) {}
  
  model: IComment = {
    name: '',
    comment: ''
  }

  dismiss() {
    this.activeModal.dismiss();
  }

  submit(form: FormGroup) {
    this.activeModal.close(form.value);
  }
}
