import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';

import { Link } from './shared/enums/links.enum';
import { Section } from './shared/enums/section.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'planetaryshinji-v2021';

  ngOnInit(): void {
    AOS.init();
    this.runTypeWriter();
  }

  get Section(): typeof Section {
    return Section;
  }

  get Link(): typeof Link {
    return Link;
  }

  get currentYear(): number {
    return new Date().getFullYear()
  }

  scrollTo(el: string): void {
    document.querySelector(el).scrollIntoView({ behavior: 'smooth' });
  }

  navigateTo(link: string): void {
    window.open(link, "_blank");
  }

  private runTypeWriter(): void {
    let i = 0;
    const text = 'Hi, I\'m Shinji.';
    const speed = 120;

    const typeWriter = () => {
      const introDiv = document.querySelector(".sy-main__content--header");

      if (i < text.length) {
        introDiv.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      } else {
        setTimeout(() => {
          introDiv.innerHTML = '';
          i = 0;
          typeWriter();
        }, 2500);
      }
    }
    typeWriter();
  }
}
