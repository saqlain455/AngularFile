import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { saveAs } from 'file-saver';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser'
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private _teacherServices: DataService,private sanitized: DomSanitizer) { }

  ngOnInit(): void {
  }
  idvalue='';
  imageurl: SafeUrl | undefined 
  downl(){
    this._teacherServices.downlData(this.idvalue)  
    .subscribe(res => {
      var mediaType = 'application/pdf'
      console.log(res);
    //  alert(res);
      // var file = new Blob([res.content.data.data], {type:res.content.data.contentType});
      // var fileURL = URL.createObjectURL(file);
      
      
      // var blob = new Blob([res], { type: mediaType });
      // saveAs(blob, 'report.pdf');

      //window.open(fileURL);
      // let blob = new Blob([res.content.data], { type: 'blob'});
      //   let url = window.URL.createObjectURL(blob);
      //   let pwa = window.open(url);
      //   if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
      //       alert( 'Please disable your Pop-up blocker and try again.');
      //   }

      let TYPED_ARRAY = new Uint8Array(res.content.data.data);
      const STRING_CHAR = TYPED_ARRAY.reduce((data, byte)=> {
        return data + String.fromCharCode(byte);
        }, '');
        let base64String = btoa(STRING_CHAR);
//        this.imageurl = this.sanitized.bypassSecurityTrustUrl('data:image/jpg/png/pdf;base64,' + base64String);
        console.log(this.imageurl)
        // window.open('data:image/pdf;base64,' + base64String);
       saveAs('data:image/jpeg/pdf;base64,' + base64String, 'Assig.pdf');

    })
  }

}
