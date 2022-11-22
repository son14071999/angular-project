import { Component, EventEmitter, Input, Output, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit, OnChanges {
  @Input()
  rating: any

  @Output()
  ratingCLicked: EventEmitter<string> = new EventEmitter<string>()

  constructor() { }
  ngOnChanges(change: SimpleChanges): void {
    console.log(change)
    // if(change == 'Rating') {
    //   console.log('123')
    // }else{
    //   console.log('234')
    // }
  }

  ngOnInit(): void {
  }

  rate() {
    console.log('Rating')
    this.ratingCLicked.emit(`Rating: ${this.rating}`)
  }

}
