import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  responsibilities: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="experience" [class.dark-theme]="isDarkTheme">
      <div class="container">
        <h2>Work Experience</h2>
        <div class="timeline">
          <div *ngFor="let job of experiences; let i = index" class="timeline-item" [class.right]="i % 2 !== 0">
            <div class="timeline-content card">
              <div class="job-header">
                <h3>{{ job.title }}</h3>
                <div class="company">{{ job.company }}</div>
                <div class="job-meta">
                  <span class="location">{{ job.location }}</span>
                  <span class="period">{{ job.period }}</span>
                </div>
              </div>
              <p>{{ job.description }}</p>
              <ul class="responsibilities">
                <li *ngFor="let responsibility of job.responsibilities">
                  {{ responsibility }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .experience {
      padding: 6rem 0;
    }
    
    .timeline {
      position: relative;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .timeline::after {
      content: '';
      position: absolute;
      width: 2px;
      background-color: var(--primary-color);
      top: 0;
      bottom: 0;
      left: 50%;
      margin-left: -1px;
    }
    
    .timeline-item {
      padding: 10px 40px;
      position: relative;
      background-color: inherit;
      width: 50%;
      box-sizing: border-box;
      margin-bottom: 2rem;
    }
    
    .timeline-item::after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      right: -10px;
      background-color: var(--background-color);
      border: 4px solid var(--primary-color);
      top: 15px;
      border-radius: 50%;
      z-index: 1;
    }
    
    .right {
      left: 50%;
    }
    
    .right::after {
      left: -10px;
    }
    
    .timeline-content {
      padding: 1.5rem;
      background-color: var(--background-color);
      border-radius: var(--border-radius);
      box-shadow: var(--shadow);
      position: relative;
    }
    
    .job-header {
      margin-bottom: 1rem;
    }
    
    .job-header h3 {
      font-size: 1.5rem;
      color: var(--primary-color);
      margin-bottom: 0.25rem;
    }
    
    .company {
      font-size: 1.2rem;
      font-weight: 500;
      color: var(--secondary-color);
      margin-bottom: 0.5rem;
    }
    
    .job-meta {
      display: flex;
      justify-content: space-between;
      color: var(--text-light);
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }
    
    .responsibilities {
      margin-top: 1rem;
      padding-left: 1.25rem;
    }
    
    .responsibilities li {
      margin-bottom: 0.5rem;
      position: relative;
    }
    
    .responsibilities li::before {
      content: '';
      position: absolute;
      width: 8px;
      height: 8px;
      background-color: var(--primary-color);
      border-radius: 50%;
      left: -1rem;
      top: 0.5rem;
    }
    
    @media screen and (max-width: 768px) {
      .timeline::after {
        left: 31px;
      }
      
      .timeline-item {
        width: 100%;
        padding-left: 70px;
        padding-right: 25px;
      }
      
      .timeline-item::after {
        left: 21px;
      }
      
      .right {
        left: 0%;
      }
    }
  `]
})
export class ExperienceComponent {
  isDarkTheme = false;
  experiences: Experience[] = [
    {
      title: 'Senior Software Engineer',
      company: 'ConveGenius',
      location: 'Noida, Uttar Pradesh',
      period: 'Jan 2023 - Present',
      description: 'A company focused on providing educational solutions.',
      responsibilities: [
        'Developed version 1.0 of the Management Information System (MIS) for efficient management of teachers, schools, and students.',
        'Implemented features including CRUD operations, bulk uploads (handling up to 500,000 records), and differential modules synced with the UDISE+ portal.',
        'Introduced robust access management to support multiple admin levels.',
        'Led the backend project, coordinated with a team of three developers, and deployed the system across five states, benefiting 60,000 schools and thousands of administrators.',
        'Designed and developed the backend for Swift Class, an educational content platform catering to over 2 million students in Uttarakhand.',
        'Integrated offline desktop application functionality with seamless user history syncing upon internet availability.',
        'Created and maintained educational bots using Node.js, enhancing engagement and improving learning outcomes on the platform.',
        'Migrated 12.7 million data entries across systems, ensuring data consistency and accuracy.',
        'Developed an automated daily data refresh process using Node.js, streamlining updates and reducing manual intervention.',
        'Built the String Dashboard, a tool for simplified bot string management.',
        'Developed the Dump Server to streamline internal content and registry uploads for the operations team.',
        'Participated in daily strategic discussions to refine system architectures and workflows.',
        'Conducted detailed code reviews, ensuring adherence to production-grade quality standards across multiple projects.'
      ]
    },
    {
      title: 'Software Engineer Intern',
      company: 'Juspay Technologies',
      location: 'Bengaluru, Karnataka',
      period: 'May 2022 - Sep 2022',
      description: 'A payment solutions company.',
      responsibilities: [
        'Integrated multiple payment gateways, including JioPay, Paytm, and Snapmint, into Juspay\'s payment processing platform, expanding the range of payment options available to users.',
        'Ensured seamless compatibility and optimized payment gateway performance for a platform handling over 25 million transactions daily.',
        'Gained hands-on experience in functional programming using Haskell, contributing to the development of robust and maintainable systems within the payment infrastructure.',
        'Implemented functional programming paradigms to enhance code reliability and reduce potential bugs in critical systems.',
        'Collaborated with senior engineers to troubleshoot complex issues in payment gateway integrations, ensuring smooth and secure transactions.',
        'Optimized system workflows to reduce transaction failures and enhance overall reliability of the payment ecosystem.'
      ]
    }
  ];
  
  constructor(private themeService: ThemeService) {
    this.themeService.isDarkTheme$.subscribe(isDark => {
      this.isDarkTheme = isDark;
    });
  }
}