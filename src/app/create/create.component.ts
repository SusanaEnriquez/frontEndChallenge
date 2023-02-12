import { Component, OnInit } from '@angular/core';
import { JSONPlaceholderService } from '../services/jsonplaceholder.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(public JSONPlacheholder:JSONPlaceholderService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.JSONPlacheholder.addPost(this.JSONPlacheholder.form.value);
    this.JSONPlacheholder.form.reset();
  }
}
