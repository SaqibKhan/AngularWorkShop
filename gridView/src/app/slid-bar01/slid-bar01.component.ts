import { Directive, HostListener, HostBinding, Component, OnInit } from '@angular/core';
//https://stackblitz.com/edit/angular-z6hrob?file=src%2Fapp%2Fsidebar.directive.ts
//https://www.codeply.com/go/GQ1Mz8RqZB/bootstrap-4-sidebar-menu-(toggleable)
//https://github.com/yuvalsuede/sidenav-example
@Component({
  selector: 'app-slid-bar01',
  exportAs: 'appSidebar',
  templateUrl: './slid-bar01.component.html',
  styleUrls: ['./slid-bar01.component.css']
})

export class SlidBar01Component implements OnInit {
 

  @HostBinding('class.is-open') click = false;

  constructor() { }

  ngOnInit() {
  }



  @HostListener('click') onClic() {
    this.click = !this.click;
    }
}
