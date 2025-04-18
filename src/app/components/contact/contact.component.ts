import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="contact" [class.dark-theme]="isDarkTheme">
      <div class="container">
        <h2>Get In Touch</h2>
        
        <div class="contact-container">
          <div class="contact-info">
            <div class="info-item">
              <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <div class="info-content">
                <h3>Location</h3>
                <p>India</p>
              </div>
            </div>
            
            <div class="info-item">
              <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div class="info-content">
                <h3>Email</h3>
                <p><a href="mailto:ayushtiwari163@gmail.com">mail</a></p>
              </div>
            </div>
            
            <div class="info-item">
              <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div class="info-content">
                <h3>Phone</h3>
                <p><a href="tel:+918081835105">+91 8081835105</a></p>
              </div>
            </div>
            
            <div class="info-item">
              <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
              <div class="info-content">
                <h3>LinkedIn</h3>
                <p><a href="https://linkedin.com/in/ayush163" target="_blank">linkedin.com/in/ayush163</a></p>
              </div>
            </div>
          </div>
          
          <div class="contact-form card">
            <h3>Send a Message</h3>
            <form (ngSubmit)="submitForm()">
              <div class="form-group">
                <label for="name">Your Name</label>
                <input type="text" id="name" name="name" [(ngModel)]="contactForm.name" required>
              </div>
              
              <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email" id="email" name="email" [(ngModel)]="contactForm.email" required>
              </div>
              
              <div class="form-group">
                <label for="subject">Subject</label>
                <input type="text" id="subject" name="subject" [(ngModel)]="contactForm.subject" required>
              </div>
              
              <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" name="message" rows="6" [(ngModel)]="contactForm.message" required></textarea>
              </div>
              
              <button type="submit" class="btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact {
      padding: 6rem 0;
      background-color: var(--background-alt);
    }
    
    .contact-container {
      display: flex;
      gap: 3rem;
      margin-top: 3rem;
    }
    
    .contact-info {
      flex: 1;
    }
    
    .info-item {
      display: flex;
      align-items: flex-start;
      gap: 1.5rem;
      margin-bottom: 2rem;
    }
    
    .info-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 50px;
      height: 50px;
      background-color: rgba(30, 144, 255, 0.1);
      border-radius: 10px;
      color: var(--primary-color);
      transition: all 0.3s;
    }
    
    .info-item:hover .info-icon {
      background-color: var(--primary-color);
      color: white;
    }
    
    .info-content h3 {
      font-size: 1.25rem;
      margin-bottom: 0.5rem;
      color: var(--secondary-color);
    }
    
    .info-content p {
      color: var(--text-light);
    }
    
    .info-content a {
      color: var(--text-light);
      text-decoration: none;
      transition: color 0.3s;
    }
    
    .info-content a:hover {
      color: var(--primary-color);
    }
    
    .contact-form {
      flex: 1.5;
      padding: 2rem;
      border-radius: var(--border-radius);
      background-color: var(--background-color);
      box-shadow: var(--shadow);
    }
    
    .contact-form h3 {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
      color: var(--secondary-color);
    }
    
    .form-group {
      margin-bottom: 1.5rem;
    }
    
    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 500;
    }
    
    .form-group input,
    .form-group textarea {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid var(--border-color);
      border-radius: var(--border-radius);
      background-color: var(--background-color);
      color: var(--text-color);
      transition: border-color 0.3s, box-shadow 0.3s;
    }
    
    .form-group input:focus,
    .form-group textarea:focus {
      border-color: var(--primary-color);
      box-shadow: 0 0 0 3px rgba(30, 144, 255, 0.2);
      outline: none;
    }
    
    .form-group textarea {
      resize: vertical;
    }
    
    .contact-form .btn {
      width: 100%;
      padding: 0.75rem;
      background-color: var(--primary-color);
      color: white;
      border: none;
      border-radius: var(--border-radius);
      cursor: pointer;
      font-weight: 500;
      transition: background-color 0.3s;
    }
    
    .contact-form .btn:hover {
      background-color: var(--accent-color);
    }
    
    @media (max-width: 992px) {
      .contact-container {
        flex-direction: column;
      }
    }
  `]
})
export class ContactComponent {
  isDarkTheme = false;
  
  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  
  constructor(private themeService: ThemeService) {
    this.themeService.isDarkTheme$.subscribe(isDark => {
      this.isDarkTheme = isDark;
    });
  }
  
  submitForm() {
    // In a real application, this would send the form data to a server
    console.log('Form submitted:', this.contactForm);
    
    // Reset the form
    this.contactForm = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
    
    // Show success message (in a real app)
    alert('Thank you for your message! I will get back to you soon.');
  }
}