import { trigger, state, style, animate, transition } from '@angular/animations'; 

export function visibility(){
	return trigger('visibility', [
  		state('shown', style({
  			opacity: 1,
  		})),
  		state('hidden', style({
  			opacity: 0,
  		})),
  		transition('* => *', animate('0.3s ease-in-out'))
  	]);
}

export function flyIn(){
	return trigger('flyIn', [
		state('*', style({
			opacity: 1,
			transform: 'translateX(0)'
		})),
		transition(':enter', [
			style({
				transform: 'translateX(100%)', 
				opacity: 0
			}),
			animate('0.3s ease-in')
		])
	]);
}

export function flyDown(){
	return trigger('flyDown', [
		state('*', style({
			opacity: 1,
			transform: 'translateY(0)'
		})),
		transition(':enter', [
			style({
				transform: 'translateY(-50%)', 
				opacity: 0
			}),
			animate('0.3s ease-in')
		])
	]);
}

export function flyUp(){
	return trigger('flyUp', [
		state('*', style({
			opacity: 1,
			transform: 'translateY(0)'
		})),
		transition(':enter', [
			style({
				transform: 'translateY(50%)', 
				opacity: 0
			}),
			animate('0.3s ease-in')
		])
	]);
}