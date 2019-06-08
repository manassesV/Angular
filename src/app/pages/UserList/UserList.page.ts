import { Component } from '@angular/core';
import { UserService } from '../../services/Users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
   selector: 'user-list',
   templateUrl: './UserList.page.html',
   styleUrls: ['./UserList.page.css']
})

export class UserListPage{

   private array=[] ;

   constructor(
     private userservice: UserService){}

   ngOnInit() {

      this.userservice.getall().subscribe((data: any) => {
         
         data.forEach(element => {
      
          const { doc } = element.payload;

          const result = doc.data();

          var dados = {
             ...result
          }

          this.array.push(dados)

         });

      })



   }
}