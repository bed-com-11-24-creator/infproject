import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

constructor(private readonly userService: UsersService) {}
@Get()
getAllUsers() {
    return this.userService.getAllUsers();
}

  // ⚠️ MUST COME BEFORE :id (if you have it)
  /*@Get('role/:role')
  getUsersByRole(@Param('role') role: string) {
    return this.usersService.getUsersByRole(role);
  }*/

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.userService.getUserById(Number(id));
  }
}
