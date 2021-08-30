import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Property } from 'src/app/property.decorator';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements OnInit {

  constructor() { }
  @Input() name?: string;
  ngOnInit(): void {
    console.log(this.name);
  }

}
