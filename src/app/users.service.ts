import { Injectable, WritableSignal, signal } from '@angular/core';
import { IUser } from './types/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private usersSignal = signal<IUser[]>([
    {
      id: '0',
      lastname: 'Иванов',
      firstname: 'Иван',
      surname: 'Иванович',
    }
  ])

  constructor() { }

  getAllUsers(): WritableSignal<IUser[]> {
    return this.usersSignal
  }

  addUser(lastname: string, firstname: string, surname: string): void {
    this.usersSignal.update(current => [...current, {
      id: crypto.randomUUID(),
      lastname,
      firstname,
      surname
    }])
  }

  removeUserById(id: string): void {
    this.usersSignal.update(current => current.filter(el => el.id !== id))
  }
}
