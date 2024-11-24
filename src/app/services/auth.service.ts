import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserId: string | null = null;

  login(userId: string): void {
    this.currentUserId = userId;  
  }

  getCurrentUserId(): string | null {
    return this.currentUserId;
  }

  isLoggedIn(): boolean {
    return this.currentUserId !== null;
  }
}
