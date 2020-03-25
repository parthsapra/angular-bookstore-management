import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BookData } from "../bookData.model";
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
books=BookData;
getId=this.books.length+1;
constructor(private formBuilder:FormBuilder,private router:Router){}
  bookAddFormGroup:FormGroup;
  ngOnInit(){
this.bookAddFormGroup=this.formBuilder.group({
  bookId:[this.getId,Validators.required],
  bookTitle:["",Validators.required],
  edition:["",Validators.required],
  author:["",Validators.required],
  price:["",Validators.required],
  publisher:["",Validators.required],
  bookCount:["",Validators.required]
});
  }
addBook(){
    
  this.books.push(this.bookAddFormGroup.value);
  alert("book added successfully!!");
  this.router.navigateByUrl("");
}

}