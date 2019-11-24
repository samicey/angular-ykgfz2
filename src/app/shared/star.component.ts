import {Component, OnChanges, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector:'pm-star',
  templateUrl: './star.component.html',
  styleUrls:['./star.component.css']
})

export class StarComponent implements OnChanges{
  @Input() prodName: string;
  @Input()rating: number;
  starWidth: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  
  onClick(): void{
    this.ratingClicked.emit(`${this.prodName} has  ${this.rating} rating`)
  }

  ngOnChanges(): void{
    this.starWidth = this.rating * 75/5;
  }
}