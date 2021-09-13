import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableHeaders } from 'src/app/constants';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() title:string;
  @Input() headers:TableHeaders[];
  @Input() records:any;
  @Output() tableEvent = new EventEmitter<any>();
  constructor() { }
  ngOnChanges(){}
  ngOnInit(): void {
  }

  /**
   * 
   * @param number 
   * 1 => Accept
   * 2 => Reject
   * 3 => Delete
   * 4 => Update
   */
  emitEvent(number:number){
    this.tableEvent.next({event:number});
  }

}
