import { Component, OnInit, HostListener } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openLoginForm(){
  	//dialog service provides open method where i instruct it to open dialog component
  	this.dialog.open(LoginComponent, {panelClass: 'dialogOverride'});
  }

  /*$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".header").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".header").removeClass("active");
        }
    });
});

  @HostListener('window:scroll', ['$event'])

  checkScroll() {
      const scrollPosition = window.pageYOffset

      if (scrollPosition >= 360) {
        this.state = 'show'
      } else {
        this.state = 'hide'
      }

    }*/

}
