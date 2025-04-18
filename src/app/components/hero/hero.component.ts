import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hero" [class.dark-theme]="isDarkTheme">
      <div class="container">
        <div class="hero-content">
          <h1 class="animated">Ayush Tiwari</h1>
          <h2 class="animated">Senior Software Engineer</h2>
          <p class="animated">
            Experienced backend developer specializing in educational and payment platforms.
          </p>
          <div class="cta-buttons animated">
            <a href="#contact" class="btn primary">Contact Me</a>
            <a href="#experience" class="btn secondary">View Experience</a>
          </div>
          <div class="social-links animated">
            <a href="https://linkedin.com/in/ayush163" target="_blank" rel="noopener" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="mailto:ayushtiwari163@gmail.com" aria-label="Email">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
            <a href="tel:+918081835105" aria-label="Phone">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="scroll-indicator animated">
          <div class="mouse">
            <div class="wheel"></div>
          </div>
          <div class="arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      height: 100vh;
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, var(--background-color) 0%, var(--background-alt) 100%);
      position: relative;
      overflow: hidden;
    }
    
    .hero::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at 30% 50%, rgba(30, 144, 255, 0.05) 0%, transparent 50%);
      z-index: 1;
    }
    
    .container {
      position: relative;
      z-index: 2;
    }
    
    .hero-content {
      max-width: 800px;
    }
    
    .hero h1 {
      font-size: 4rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: var(--primary-color);
    }
    
    .hero h2 {
      font-size: 2.5rem;
      font-weight: 600;
      margin-bottom: 1.5rem;
      color: var(--secondary-color);
    }
    
    .hero h2::after {
      display: none;
    }
    
    .hero p {
      font-size: 1.25rem;
      margin-bottom: 2rem;
      max-width: 600px;
      color: var(--text-light);
    }
    
    .cta-buttons {
      display: flex;
      gap: 1rem;
      margin-bottom: 2rem;
    }
    
    .btn.primary {
      background-color: var(--primary-color);
      color: white;
    }
    
    .btn.secondary {
      background-color: transparent;
      color: var(--primary-color);
      border: 2px solid var(--primary-color);
    }
    
    .btn.secondary:hover {
      background-color: var(--primary-color);
      color: white;
    }
    
    .social-links {
      display: flex;
      gap: 1rem;
    }
    
    .social-links a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: var(--background-alt);
      color: var(--primary-color);
      transition: all 0.3s;
    }
    
    .social-links a:hover {
      background-color: var(--primary-color);
      color: white;
      transform: translateY(-3px);
    }
    
    .scroll-indicator {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
    }
    
    .mouse {
      width: 30px;
      height: 50px;
      border: 2px solid var(--text-light);
      border-radius: 15px;
      position: relative;
    }
    
    .wheel {
      width: 6px;
      height: 6px;
      background-color: var(--text-light);
      border-radius: 50%;
      position: absolute;
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
      animation: scroll 1.5s infinite;
    }
    
    @keyframes scroll {
      0% {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
      }
      100% {
        opacity: 0;
        transform: translateX(-50%) translateY(20px);
      }
    }
    
    .arrow {
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
    }
    
    .arrow span {
      display: block;
      width: 10px;
      height: 10px;
      border-bottom: 2px solid var(--text-light);
      border-right: 2px solid var(--text-light);
      transform: rotate(45deg);
      animation: arrow 1.5s infinite;
      opacity: 0;
    }
    
    .arrow span:nth-child(2) {
      animation-delay: 0.2s;
    }
    
    .arrow span:nth-child(3) {
      animation-delay: 0.4s;
    }
    
    @keyframes arrow {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
    
    .animated {
      opacity: 0;
      transform: translateY(20px);
      animation: fadeIn 0.5s ease forwards;
    }
    
    .hero h1 {
      animation-delay: 0.2s;
    }
    
    .hero h2 {
      animation-delay: 0.4s;
    }
    
    .hero p {
      animation-delay: 0.6s;
    }
    
    .cta-buttons {
      animation-delay: 0.8s;
    }
    
    .social-links {
      animation-delay: 1s;
    }
    
    .scroll-indicator {
      animation-delay: 1.2s;
    }
    
    @keyframes fadeIn {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @media (max-width: 768px) {
      .hero h1 {
        font-size: 2.5rem;
      }
      
      .hero h2 {
        font-size: 1.75rem;
      }
      
      .hero p {
        font-size: 1rem;
      }
      
      .cta-buttons {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  `]
})
export class HeroComponent implements OnInit {
  isDarkTheme = false;
  
  constructor(private themeService: ThemeService) {
    this.themeService.isDarkTheme$.subscribe(isDark => {
      this.isDarkTheme = isDark;
    });
  }
  
  ngOnInit(): void {}
}