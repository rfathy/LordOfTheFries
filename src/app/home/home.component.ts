import { Component, OnInit } from '@angular/core';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion} from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';

import { flyDown, visibility, flyUp } from '../animations/app.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  //trigger name visibilty takes state with style and transformation
  animations: [
    flyDown(),
    flyUp()
  ]
})
export class HomeComponent implements OnInit {

	dish: Dish;
	dishes: Dish[];
	promotion: Promotion;
	leader: Leader;

	// inject 2 services
	constructor(
		private dishService: DishService, 
		private promotionService: PromotionService, 
		private leaderService: LeaderService
		) { }

	ngOnInit() {
	    this.dishService.getFeaturedDish().subscribe(dish => this.dish = dish);
	    this.promotionService.getFeaturedPromotion().subscribe(promotion => this.promotion = promotion);
	    this.leaderService.getFeaturedLeader().subscribe(leader => this.leader = leader);
	    this.dishService.getDishes().subscribe(dishes => this.dishes = dishes);
	}
}
