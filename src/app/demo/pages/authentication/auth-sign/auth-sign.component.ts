import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfiguracionUrl } from '../../../../configuracionUrl';
import { CognitoService } from '../../../../cognito.service';


@Component({
  selector: 'app-auth-sign',
  templateUrl: './auth-sign.component.html',
  styleUrls: ['./auth-sign.component.scss']
})
export class AuthSignComponent implements OnInit {
  loginForm: FormGroup;
  username: string; // se usara en caso de necesite cambiar el password
  listMenu: any;
  baseUrl: ConfiguracionUrl;
  constructor(
    private _formBuilder: FormBuilder,
    public authService: CognitoService,
    public router: Router) {
   }

  ngOnInit(): void {
    console.log("holi");
    this.baseUrl = new ConfiguracionUrl();
    this.loginForm = this._formBuilder.group({
        email   : ['', [Validators.required]],
        password: ['', Validators.required]
    });
  }

  public OnSubmit(): void {
    /**
     * @method AuthService.authenticateCongnito calling the cognito authentication 
     * @param {string} username
     * @param {string} password
     * @return {object} With accesstoken and payload
     */
    this.authService
    .authenticateCongnito({
        Username: this.loginForm.value.email,
        Password: this.loginForm.value.password
    })
    .subscribe((result) => {
        // verify the result having the accessToken and payload information
        if (result && result.accessToken) {
        // After information is received send it to angular setters in services and can utlised
            this.authService.accessToken = result.accessToken.jwtToken;
            this.authService.userLoggedIn = true;
            this.authService.UserDetails = {
                username: result.accessToken.payload.username
            };
        // Route to home screen after success
            
            // this.getMenu();
            //this.router.navigate(["apps/dashboards/analytics"]);
            location.href=this.baseUrl.getUrlBase()+"/sample-page";
        }else{
            //console.log(result);
            this.username = this.loginForm.value.email;
            this.validateMessageCognito(result.message);
        }
    }, (err) => {
            console.log(err);
            this.validateMessageCognito(err.message);
        }
    );
  }

  validateMessageCognito(message: string){
    console.log(message);
    switch (message) {
        case "FORCE_CHANGE_PASSWORD":
            //this.router.navigate(["pages/auth/forgotPassword",this.username.toUpperCase()]);
            break;
        case "Incorrect username or password.":
            this.router.navigate(["login"]);
            break;
        default:
            break;
    }
  }

}
