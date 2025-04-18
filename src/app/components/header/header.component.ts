import { Component, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header [class.scrolled]="isScrolled" [class.dark-theme]="isDarkTheme">
      <div class="container">
        <div class="logo">
          <a href="#home">Ayush<span> Tiwari</span></a>
        </div>
        
        <nav [class.active]="isMenuOpen">
          <ul>
            <li><a href="#home" (click)="closeMenu()">Home</a></li>
            <li><a href="#about" (click)="closeMenu()">About</a></li>
            <li><a href="#experience" (click)="closeMenu()">Experience</a></li>
            <li><a href="#education" (click)="closeMenu()">Education</a></li>
            <li><a href="#skills" (click)="closeMenu()">Skills</a></li>
            <li><a href="#projects" (click)="closeMenu()">Projects</a></li>
            <li><a href="#achievements" (click)="closeMenu()">Achievements</a></li>
            <li><a href="#contact" (click)="closeMenu()">Contact</a></li>
            <li><a href="assets/AYUSHRESUME.pdf" target="_blank" (click)="closeMenu()">Resume</a></li>
          </ul>
        </nav>
        
        <div class="actions">
          <button class="theme-toggle" (click)="toggleTheme()" aria-label="Toggle theme">
            <svg *ngIf="!isDarkTheme" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
            <svg *ngIf="isDarkTheme" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          </button>
          
          <button class="menu-toggle" (click)="toggleMenu()" aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  `,
  styles: [`
    header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      padding: 1.5rem 0;
      z-index: 1000;
      transition: all 0.3s ease;
      background-color: transparent;
    }
    
    header.scrolled {
      background-color: var(--background-color);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      padding: 0.75rem 0;
    }
    
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .logo a {
      font-family: 'Poppins', sans-serif;
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--primary-color);
      text-decoration: none;
    }
    
    .logo span {
      color: var(--secondary-color);
    }
    
    nav ul {
      display: flex;
      list-style: none;
    }
    
    nav li {
      margin-left: 1.5rem;
    }
    
    nav a {
      color: var(--text-color);
      font-weight: 500;
      text-decoration: none;
      padding: 0.5rem;
      position: relative;
      transition: color 0.3s;
    }
    
    nav a:after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: var(--primary-color);
      transition: width 0.3s;
    }
    
    nav a:hover {
      color: var(--primary-color);
    }
    
    nav a:hover:after {
      width: 100%;
    }
    
    .actions {
      display: flex;
      align-items: center;
    }
    
    .theme-toggle {
      background: none;
      border: none;
      color: var(--text-color);
      cursor: pointer;
      padding: 0.5rem;
      margin-right: 1rem;
      transition: transform 0.3s;
    }
    
    .theme-toggle:hover {
      transform: rotate(30deg);
    }
    
    .menu-toggle {
      display: none;
      flex-direction: column;
      justify-content: space-between;
      width: 30px;
      height: 21px;
      background: none;
      border: none;
      cursor: pointer;
    }
    
    .menu-toggle span {
      display: block;
      height: 3px;
      width: 100%;
      background-color: var(--text-color);
      transition: all 0.3s;
    }
    
    @media (max-width: 768px) {
      .menu-toggle {
        display: flex;
      }
      
      nav {
        position: fixed;
        top: 0;
        right: -100%;
        width: 70%;
        height: 100vh;
        background-color: var(--background-color);
        box-shadow: -2px 0 10px var(--shadow-color);
        transition: all 0.3s ease;
        padding-top: 5rem;
      }
      
      nav.active {
        right: 0;
      }
      
      nav ul {
        flex-direction: column;
        align-items: center;
      }
      
      nav li {
        margin: 1rem 0;
      }
      
      .menu-toggle.active span:nth-child(1) {
        transform: translateY(9px) rotate(45deg);
      }
      
      .menu-toggle.active span:nth-child(2) {
        opacity: 0;
      }
      
      .menu-toggle.active span:nth-child(3) {
        transform: translateY(-9px) rotate(-45deg);
      }
    }
  `]
})
export class HeaderComponent {
  @Output() themeToggled = new EventEmitter<void>();
  isScrolled = false;
  isMenuOpen = false;
  isDarkTheme = false;
  
  constructor(private themeService: ThemeService) {
    this.themeService.isDarkTheme$.subscribe(isDark => {
      this.isDarkTheme = isDark;
    });
  }
  
  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
  
  toggleTheme() {
    this.themeToggled.emit();
  }
  
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  
  closeMenu() {
    this.isMenuOpen = false;
  }
}