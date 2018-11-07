import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comment } from '../shared/comments';
import 'hammerjs';
import {MatSliderModule} from '@angular/material/slider';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss']
})
export class DishDetailComponent implements OnInit {

	// for form reset
	@ViewChild('myForm') commentFormDirective;

	commentForm: FormGroup;
	comment: Comment;
	formErrors = {
		'author': '',
	    'comment': ''
	};
	validationMessages ={
		'author': {
			'required':      'Author name is required.',
			'minlength':     'Author name must be at least 2 characters long.',
			'maxlength':     'Author name cannot be more than 25 characters long.'
		},
		'comment': {
			'required':      'Message is required.',
			'minlength':     'Message must be at least 2 characters long.'
		},
	}

	dish: Dish;
	dishIds: number[];
	prev: number;
	next: number;

	constructor(
		private dishservice: DishService,
		private location: Location,
		private route: ActivatedRoute,
		private fb: FormBuilder
	) {this.createForm();}


	// ///////////////////Dish details stuff//////////////////// //
	//when dish component is initialized
	ngOnInit() {
		this.dishservice.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
		this.route.params.pipe(switchMap((params: Params) => this.dishservice.getDish(+params['id'])))
			.subscribe(dish => {
				this.dish = dish;
				this.setPrevNext(dish.id);
			});
	}

	setPrevNext(dishId: number){
		let index = this.dishIds.indexOf(dishId);
		// % to wrap around when get to last or first
		this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
		this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
	}

	goBack(): void{
		this.location.back();
	}

	// ///////////////////Comment stuff//////////////////// //
	createForm(){
		this.commentForm = this.fb.group({
			author: ['', [ Validators.required, Validators.minLength(2), Validators.maxLength(25) ]],
			rating: 5,
			comment: ['', [ Validators.required, Validators.minLength(2), Validators.maxLength(25) ]]
		});

		//observable provided by angular when changes detected in forms
		// subscribe to detect which feild had changed value
		this.commentForm.valueChanges.subscribe(data => this.onValueChanged(data));

		// (re)set validation messages
		this.onValueChanged();
	}

	// ? coz it is optional to have params .. this.onValueChanged();  &&  this.onValueChanged(data)
	onValueChanged(data?: any){
		//if commentForm hasn't been created return without anything
		if(!this.commentForm){ return; }
		
		const form = this.commentForm;
		for(const field in this.formErrors){
			//clear previously attached msgs
			this.formErrors[field] = '';
			//get control to that specific field
			const control = form.get(field);
			//if control not null nor dirty
			if( control && control.dirty  && !control.valid ){
				//check what kind of error has been added
				const messages = this.validationMessages[field];
				for(const key in control.errors){
					this.formErrors[field] += messages[key] + ' ';
				}
			}
		}
	}

	onSubmit(){

		this.comment = this.commentForm.value;		
		this.commentForm.reset({
	    	author: '',
			rating: 5,
			comment: ''			
	    });
	    // on reset removes warn styling
	    this.commentFormDirective.resetForm();
	    
	}

}