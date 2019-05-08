import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../../service/auth.service'
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register-verification',
  templateUrl: './register-verification.component.html',
  styleUrls: ['./register-verification.component.scss']
})
export class RegisterVerificationComponent implements OnInit {

  loginForm: FormGroup
  errors: any[] = []
  notifyMessage: string = ''

  constructor(private auth: AuthService,
              private router: Router,
              private route: ActivatedRoute ) { }

  ngOnInit() {
    let navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');

    this.route.params.subscribe(
      (params) => {
        if(params['registered'] == 'success') {
          this.notifyMessage = "You have been successfully registerd. You can login now!"
        }

        this.userActivation(params['verifyToken'])
    })
  }

  userActivation(verifyToken) {
    this.auth.userActivation(verifyToken).subscribe(
      (result) => {
        this.showSwal('success')
        
      },
      (errorResponse: HttpErrorResponse) => {
        this.showSwal('failed')
        this.errors = errorResponse.error.errors
      }
    )
  }

  showSwal(type) {
    if (type == 'success') {
      Swal.fire({
            title: 'アクティベーション完了！',
            text: 'これより登録したEmailとパスワードでログインできます',
            type: 'success',
            confirmButtonClass: "btn btn-success",
            buttonsStyling: false
        }).then((result) => {
            if (result.value) {
              this.router.navigate(['/login', {registered: 'success'}])
            }
        })

    } else if (type == 'failed') {
      Swal.fire({
            title: 'Faild',
            text: 'URLが期限切れです',
            type: 'error',
            confirmButtonClass: "btn",
            buttonsStyling: false
        })

    }
  }
}