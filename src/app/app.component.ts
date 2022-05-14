import { Component, VERSION } from '@angular/core';

import { interval } from 'rxjs'; //1

import { fromEvent } from 'rxjs'; //2
/*
import { of, pipe, range, throwError, timer, zip } from 'rxjs'; //3
import { ajax } from 'rxjs/ajax'; //3
import { map, mergeMap, retryWhen } from 'rxjs/operators'; //3
*/
console.log(`Start of  log`);
//1

// Create an Observable that will publish a value on an interval
const secondsCounter = interval(3000000);
// Subscribe to begin publishing values
const subscription = secondsCounter.subscribe((n) =>
  console.log(`It's been ${3000 * (n + 1)} seconds since subscribing!`)
);
/*
//2
const el = document.getElementById('my-element')!;

// Create an Observable that will publish mouse movements
const mouseMoves = fromEvent<MouseEvent>(el, 'mousemove');

// Subscribe to start listening for mouse-move events
const subscriptionone = mouseMoves.subscribe((evt) => {
  // Log coords of mouse movements
  console.log(`Coords: ${evt.clientX} X ${evt.clientY}`);

  // When the mouse is over the upper-left of the screen,
  // unsubscribe to stop listening for mouse movements
  if (evt.clientX < 40 && evt.clientY < 40) {
    subscriptionone.unsubscribe();
  }
});

//2 end
*/

//3 start
/*
export function backoff(maxTries: number, delay: number) {
  return pipe(
    retryWhen((attempts) =>
      zip(range(1, maxTries + 1), attempts).pipe(
        mergeMap(([i, err]) => (i > maxTries ? throwError(err) : of(i))),
        map((i) => i * i),
        mergeMap((v) => timer(v * delay))
      )
    )
  );
}

ajax('/api/endpoint')
  .pipe(backoff(3, 250))
  .subscribe(function handleData(data) {

  });

//3 end

*/

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
}
