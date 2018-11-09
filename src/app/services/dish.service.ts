import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

//importing classes not files
import { Dish } from '../shared/dish'; 
import { DISHES } from '../shared/dishes';


@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  // getDishes() method returns a promise instead of an array of dishes
  getDishes(): Observable<Dish[]> {
    //pipe -> observables
    return of(DISHES).pipe(delay(2000));
  }

  getDish(id: number): Observable<Dish> {
    return of(DISHES.filter((dish)=> (dish.id === id))[0]).pipe(delay(500));
  }

  getFeaturedDish(): Observable<Dish> {
    return of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(2000));
  }

  getDishIds(): Observable<number[] | any>{ // : Observable<number[]> ===> returning an observable of array
    return of(DISHES.map(dish => dish.id )).pipe(delay(500));
  }

}
