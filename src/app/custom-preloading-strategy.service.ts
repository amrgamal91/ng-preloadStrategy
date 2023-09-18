import { Injectable } from '@angular/core';
import { Observable, of, timer  } from 'rxjs';
import { flatMap, mergeMap } from 'rxjs/operators'
 
import { PreloadingStrategy, Route } from '@angular/router';
 
/**
 * to test this preload strategy : 
 * run the app and wait in the console , you will find that admin module will be loaded afger 5000 ms
 * and user module will be loaded after 1000 ms 
 */
@Injectable()
export class CustomPreloadingStrategy implements PreloadingStrategy {
 
    preload(route: Route, loadMe: () => Observable<any>): Observable<any> {
    
    if (route.data && route.data['preload']) {
      var delay:number=route.data['delay']
      console.log('preload called on '+route.path+' with a delay of '+delay);
      return timer(delay).pipe(
        mergeMap( _ => { 
          console.log("Loading now "+ route.path+' module');
          return loadMe() ;
        }));
    } else {
      console.log('no preload for the path '+ route.path);
      return of(null);
    }
  }
}