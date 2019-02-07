import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  @Input()
  private rating = 0;

  @Output()
  private ratingChange: EventEmitter<number> = new EventEmitter(); // the name xxChange here is important

  @Input()
  private readonly = true;

  private stars: boolean[];
  constructor() { }

  ngOnInit() {
    this.stars = [];
    for (let i = 0; i < 5; i++) {
      this.stars.push(i >= this.rating);
    }
  }

  clickStar(index: number) {
    if (!this.readonly) {
      this.rating = index + 1;
      this.ngOnInit();
      this.ratingChange.emit(this.rating);
    }
  }

}
