import { Component, OnInit } from '@angular/core';
import {PhotoService} from '../photo.service';
import {Photo} from '../photo';
import {Subscription} from 'rxjs';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-photo-delete',
  templateUrl: './photo-delete.component.html',
  styleUrls: ['./photo-delete.component.scss']
})
export class PhotoDeleteComponent implements OnInit {
  photo: Photo;
  messageSuccess = '';
  messageError = '';
  sub: Subscription;
  constructor(private photoService: PhotoService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.photoService.getById(id).subscribe(next => {
        this.photo = next;
      }, error => {
        this.messageSuccess = error.toString();
      });
    });
  }

  delete() {
    this.photoService.delete(this.photo.id).subscribe(() => {
      this.messageSuccess = 'Delete Success';
    }, () => {
      this.messageError = 'Delete Error';
    });
  }

}
