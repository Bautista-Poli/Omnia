import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { NgFor } from '@angular/common'; 


@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    FormsModule,
    NgFor
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {
  hours: number[] = [];

  username: string = "";
  password: string | null = "";

  newClassSrc: string = "";
  newClassName: string = "";
  newClassDate: string = "";
  newClassTime: number = 0;
  newClassId: number = 0;

  constructor(private router: Router) {
    this.populateHours();
  }

  ngOnInit(): void {
    if (typeof localStorage !== 'undefined') {
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');

        if (storedUsername && storedPassword) {
            this.username = storedUsername;
            this.password = storedPassword;
        }

        if (!this.checkLogIn(this.username, this.password)) {
            // Redirect to login page if not logged in
            this.router.navigate(['/Login']);
        }
    }
  }

  checkLogIn(username: string | null, password: string | null): boolean {
    return username === "admin" && password === "Omnia2023";
  }

  logOut() {
    localStorage.clear();
    // Redirect to login page after successful logout
    this.router.navigate(['/inicio']);
  }
  addClass(){
    console.log(this.newClassSrc);
    console.log(this.newClassName);
    console.log(this.newClassDate);
    console.log(this.newClassTime);
    console.log(this.newClassId);
  }
  removeClass(){
    
  }
  populateHours() {
    for (let i = 9; i <= 22; i++) {
      this.hours.push(i);
    }
  }
}
  /*
  addClass() {
    this.http.post('/api/add-class', {}).subscribe(
      () => {
        console.log('Class added successfully');
      },
      (error) => {
        console.error('Error adding class:', error);
      }
    );
  }

  removeClass() {
    this.http.delete('/api/remove-class').subscribe(
      () => {
        console.log('Class removed successfully');
      },
      (error) => {
        console.error('Error removing class:', error);
      }
    );
  }
  */

  

