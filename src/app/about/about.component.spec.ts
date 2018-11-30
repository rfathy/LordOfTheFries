import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';
import { BannerInnerComponent } from '../banner-inner/banner-inner.component';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { LeaderService } from '../services/leader.service';

import { Observable, of } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MatRippleModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
//detect changes and test DOM elements
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';


describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  let leaderServiceStub = {
    getLeaders: function(): Observable<Leader[]> {
      return of(LEADERS);
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule, 
        MatRippleModule,
        FlexLayoutModule,
        RouterTestingModule.withRoutes(
          [{path: 'about', component: AboutComponent}]
        )
      ],
      declarations: [ 
        AboutComponent, 
        BannerInnerComponent 
      ],
      providers: [
        {provide:LeaderService, useValue: leaderServiceStub}
      ]
    })
    .compileComponents();

    let leaderService = TestBed.get(LeaderService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Leaders should be 4', ()=>{
    expect(component.leaders.length).toBe(4);
    expect(component.leaders[0].name).toBe("Peter Pan");
  });

  //detect changes and test DOM elements
  it('Leaders loaded in dom element', ()=>{
    fixture.detectChanges();

    let de: DebugElement;
    let el: HTMLElement;

    de = fixture.debugElement.query(By.css('label'));
    el = de.nativeElement;

    expect(el.textContent).toContain(LEADERS[0].abbr.toUpperCase());
  });
});
