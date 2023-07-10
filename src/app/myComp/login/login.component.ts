import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private auth: AuthService, private router: Router) {}

  username: string = '';
  password: string = '';

  onSubmit() {
    console.log(this.username);
    this.auth.login({ name: this.username, password: this.password }).subscribe(
      (result) => {
        console.log('11111');
        this.router.navigate(['admin']);
      },
      (err: Error) => alert(err.message)
    );
  }
}
