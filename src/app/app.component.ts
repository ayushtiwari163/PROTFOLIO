import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    AchievementsComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <div [ngClass]="{'dark-theme': isDarkTheme}">
      <app-header (themeToggled)="toggleTheme()"></app-header>
      <main>
        <app-hero id="home"></app-hero>
        <app-about id="about"></app-about>
        <app-experience id="experience"></app-experience>
        <app-education id="education"></app-education>
        <app-skills id="skills"></app-skills>
        <app-projects id="projects"></app-projects>
        <app-achievements id="achievements"></app-achievements>
        <app-contact id="contact"></app-contact>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      font-family: 'Roboto', sans-serif;
    }
    
    .dark-theme {
      background-color: #121212;
      color: #ffffff;
    }
  `]
})
export class AppComponent {
  isDarkTheme = false;
  
  constructor(private themeService: ThemeService) {
    this.themeService.isDarkTheme$.subscribe(isDark => {
      this.isDarkTheme = isDark;
    });
  }
  
  toggleTheme() {
    this.themeService.toggleTheme();
  }
}