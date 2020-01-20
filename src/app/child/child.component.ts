import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Form } from '../data/form';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() passData:Form;
  @Output() editEmit= new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleEdit(id:Number){
    this.editEmit.emit(id);
  }

}
