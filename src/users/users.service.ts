import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        { id: 1, name: 'Alice Banda', email: 'alice@library.com', Role: 'admin' },
        { id: 2, name: 'Bob phiri', email: 'bob@library.com', Role: 'member'},
        { id: 3, name: 'Carlo Tembo', email: 'Carlo@library.com', Role: 'member'},
        { id: 4, name: 'David Mwale', email: 'david@library.com', Role: 'admin'},
    ];

    getAllUsers () {
        return this.users;
    }
}
