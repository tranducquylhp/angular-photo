import { Component, OnInit } from '@angular/core';
import {PhotoService} from '../photo.service';
import {Photo} from '../photo';

@Component({
  selector: 'app-photo-create',
  templateUrl: './photo-create.component.html',
  styleUrls: ['./photo-create.component.scss']
})
export class PhotoCreateComponent implements OnInit {
  messageSuccess = '';
  messageError = '';
  constructor(private photoService: PhotoService) { }

  ngOnInit() {
  }

  add(photo: Photo) {
    this.photoService.create(photo).subscribe(() => {
      this.messageSuccess = 'Add success';
    }, error => {
      this.messageError = 'Add error';
    });
  }
}
