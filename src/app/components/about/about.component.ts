import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="about" [class.dark-theme]="isDarkTheme">
      <div class="container">
        <h2>About Me</h2>
        <div class="about-content">
          <div class="about-text">
            <p>
              I am a Senior Software Engineer with substantial experience in backend development and project ownership in educational and payment platforms. I thrive on using my programming skills to innovate and implement solutions that enhance user engagement and operational efficiency.
            </p>
            <p>
              My experience spans robust integrations, large-scale data management, and strategic technical decision-making, all while mentoring those around me. I specialize in building scalable systems that can handle millions of daily transactions and users.
            </p>
            <div class="personal-info">
              <div class="info-item">
                <strong>Name:</strong> Ayush Tiwari
              </div>
              <div class="info-item">
                <strong>Email:</strong> ayushtiwari163&#64;gmail.com
              </div>
              <div class="info-item">
                <strong>Phone:</strong> +91 8081835105
              </div>
              <div class="info-item">
                <strong>Location:</strong> India
              </div>
              <div class="info-item">
                <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/ayush163" target="_blank">linkedin.com/in/ayush163</a>
              </div>
            </div>
            <a href="#contact" class="btn">Get In Touch</a>
          </div>
          <div class="about-image">
            <div class="image-container">
              <div class="shape">
                <img src="assets/images/1693293168728.jpeg" alt="Ayush Tiwari" class="profile-image">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about {
      background-color: var(--background-alt);
      padding: 6rem 0;
    }
    
    .about-content {
      display: flex;
      gap: 3rem;
      align-items: center;
    }
    
    .about-text {
      flex: 1;
    }
    
    .about-text p {
      margin-bottom: 1.5rem;
      font-size: 1.1rem;
      line-height: 1.7;
    }
    
    .personal-info {
      margin: 2rem 0;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
    
    .info-item {
      font-size: 1rem;
    }
    
    .info-item strong {
      color: var(--primary-color);
      margin-right: 0.5rem;
    }
    
    .about-image {
      flex: 1;
      display: flex;
      justify-content: center;
    }
    
    .image-container {
      position: relative;
      width: 350px;
      height: 350px;
    }
    
    .shape {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--primary-color);
      border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
      animation: morphing 10s infinite;
      overflow: hidden;
    }
    
    .profile-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: inherit;
    }
    
    @keyframes morphing {
      0% {
        border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
      }
      25% {
        border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%;
      }
      50% {
        border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%;
      }
      75% {
        border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;
      }
      100% {
        border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
      }
    }
    
    @media (max-width: 992px) {
      .about-content {
        flex-direction: column-reverse;
      }
      
      .image-container {
        width: 300px;
        height: 300px;
      }
      
      .personal-info {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class AboutComponent {
  isDarkTheme = false;
  
  constructor(private themeService: ThemeService) {
    this.themeService.isDarkTheme$.subscribe(isDark => {
      this.isDarkTheme = isDark;
    });
  }
}