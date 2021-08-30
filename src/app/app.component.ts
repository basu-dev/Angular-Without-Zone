import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { interval } from 'rxjs';
import { Observable, of } from 'rxjs';
import { Property } from './property.decorator';

export interface User {
  name: string;
  username: string;
  email: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'small';

  @Property() count = 0;
  @Property() user!: Observable<User>;

  ngOnInit() {
    interval(1000).subscribe(data => {
      this.fetchData(data);
    });
  }
  async fetchData(id: number) {
    this.user = of(await fetch('https://jsonplaceholder.typicode.com/users/' + id).then(res => res.json()));
  }

  increase() {
    this.count++;
  }
  decrease() {
    this.count--;
  }
  reset() {
    this.count = 0;
  }
}

