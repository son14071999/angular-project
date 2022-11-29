import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { RestApiService } from '../../services/rest-api.service';
import { Employee } from '../../models/Employee';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {
  employee!: Employee
  btnDisable = false
  url ='http://0.0.0.0:3030/v1/api/accounts'


  constructor(private rest: RestApiService,
    private data: DataService) { }

  ngOnInit(): void {
  }

  validate(): boolean {
    return true
  }

  save() {
    this.btnDisable = true

    if(this.validate()){
      this.rest.post(this.url, this.employee)
      .then(data => {
        this.data.success('Employee is saved')
        this.btnDisable = false
      }).catch((err: any) => {
        this.data.error(err['message'])
      })
    }
  }

}
