import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { HomeComponent } from '../home/home.component';

@Injectable({
  providedIn: 'root'
})
export class JSONPlaceholderService {

  post = this.fromHome.sendData;
  constructor(private http: HttpClient, public fromHome: HomeComponent) { }

  getData():Observable<any>{
    const url = "https://jsonplaceholder.typicode.com/posts"
    return this.http.get<any>(url)
  }

  getComments():Observable<any>{
    const url = "https://jsonplaceholder.typicode.com/comments"
    return this.http.get<any>(url)
  }

  form: FormGroup = new FormGroup({
    title: new FormControl(""),
    comments: new FormControl([]),
    body: new FormControl(""),
    category: new FormControl(""),
    bg: new FormControl("https://source.unsplash.com/random")
  });

  initializeFormGroup(){
    this.form.setValue({
      title: "",
      comments: [],
      body: "",
      category: "",
      bg: "https://source.unsplash.com/random"
    });
  }

  addPost(info: Array<any>){
    // this.post.unshift(info);
    // Se termino el tiempo
  }
}
