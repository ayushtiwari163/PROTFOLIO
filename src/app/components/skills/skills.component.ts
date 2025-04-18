import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

interface Skill {
  name: string;
  level: number; // 0-100
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="skills" [class.dark-theme]="isDarkTheme">
      <div class="container">
        <h2>Technical Skills</h2>
        
        <div class="skills-container">
          <div class="skill-category" *ngFor="let category of skillCategories">
            <h3>{{ category.name }}</h3>
            <div class="skills-grid">
              <div class="skill-item" *ngFor="let skill of category.skills">
                <div class="skill-info">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-level">{{ skill.level }}%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" [style.width.%]="skill.level"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="technologies">
          <h3>Technologies & Tools</h3>
          <div class="tech-tags">
            <span *ngFor="let tech of technologies" class="tag">{{ tech }}</span>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .skills {
      padding: 6rem 0;
    }
    
    .skills-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
      gap: 3rem;
      margin-bottom: 3rem;
    }
    
    .skill-category h3 {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
      color: var(--secondary-color);
      position: relative;
    }
    
    .skill-category h3::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -8px;
      width: 40px;
      height: 3px;
      background-color: var(--primary-color);
    }
    
    .skills-grid {
      display: grid;
      gap: 1.5rem;
    }
    
    .skill-item {
      margin-bottom: 0.5rem;
    }
    
    .skill-info {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.5rem;
    }
    
    .skill-name {
      font-weight: 500;
      font-size: 1rem;
    }
    
    .skill-level {
      font-size: 0.9rem;
      color: var(--text-light);
    }
    
    .skill-bar {
      height: 8px;
      background-color: var(--background-alt);
      border-radius: 4px;
      overflow: hidden;
    }
    
    .skill-progress {
      height: 100%;
      background: linear-gradient(90deg, var(--primary-color) 0%, var(--accent-color) 100%);
      border-radius: 4px;
      transition: width 1s ease-in-out;
    }
    
    .technologies h3 {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
      color: var(--secondary-color);
      position: relative;
    }
    
    .technologies h3::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -8px;
      width: 40px;
      height: 3px;
      background-color: var(--primary-color);
    }
    
    .tech-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      margin-top: 1.5rem;
    }
    
    .tag {
      display: inline-block;
      padding: 0.5rem 1rem;
      background-color: var(--background-alt);
      color: var(--primary-color);
      border-radius: 30px;
      font-size: 0.9rem;
      transition: all 0.3s;
    }
    
    .tag:hover {
      background-color: var(--primary-color);
      color: white;
      transform: translateY(-3px);
    }
    
    @media (max-width: 992px) {
      .skills-container {
        grid-template-columns: 1fr;
      }
    }
    
    @media (max-width: 500px) {
      .skill-info {
        flex-direction: column;
      }
      
      .skill-level {
        margin-top: 0.25rem;
      }
    }
  `]
})
export class SkillsComponent {
  isDarkTheme = false;
  
  skillCategories: SkillCategory[] = [
    {
      name: 'Programming Languages',
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'C++', level: 80 },
        { name: 'SQL', level: 85 }
      ]
    },
    {
      name: 'Frameworks & Libraries',
      skills: [
        { name: 'Node.js', level: 92 },
        { name: 'Angular', level: 70 },
        { name: 'Express.js', level: 85 },
        { name: 'Haskell', level: 60 }
      ]
    }
  ];
  
  technologies: string[] = [
    'JavaScript', 'TypeScript', 'C++', 'SQL', 'DynamoDB', 
    'Node.js', 'Angular', 'Docker', 'Git', 'Amazon Web Services', 
    'Google Cloud Platform', 'MySQL', 'PostgreSQL', 'MSSQL', 
    'AWS Redshift', 'Redis'
  ];
  
  constructor(private themeService: ThemeService) {
    this.themeService.isDarkTheme$.subscribe(isDark => {
      this.isDarkTheme = isDark;
    });
  }
}