import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkThemeSubject = new BehaviorSubject<boolean>(true);
  isDarkTheme$ = this.isDarkThemeSubject.asObservable();
  
  toggleTheme() {
    this.isDarkThemeSubject.next(!this.isDarkThemeSubject.value);
  }
}