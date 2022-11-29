import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-mesage',
  templateUrl: './mesage.component.html',
  styleUrls: ['./mesage.component.scss']
})
export class MesageComponent implements OnInit {

  constructor(public data: DataService) { }
  expression = true
  ngOnInit(): void {
  }

}
