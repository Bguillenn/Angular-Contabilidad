import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit {

  @Input() route: string = 'NO DEFINED';

  constructor() { }

  ngOnInit(): void {
  }

}
