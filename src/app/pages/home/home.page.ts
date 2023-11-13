import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  navCurrent: String = '';

  list: any = {
    experience: [
      {
        timelapse: '2021 - Presente',
        url: 'https://www.grupospartan.com/',
        label: 'Grupo Spartan S.A.',

        rol: 'Desarrollador de Software',
        rol1: 'Analista de sistemas',
        rol2: '',

        description:
          'impedit molestias reprehenderit voluptate pariatur sint asperiores. Error iusto accusantium excepturi sapiente unde eos earum ullam! Cum,',
        skills: ['Ionic', 'Angular', 'React', 'TypeScript', 'JavaScript'],
      },

      {
        timelapse: '2019 - 2021',
        url: '#',
        label: 'BeeLetters C.A.',

        rol: 'Desarrollador Frontent',
        rol1: '',
        rol2: '',

        description:
          'impedit molestias reprehenderit voluptate pariatur sint asperiores. Error iusto accusantium excepturi sapiente unde eos earum ullam! Cum,',
        skills: ['Wordpress', 'CSS'],
      },
    ],
    project: [
      {
        label: 'project_1',
        description:
          'impedit molestias reprehenderit voluptate pariatur sint asperiores.Error iusto accusantium excepturi sapient',
        image: 'assets/img/auxiliar.png',
        requireds: ['Ionic', 'Angular', 'TypeScript'],
        url: '',
      },
    ],
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
        const scrollTo_experience: any =
          Number(document.getElementById('experience')?.offsetTop) - 100;
        const scrollTo_projects: any =
          Number(document.getElementById('projects')?.offsetTop) - 100;

        if (currentScroll > scrollTo_aboutMe) {
          this.navCurrent = 'aboutMe';
        }

        if (currentScroll > scrollTo_experience) {
          this.navCurrent = 'experience';
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
