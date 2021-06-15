import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
   
  @Input()
  requiredFileType:string | undefined;

  fileName = '';
  uploadProgress:number | undefined;
  uploadSub: Subscription | undefined;
  formData = new FormData();
  message=''

  constructor(private _teacherServices: DataService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onFileSelected(event:any) {
      const file:File = event.target.files[0];
    
      if (file) {
          this.fileName = file.name;
          this.formData.append("filesent", file);       
      }
  }
 
  upload() {
    this.formData.append("description", this.message);  
        this._teacherServices.postData(this.formData)  
      .subscribe(res => {
        console.log(res);
        alert('Uploaded Successfully.');
      })
  }
}


function finalize(arg0: () => void): import("rxjs").OperatorFunction<import("@angular/common/http").HttpEvent<Object>, unknown> {
  throw new Error('Function not implemented.');
}