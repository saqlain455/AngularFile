import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private _teacherServices: DataService) { }

  ngOnInit(): void {
  }
  idvalue='';
  del(){
    this._teacherServices.delData(this.idvalue)  
    .subscribe(res => {
      console.log(res);
      alert('Delete Successfully.');
    })
  }
}
