import { Component } from '@angular/core';
import { UserService } from '../../services/Users.service';


@Component({
    templateUrl: './User.page.html',
    styleUrls: ['./User.page.css']
})

export class UserPage {
    constructor(
        private userservice: UserService) { }

    private loading: boolean = false;

    createUser() {
        this.loading = true

        this.userservice.create({
            name: 'Manassés',
            email: 'manavitorino@gmail.com',
            age: 29,
            phone: '+5511955567278'
        }).then((data) => {
            console.log('result', data);
            this.loading = false;

        }).catch((err) => this.loading = false)
    }
}
  
