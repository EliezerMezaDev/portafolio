import { Component, OnInit } from '@angular/core';

import { qualifications, projects } from '../../../assets/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  navCurrent: String = '';

  list: any = {
    qualifications,
    projects,
  };

  constructor() {}

  ngOnInit() {
    document
      .getElementById('contentScroller')
      ?.addEventListener('scroll', () => {
        const currentScroll: any =
          document.getElementById('contentScroller')?.scrollTop;

        const scrollTo_aboutMe: any =
          Number(document.getElementById('aboutMe')?.offsetTop) - 100;
        const scrollTo_qualification: any =
          Number(document.getElementById('qualification')?.offsetTop) - 100;
        const scrollTo_projects: any =
          Number(document.getElementById('projects')?.offsetTop) - 100;

        if (currentScroll > scrollTo_aboutMe) {
          this.navCurrent = 'aboutMe';
        }

        if (currentScroll > scrollTo_qualification) {
          this.navCurrent = 'qualification';
        }

        if (currentScroll > scrollTo_projects) {
          this.navCurrent = 'projects';
        }
      });
  }

  watcherScroller(_event: Event) {
    console.log('<>>>  <>>>', this.navCurrent);
  }

  changeNavCurrent(_nav: any) {
    this.navCurrent = _nav;

    const scrollTo = document.getElementById(_nav)?.offsetTop;

    this.scrollTo(scrollTo);
  }

  scrollTo(_scrollTo: any) {
    const overview: any = document.getElementById('contentScroller');
    let currentScroll: any =
      document.getElementById('contentScroller')?.scrollTop;

    if (currentScroll > _scrollTo) {
      scrollToTop(_scrollTo);
    } else {
      scrollToBotton(_scrollTo);
    }

    function scrollToBotton(_scrollLevel: any) {
      if (currentScroll >= _scrollLevel) {
        return;
      }

      overview.scrollTop += 15;
      currentScroll += 15;

      setTimeout(() => {
        scrollToBotton(_scrollLevel);
      }, 1);
    }

    function scrollToTop(_scrollLevel: any) {
      if (currentScroll <= _scrollLevel) {
        return;
      }

      overview.scrollTop -= 15;
      currentScroll -= 15;

      setTimeout(() => {
        scrollToTop(_scrollLevel);
      }, 1);
    }
  }

  navigate(_url: any, _mode: any) {}
}
