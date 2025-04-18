import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  features: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="projects" [class.dark-theme]="isDarkTheme">
      <div class="container">
        <h2>Projects</h2>
        
        <div class="projects-grid">
          <div class="project-card card" *ngFor="let project of projects">
            <div class="project-header">
              <h3>{{ project.title }}</h3>
              <div class="tech-tags">
                <span *ngFor="let tech of project.technologies" class="tag">{{ tech }}</span>
              </div>
            </div>
            <p class="project-description">{{ project.description }}</p>
            <div class="project-features">
              <h4>Key Features:</h4>
              <ul>
                <li *ngFor="let feature of project.features">{{ feature }}</li>
              </ul>
            </div>
            <div class="project-links" *ngIf="project.link">
              <a [href]="project.link" target="_blank" class="btn">View Project</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .projects {
      padding: 6rem 0;
      background-color: var(--background-alt);
    }
    
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 2rem;
      margin-top: 3rem;
    }
    
    .project-card {
      display: flex;
      flex-direction: column;
      background-color: var(--background-color);
      border-radius: var(--border-radius);
      overflow: hidden;
      box-shadow: var(--shadow);
      transition: transform 0.3s, box-shadow 0.3s;
      height: 100%;
    }
    
    .project-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }
    
    .project-header {
      padding: 1.5rem 1.5rem 0;
    }
    
    .project-header h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: var(--primary-color);
    }
    
    .tech-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1rem;
    }
    
    .tag {
      display: inline-block;
      padding: 0.3rem 0.7rem;
      background-color: rgba(30, 144, 255, 0.1);
      color: var(--primary-color);
      border-radius: 30px;
      font-size: 0.8rem;
      transition: all 0.3s;
    }
    
    .project-description {
      padding: 0 1.5rem;
      margin-bottom: 1.5rem;
      flex-grow: 1;
    }
    
    .project-features {
      padding: 0 1.5rem;
      margin-bottom: 1.5rem;
    }
    
    .project-features h4 {
      font-size: 1.1rem;
      margin-bottom: 0.75rem;
      color: var(--secondary-color);
    }
    
    .project-features ul {
      list-style-position: inside;
      padding-left: 0.5rem;
    }
    
    .project-features li {
      margin-bottom: 0.5rem;
      position: relative;
    }
    
    .project-links {
      padding: 1.5rem;
      margin-top: auto;
    }
    
    @media (max-width: 400px) {
      .projects-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ProjectsComponent {
  isDarkTheme = false;
  
  projects: Project[] = [
    {
      title: 'Block-Kart',
      description: 'A blockchain-based eCommerce platform that enhances product authenticity and ownership tracking with NFTs.',
      technologies: ['Blockchain', 'Smart Contracts', 'Web3.js', 'React'],
      features: [
        'Blockchain-based eCommerce with separate Admin Panel with warranty system using NFTs',
        'Allowed brands and retailers to introduce an NFT for each of their products, which lets customers receive the physical product along with a digital version of it',
        'Provided customers the ability to use the digital NFT to verify the authenticity of their product, prove their ownership, and transfer ownership upon resale'
      ]
    },
    {
      title: 'Management Information System (MIS)',
      description: 'A comprehensive system for efficient management of teachers, schools, and students across multiple states.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'React'],
      features: [
        'Developed version 1.0 with CRUD operations, bulk uploads, and modules synced with UDISE+ portal',
        'Implemented robust access management for multiple admin levels',
        'Deployed across 5 states benefiting 60,000 schools',
        'Led a team of three developers to successful implementation'
      ]
    },
    {
      title: 'Swift Class Educational Platform',
      description: 'Educational content platform catering to over 2 million students in Uttarakhand.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'React'],
      features: [
        'Designed and developed the backend architecture',
        'Integrated offline desktop application with seamless history syncing',
        'Created educational bots enhancing engagement and learning outcomes',
        'Automated data refresh processes, reducing manual intervention'
      ]
    }
  ];
  
  constructor(private themeService: ThemeService) {
    this.themeService.isDarkTheme$.subscribe(isDark => {
      this.isDarkTheme = isDark;
    });
  }
}