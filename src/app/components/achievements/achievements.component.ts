import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

interface Achievement {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="achievements" [class.dark-theme]="isDarkTheme">
      <div class="container">
        <h2>Achievements</h2>
        
        <div class="achievements-grid">
          <div class="achievement-card card" *ngFor="let achievement of achievements">
            <div class="achievement-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <ng-container [ngSwitch]="achievement.icon">
                  <ng-container *ngSwitchCase="'trophy'">
                    <polyline points="16 3 21 3 21 8"></polyline>
                    <line x1="4" y1="20" x2="21" y2="3"></line>
                    <path d="M21 16V8h-8"></path>
                    <line x1="15" y1="15" x2="21" y2="21"></line>
                    <line x1="4" y1="4" x2="9" y2="9"></line>
                  </ng-container>
                  <ng-container *ngSwitchCase="'code'">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </ng-container>
                  <ng-container *ngSwitchCase="'database'">
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                  </ng-container>
                  <ng-container *ngSwitchCase="'globe'">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </ng-container>
                </ng-container>
              </svg>
            </div>
            <div class="achievement-content">
              <h3>{{ achievement.title }}</h3>
              <p>{{ achievement.description }}</p>
            </div>
          </div>
        </div>
        
        <div class="coding-achievements">
          <h3>Competitive Programming</h3>
          <ul class="coding-list">
            <li>
              <a href="https://codeforces.com/profile/Kakashi_099" target="_blank">
                Codeforces: Max rating of <strong>1640</strong>, <strong>Expert</strong>.
              </a>
            </li>
            <li>
              <a href="https://www.codechef.com/users/codead_404" target="_blank">
                Codechef: Max rating of <strong>2170</strong>, <strong>5 star</strong>.
              </a>
            </li>
            <li>
              <a href="https://icpc.global/ICPCID/PASHH73TL4GQ" target="_blank">
                Amritapuri Regionalist 2020: Honourable mention, Rank - 349.
              </a>
            </li>
            <li>
              <a href="https://icpc.global/ICPCID/PASHH73TL4GQ" target="_blank">
                Kanpur-Mathura Regionalist 2020: Online contest, Rank- 32.
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .achievements {
      padding: 6rem 0;
    }
    
    .achievements-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 2rem;
      margin-top: 3rem;
    }
    
    .achievement-card {
      display: flex;
      align-items: flex-start;
      gap: 1.5rem;
      padding: 1.5rem;
      border-radius: var(--border-radius);
      background-color: var(--background-color);
      box-shadow: var(--shadow);
      transition: transform 0.3s, box-shadow 0.3s;
    }
    
    .achievement-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }
    
    .achievement-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      background-color: rgba(30, 144, 255, 0.1);
      border-radius: 10px;
      color: var(--primary-color);
      transition: all 0.3s;
    }
    
    .achievement-card:hover .achievement-icon {
      background-color: var(--primary-color);
      color: white;
    }
    
    .achievement-content h3 {
      font-size: 1.25rem;
      margin-bottom: 0.75rem;
      color: var(--secondary-color);
    }
    
    .coding-achievements {
      margin-top: 4rem;
    }
    
    .coding-achievements h3 {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
      color: var(--secondary-color);
      position: relative;
    }
    
    .coding-achievements h3::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -8px;
      width: 40px;
      height: 3px;
      background-color: var(--primary-color);
    }
    
    .coding-list {
      list-style: none;
      padding: 0;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1.5rem;
    }
    
    .coding-list li {
      padding: 1rem;
      background-color: var(--background-color);
      border-radius: var(--border-radius);
      box-shadow: var(--shadow);
      transition: transform 0.3s, box-shadow 0.3s;
    }
    
    .coding-list li:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }
    
    .coding-list a {
      color: var(--text-color);
      text-decoration: none;
      transition: color 0.3s;
    }
    
    .coding-list a:hover {
      color: var(--primary-color);
    }
    
    .coding-list strong {
      color: var(--primary-color);
    }
    
    @media (max-width: 768px) {
      .achievements-grid {
        grid-template-columns: 1fr;
      }
      
      .coding-list {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class AchievementsComponent {
  isDarkTheme = false;
  
  achievements: Achievement[] = [
    {
      title: 'Data Migration Expert',
      description: 'Migrated 12.7 million data entries with zero inconsistencies.',
      icon: 'database'
    },
    {
      title: 'Educational Solution Deployment',
      description: 'Deployed MIS system across 5 states, impacting 60,000 schools.',
      icon: 'globe'
    },
    {
      title: 'Payment Gateway Integration',
      description: 'Integrated payment gateways for 25 million daily transactions.',
      icon: 'code'
    },
    {
      title: 'Competitive Programming',
      description: 'Expert level on Codeforces (1640) and 5-star on Codechef (2170).',
      icon: 'trophy'
    }
  ];
  
  constructor(private themeService: ThemeService) {
    this.themeService.isDarkTheme$.subscribe(isDark => {
      this.isDarkTheme = isDark;
    });
  }
}