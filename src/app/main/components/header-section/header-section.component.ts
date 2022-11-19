import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.css']
})
export class HeaderSectionComponent implements OnInit {

  @Input() title:string = 'No definido';
  @Input() icon:string = 'fa-solid fa-circle-question';
  @Input() route:string = '/default';

  constructor() { }

  ngOnInit(): void {
  }

  isCurrentRoute():boolean {
    let path:string = window.location.pathname;

    return path.includes(this.route);
  } 
}
