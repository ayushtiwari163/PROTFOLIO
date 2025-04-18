import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="education" [class.dark-theme]="isDarkTheme">
      <div class="container">
        <h2>Education</h2>
        <div class="education-card card">
          <div class="education-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
              <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
            </svg>
          </div>
          <div class="education-content">
            <h3>Bachelor of Technology in Computer Science & Engineering</h3>
            <div class="institution">Madan Mohan Malaviya University Of Technology</div>
            <div class="education-meta">
              <span class="period">June 2019 - April 2023</span>
              <span class="location">Gorakhpur, Uttar Pradesh</span>
            </div>
            <p class="description">
              Completed a comprehensive computer science program covering algorithms, data structures, 
              software engineering, database management, and more. Developed strong programming skills
              and problem-solving abilities through various academic projects and coursework.
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .education {
      padding: 6rem 0;
      background-color: var(--background-alt);
    }
    
    .education-card {
      display: flex;
      gap: 2rem;
      padding: 2rem;
      border-radius: var(--border-radius);
      background-color: var(--background-color);
      box-shadow: var(--shadow);
      transition: transform 0.3s, box-shadow 0.3s;
      margin-bottom: 2rem;
    }
    
    .education-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }
    
    .education-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 60px;
      height: 60px;
      background-color: rgba(30, 144, 255, 0.1);
      border-radius: 10px;
      color: var(--primary-color);
    }
    
    .education-content {
      flex: 1;
    }
    
    .education-content h3 {
      font-size: 1.5rem;
      color: var(--primary-color);
      margin-bottom: 0.5rem;
    }
    
    .institution {
      font-size: 1.2rem;
      font-weight: 500;
      color: var(--secondary-color);
      margin-bottom: 0.5rem;
    }
    
    .education-meta {
      display: flex;
      justify-content: space-between;
      color: var(--text-light);
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }
    
    .description {
      line-height: 1.6;
    }
    
    @media (max-width: 768px) {
      .education-card {
        flex-direction: column;
        gap: 1rem;
      }
      
      .education-icon {
        width: 60px;
      }
      
      .education-meta {
        flex-direction: column;
        gap: 0.5rem;
      }
    }
  `]
})
export class EducationComponent {
  isDarkTheme = false;
  
  constructor(private themeService: ThemeService) {
    this.themeService.isDarkTheme$.subscribe(isDark => {
      this.isDarkTheme = isDark;
    });
  }
}