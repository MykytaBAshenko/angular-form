import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { MatSnackBar,MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  sendForm: FormGroup;
  whichHappen: Number;
  isFirstEmailOk;
  isSecondEmailOk;
  emailStringValidator = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.createForm();
    this.isFirstEmailOk = 1;
    this.isSecondEmailOk = 1;

   }

  ngOnInit(): void {
    this.whichHappen = 0;
  }
  createForm() {
    this.sendForm = this.fb.group({
      name1: ['', [ Validators.required] ],
      name2: ['', [ Validators.required] ],
      email1: ['', [Validators.email, Validators.required ] ],
      email2: ['', [Validators.email, Validators.required] ]
    });
  }
  checkFirstEmail(v) {
    if(this.emailStringValidator.test(v)){
      this.isFirstEmailOk = 1;
    }
    else 
    this.isFirstEmailOk = 0;
    console.log(this.isFirstEmailOk)
  }
  checkSecondEmail(v) {
    if(this.emailStringValidator.test(v)){
      this.isSecondEmailOk = 1;
    }
    else 
    this.isSecondEmailOk = 0;
  }
  formError(){
    this.whichHappen = -1;
  }
  
  formSuccess(){
    this.whichHappen = 1;
  }
  openSnackBar(type, message){
  this.snackBar.openFromComponent(CustomSnackBarComponent,{data:{type, message}})
  }
  
}


@Component({
  selector: 'custom-snackbar',
  template: `<div class="custom-snack-bar">
  <div class="custom-snack-bar-body">
  <div class="custom-snack-bar-body-icon">
    <svg *ngIf="data.type === -1" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.27 0L0 5.27V12.73L5.27 18H12.73C14.5 16.24 18 12.73 18 12.73V5.27L12.73 0H5.27ZM6.1 2H11.9L16 6.1V11.9L11.9 16H6.1L2 11.9V6.1L6.1 2ZM6.12 4.71L4.71 6.12L7.59 9L4.71 11.88L6.12 13.29L9 10.41L11.88 13.29L13.29 11.88L10.41 9L13.29 6.12L11.88 4.71L9 7.59" fill="#EF9A9A"/>
    </svg>
    <svg *ngIf="data.type === 1" width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.00004 16.42L0.790039 10.21L3.62004 7.38L7.00004 10.77L16.88 0.880005L19.71 3.71L7.00004 16.42Z" fill="#81C784"/>
</svg>

  </div>
  <div [ngClass]="data.type === -1 ? 'custom-snack-bar-error-text' : 'custom-snack-bar-success-text'">
  {{data.message}}
  </div>
  </div>
  <div>
            <svg class="custom-snack-bar-close" (click)="snackBarRef.dismiss()" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.25143 6L12 10.7486V12H10.7486L6 7.25143L1.25143 12H0V10.7486L4.74857 6L0 1.25143V0H1.25143L6 4.74857L10.7486 0H12V1.25143L7.25143 6Z" fill="white" fill-opacity="0.6"/>
</svg>
</div>
  </div>`
})
export class CustomSnackBarComponent{
  
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any,
  public snackBarRef: MatSnackBarRef<CustomSnackBarComponent>
  ) {
    this.data= data;
  }
}