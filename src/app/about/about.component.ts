import { Component, OnInit } from '@angular/core';

import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';

import { flyIn, flyDown } from '../animations/app.animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  //trigger name visibilty takes state with style and transformation
  animations: [
  	flyIn(),
    flyDown()
  ]
})

export class AboutComponent implements OnInit {

	leaders: Leader[];

	constructor(private leaderService: LeaderService) { }

	ngOnInit() {
		this.leaderService.getLeaders().subscribe(leaders => this.leaders = leaders);
	}

}
