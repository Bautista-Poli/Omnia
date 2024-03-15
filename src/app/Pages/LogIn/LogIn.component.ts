import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { NgIf } from '@angular/common'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    FormsModule,
    NgIf],
  templateUrl: './LogIn.component.html',
  styleUrl: './LogIn.component.css'
})
export class LogInComponent {
  username: string = "";
  password: string | null = "";
  show:string = "password";

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('username') !== null) {
      this.username = localStorage.getItem('username')!;
      this.password = localStorage.getItem('password');
    }

    if (this.checkLogIn(this.username, this.password)) {
      // Redirect to admin page if already logged in
      this.router.navigate(['/Admin']);
    }
  }

  checkLogIn(username: string | null, password: string | null): boolean {
    return username === "admin" && password === "Omnia2023";
  }

  login() {
    if (this.checkLogIn(this.username, this.password)) {
      localStorage.setItem('username', this.username);
      localStorage.setItem('password', this.password!);
      // Redirect to admin page after successful login
      this.router.navigate(['/Admin']);
    } else {
      alert('Invalid username or password');
    }
  }

  showPassword(){
    if(this.show=="password"){
      this.show = "text";
    }else{
      this.show = "password";
    }
  }
}