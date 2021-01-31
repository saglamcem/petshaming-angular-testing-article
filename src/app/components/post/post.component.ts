import { Component, Input, OnInit } from '@angular/core';
import { PetPost } from '../../models/pet.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post!: PetPost;

  constructor() { }

  ngOnInit(): void {}
}
