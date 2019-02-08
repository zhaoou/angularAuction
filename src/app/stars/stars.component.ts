import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {
  @Input()
  rating = 0;

  @Output()
  private ratingChange: EventEmitter<number> = new EventEmitter(); // the name xxChange here is important

  @Input()
  private readonly = true;

  stars: boolean[];
  constructor() { }

  ngOnInit() {
    // this.stars = [];
    // for (let i = 0; i < 5; i++) {
    //   this.stars.push(i >= this.rating);
    // }
  }

  clickStar(index: number) {
    if (!this.readonly) {
      this.rating = index + 1;
      // this.ngOnInit();
      this.ratingChange.emit(this.rating);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.stars = [];
    for (let i = 0; i < 5; i++) {
      this.stars.push(i >= this.rating);
    }
  }

}
