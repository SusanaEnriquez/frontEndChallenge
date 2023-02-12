import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class JSONPlaceholderService {

  constructor(private http: HttpClient) { }

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
  }}
