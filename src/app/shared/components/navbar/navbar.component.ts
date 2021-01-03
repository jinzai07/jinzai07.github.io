import { Component, HostListener, OnInit } from '@angular/core';

import { Section } from './../../enums/section.enum';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isScrolledDown: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  get Section(): typeof Section {
    return Section;
  }

  scrollTo(el: string): void {
    document.querySelector(el).scrollIntoView({ behavior: 'smooth' });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    const navbar = document.querySelector('.sy-navbar');
    const ul = document.querySelector('.sy-navbar__links');
    const section = document.querySelector('.sy-navbar__navigations');

    if (window.pageYOffset > navbar.clientHeight) {
      ul.classList.add('sy-navbar__links--inverse');
      navbar.classList.add('sy-navbar--inverse');
      section.classList.add('col-md-10');
      this.isScrolledDown = true;
    } else {
      ul.classList.remove('sy-navbar__links--inverse');
      navbar.classList.remove('sy-navbar--inverse');
      section.classList.remove('col-md-10');
      this.isScrolledDown = false;
    }
  }
}
