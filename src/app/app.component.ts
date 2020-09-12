import { Component, VERSION, OnInit } from '@angular/core';
import { of , from } from 'rxjs';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  ngOnInit() {
    of(2, 4, 6, 8).subscribe(
      x => console.log(x), 
      err => console.log(err));

    
    from([20, 15, 10, 5]).subscribe(
      x => console.log(`Item is.... ${x}`),
      err => console.log(err),
      () => console.log(`Completed`)
    );

    of('Apple1', 'Apple2', 'Apple3').subscribe(
      apple => console.log(`Apple name is ... ${apple}`),
      err => console.log(`Error is... ${err}`),
      () => console.log('No more Apples, EOD')
    );
  }
}
