import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activeSection = 'home';
  menuOpen = false;
  scrolled = false;

  sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];

  devopsSkills = [
    { name: 'Docker', level: 92 },
    { name: 'Kubernetes', level: 75 },
    { name: 'Linux (Ubuntu)', level: 90 },
    { name: 'CI/CD Pipelines', level: 88 },
    { name: 'Nginx', level: 85 },
    { name: 'AWS / Azure', level: 70 },
    { name: 'Virtualmin', level: 88 },
    { name: 'systemd / iptables', level: 82 },
  ];

  devSkills = [
    { name: 'Flutter / Dart', level: 90 },
    { name: '.NET / C#', level: 85 },
    { name: 'Angular / TypeScript', level: 85 },
    { name: 'Go', level: 72 },
    { name: 'SQL / MariaDB', level: 80 },
    { name: 'Java / Spring Boot', level: 68 },
    { name: 'Git / GitLab', level: 90 },
    { name: 'Firebase', level: 82 },
  ];

  experience = [
    {
      company: 'FSM HOSTING',
      role: 'Founder & DevOps Engineer',
      period: 'Aug 2025 – Present',
      tag: 'DevOps',
      highlights: [
        'Founded a fully custom web hosting management platform built from the ground up using Virtualmin',
        'Architected and deployed Angular frontend + .NET backend on a self-managed Linux production server',
        'Designed and maintain Docker infrastructure: containerization, networking, orchestration',
        'Resolved complex Docker/iptables/systemd-networkd conflicts in production',
        'Implemented CI/CD pipelines and automated deployment workflows via systemd services',
        'Built custom integrations: SSH file ops, MariaDB with EF Core, Google OAuth, AI services',
      ]
    },
    {
      company: 'FREELANCE',
      role: 'Mobile Developer',
      period: '2022 – Aug 2025',
      tag: 'Mobile',
      highlights: [
        'Built mobile applications with external APIs hosted on Google Play Store and Apple Store',
        'Contributed to game creation for Epic Games using Unreal Engine (2024–Aug 2025)',
      ]
    },
    {
      company: 'VESTEL GLOBAL',
      role: 'Team Lead & Software Engineer',
      period: 'Aug 2023 – Jan 2024',
      tag: 'Full-Stack',
      highlights: [
        'Led and mentored a cross-functional development team, overseeing task assignment and delivery',
        'Coordinated release management across development, testing, and production environments',
        'Collaborated with QA/testing team to streamline version deployments',
      ]
    },
    {
      company: 'VESTEL GLOBAL',
      role: 'Software Engineer',
      period: 'Aug 2022 – Aug 2023',
      tag: 'Full-Stack',
      highlights: [
        'Implemented software features using .Net, Flutter, Angular, SQL, CI/CD',
        'Created pipelines and releases across various environments',
        'Led scrum meetings including daily stand-ups and sprint planning',
        'Released applications on Play Store and App Store (Pakomak)',
      ]
    },
    {
      company: 'VESTEL GLOBAL',
      role: 'Software Engineer Internship',
      period: 'May 2022 – Aug 2022',
      tag: 'Flutter',
      highlights: [
        'Developed features in applications using Flutter',
        'Created "Book a Seat" — internal company app for seat reservations',
      ]
    },
    {
      company: 'MZZPR',
      role: 'Visual Media Editor',
      period: 'May 2018 – Sep 2018',
      tag: 'Media',
      highlights: [
        'Video editing for conference footage, producing impactful visual assets for brand presence',
      ]
    },
  ];

  projects = [
    {
      name: 'FSM Hosting Platform',
      tech: ['Angular', '.NET Core', 'MariaDB', 'Docker', 'Virtualmin', 'Linux'],
      desc: 'Full-stack web hosting management platform. Self-managed Linux server, custom Docker infra, CI/CD pipelines, REST API layer.',
      badge: '⭐ Golden Sponsor — Startup Weekend 2026',
      highlight: true,
    },
    {
      name: 'Collaboration project with ProgenZ',
      tech: ['Flutter', 'Angular', 'C#', '.NET', 'JWT', 'SQL'],
      desc: 'Mobile application and API with Flutter plus an admin management panel using Angular, C#, .NET, JWT, SQL.',
      badge: null,
      highlight: false,
    },
    {
      name: 'AI Motivation App',
      tech: ['Flutter', 'Go', 'Firebase', 'Gemini API'],
      desc: 'AI-driven app for daily motivation, shared reflections, and interactive content. Built with Gemini API, Go, Flutter, and Firebase.',
      badge: null,
      highlight: false,
    },
    {
      name: 'UpHill',
      tech: ['Flutter', 'Firebase'],
      desc: 'Application for hiking and information sharing implemented using Flutter and Firebase.',
      badge: null,
      highlight: false,
    },
    {
      name: 'Book a Seat',
      tech: ['Flutter'],
      desc: 'Internal company application for reserving office seats, built entirely with Flutter.',
      badge: null,
      highlight: false,
    },
  ];

  toolSkills = [
    'Git', 'GitHub', 'GitLab', 'Figma', 'Firebase', 'Jira',
    'Blender', 'Unreal Engine', 'UEFN', 'AI Tools/APIs',
    'Adobe Premiere Pro', 'Adobe Illustrator', 'Adobe Photoshop'
  ];

  otherSkills = ['Scrum', 'Team Lead', 'Agile Methodologies', 'Problem Solving'];

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 60;
    const sections = document.querySelectorAll('section[id]');
    let current = 'home';
    sections.forEach(section => {
      const el = section as HTMLElement;
      if (window.scrollY >= el.offsetTop - 120) {
        current = el.id;
      }
    });
    this.activeSection = current;
  }

  scrollTo(section: string) {
    this.menuOpen = false;
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  ngOnInit() {}
}
