import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() defaultView : boolean = true;
  @Input() modelData : object = {};
  
  constructor() { }

  ngOnInit(): void {
  }

}
