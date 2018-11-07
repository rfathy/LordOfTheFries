import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})


export class MenuComponent implements OnInit {

	dishes: Dish[];

	constructor(private dishService: DishService) { }

	ngOnInit() {
		// subscribe to the observable returned from the service
    	this.dishService.getDishes().subscribe(dishes => this.dishes = dishes);
  	}

  	//Mix It Up
  	onClick(event) {
	    let target = event.target || event.srcElement || event.currentTarget;
	    let idAttr: string = target.innerText;
	    let mix = document.getElementsByClassName("mix");
	    if(idAttr == "Mains"){
	    	
	    	for(var i = 0; i < mix.length; i++){
	    		if(!mix[i].classList.contains("Mains"))
	    			mix[i].classList.add("hide");
	    		else mix[i].classList.remove("hide");
	    	}	   	
		}
		else if(idAttr == "Appetizer"){
	    	for(var i = 0; i < mix.length; i++){
	    		if(!mix[i].classList.contains("Appetizer"))
	    			mix[i].classList.add("hide");
	    		else mix[i].classList.remove("hide");
	    	}	    	
		}
		else if(idAttr == "Dessert"){
	    	for(var i = 0; i < mix.length; i++){
	    		if(!mix[i].classList.contains("Dessert"))
	    			mix[i].classList.add("hide");
	    		else mix[i].classList.remove("hide");
	    	}	    	
		}	   
		else if(idAttr == "All"){
			for(var i = 0; i < mix.length; i++){
	    		mix[i].classList.remove("hide");
	    	}	
		}

	}

}
