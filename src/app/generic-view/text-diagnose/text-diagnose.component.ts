import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-diagnose',
  templateUrl: './text-diagnose.component.html',
  styleUrls: ['./text-diagnose.component.less']
})
export class TextDiagnoseComponent implements OnInit {
show:any;
indexVal:any;
  @Input() response: any;

  constructor() { }

  ngOnInit(): void {
  }
  enter(e) {
   this.indexVal =  e; 
}

leave(e) {
  this.indexVal = '';
}
}
