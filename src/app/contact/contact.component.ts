import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { Feedback, ContactType } from '../shared/feedback';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

	// for form reset
	@ViewChild('fform') feedbackFormDirective;

	feedbackForm: FormGroup;
	feedback: Feedback;
	contactType = ContactType;
	formErrors = {
		'firstname': '',
	    'lastname': '',
	    'telnum': '',
	    'email': ''
	};

	validationMessages = {
		'firstname': {
			'required':      'First Name is required.',
			'minlength':     'First Name must be at least 2 characters long.',
			'maxlength':     'FirstName cannot be more than 25 characters long.'
		},
		'lastname': {
			'required':      'Last Name is required.',
			'minlength':     'Last Name must be at least 2 characters long.',
			'maxlength':     'Last Name cannot be more than 25 characters long.'
		},
		'telnum': {
			'required':      'Tel. number is required.',
			'pattern':       'Tel. number must contain only numbers.'
		},
		'email': {
			'required':      'Email is required.',
			'email':         'Email not in valid format.'
		},
	};

	constructor(private fb: FormBuilder) {
		this.createForm();
	}

	ngOnInit() {
	}

	createForm(){
		this.feedbackForm = this.fb.group({
			firstname: ['', [ Validators.required, Validators.minLength(2), Validators.maxLength(25) ]],
			lastname: ['', [ Validators.required, Validators.minLength(2), Validators.maxLength(25) ]],
			telnum: ['', [ Validators.required, Validators.pattern]],
			email: ['', [ Validators.required, Validators.email ]],
			agree: false,
			contacttype: 'None',
			message: ''
		});

		//observable provided by angular when changes detected in forms
		// subscribe to detect which feild had changed value
		this.feedbackForm.valueChanges.subscribe(data => this.onValueChanged(data));

		// (re)set validation messages
		this.onValueChanged();
	}

	// ? coz it is optional to have params .. this.onValueChanged();  &&  this.onValueChanged(data)
	onValueChanged(data?: any){
		//if feedbackform hasn't been created return without anything
		if(!this.feedbackForm){ return; }
		
		const form = this.feedbackForm;
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
		this.feedback = this.feedbackForm.value;
	    //reset takes object as parameter
	    this.feedbackForm.reset({
	    	firstname: '',
			lastname: '',
			telnum: '',
			email: '',
			agree: false,
			contacttype: 'None',
			message: ''
	    });
	    // on reset removes warn styling
	    this.feedbackFormDirective.resetForm();
	}
}
