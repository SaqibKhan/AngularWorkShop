import { Component, OnInit, HostBinding } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-slid-bar02',
  templateUrl: './slid-bar02.component.html',
  styleUrls: ['./slid-bar02.component.css'],
  animations: [
    trigger('toggleMenu', [
      state('open', style({
        'margin-left': '0',
      })),
      state('close', style({
        'margin-left': '-244px',
      })),
      transition('open <=> close', animate('250ms ease-out')),
    ]),
  ]
})



export class SlidBar02Component implements OnInit {

  constructor() { }
  state: string = 'close';

  @HostBinding('@toggleMenu') get toggleState() {
    return this.state;
  }

  ngOnInit() {

  }


}