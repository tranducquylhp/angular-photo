import { Component, OnInit } from '@angular/core';
import {PhotoService} from '../photo.service';
import {Photo} from '../photo';
import {Subscription} from 'rxjs';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-photo-edit',
  templateUrl: './photo-edit.component.html',
  styleUrls: ['./photo-edit.component.scss']
})
export class PhotoEditComponent implements OnInit {
  messageSuccess = '';
  messageError = '';
  sub: Subscription;
  photo: Photo;
  constructor(private photoService: PhotoService,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.photoService.getById(id).subscribe(next => {
        this.photo = next;
      }, error => {
        console.log(error);
      });
    });
  }

  save(photo: Photo) {
    this.photoService.edit(photo.id, photo).subscribe(() => {
      this.messageSuccess = 'Edit success';
    }, error => {
      this.messageError = 'Edit error';
    });
  }
}
