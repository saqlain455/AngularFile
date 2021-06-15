import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input()
  requiredFileType:string | undefined;

  fileName = '';
  uploadProgress:number | undefined;
  uploadSub: Subscription | undefined;

  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onFileSelected(event:any) {
      const file:File = event.target.files[0];
    
      if (file) {
          this.fileName = file.name;
          const formData = new FormData();
          formData.append("thumbnail", file);       
      }
  }

}




function finalize(arg0: () => void): import("rxjs").OperatorFunction<import("@angular/common/http").HttpEvent<Object>, unknown> {
  throw new Error('Function not implemented.');
}
// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { FormGroup, FormControl, Validators,ReactiveFormsModule} from '@angular/forms';
      
// @Component({
//   selector: 'app-form',
//   templateUrl: './form.component.html',
//   styleUrls: ['./form.component.css']
// })
// export class FormComponent implements OnInit {
//    myForm = new FormGroup({
//     name: new FormControl('', [Validators.required, Validators.minLength(3)]),
//     file: new FormControl('', [Validators.required]),
//     fileSource: new FormControl('', [Validators.required])
//   });
    
//   constructor(private http: HttpClient) { }
//   ngOnInit(): void {
//     throw new Error('Method not implemented.');
//   }
      
//   get f(){
//     return this.myForm.controls;
//   }
     
//   onFileChange(event:any) {
  
//     if (event.target.files.length > 0) {
//       const file = event.target.files[0];
//       this.myForm.patchValue({
//         fileSource: file
//       });
//     }
//   }
     
//   submit(){
//     const formData = new FormData();
//     formData.append('file', this.myForm.get('fileSource')?.value);
   
//     this.http.post('http://localhost:8001/upload.php', formData)
//       .subscribe(res => {
//         console.log(res);
//         alert('Uploaded Successfully.');
//       })
//   }
// }




