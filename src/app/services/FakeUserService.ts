import { v4 as uuidv4 } from 'uuid';
import { UserSchema } from '../components/userregistration/userSchema';
import { User } from '../stores/User';
import { UserService } from './UserService';

class FakeUserService implements UserService {
  private readonly users: User[] = [];

  registerUser(user: UserSchema): Promise<User> {
    const registeredUser = { id: uuidv4(), ...user };

    if (Math.random() < 0.7) {
      this.users.push(registeredUser);
      return Promise.resolve(registeredUser);
    }

    return Promise.reject(new Error());
  }

  getUsers(): Promise<User[]> {
    return Promise.resolve(this.users);
  }
}

export const userService = new FakeUserService();
