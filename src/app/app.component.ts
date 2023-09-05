import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: "At the Beach",
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: "In the Mountains",
      url: 'https://images.unsplash.com/photo-1480497490787-505ec076689f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: "In the Desert",
      url: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGVzZXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: "In the Woods",
      url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9yZXN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: "At the Beach",
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: "In the Mountains",
      url: 'https://images.unsplash.com/photo-1480497490787-505ec076689f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: "In the Desert",
      url: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGVzZXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: "In the Woods",
      url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9yZXN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: "At the Beach",
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: "In the Mountains",
      url: 'https://images.unsplash.com/photo-1480497490787-505ec076689f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: "In the Desert",
      url: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGVzZXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: "In the Woods",
      url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9yZXN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: "At the Beach",
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: "In the Mountains",
      url: 'https://images.unsplash.com/photo-1480497490787-505ec076689f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: "In the Desert",
      url: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGVzZXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: "In the Woods",
      url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9yZXN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: "At the Beach",
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: "In the Mountains",
      url: 'https://images.unsplash.com/photo-1480497490787-505ec076689f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: "In the Desert",
      url: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGVzZXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: "In the Woods",
      url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9yZXN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: "At the Beach",
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: "In the Mountains",
      url: 'https://images.unsplash.com/photo-1480497490787-505ec076689f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: "In the Desert",
      url: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGVzZXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: "In the Woods",
      url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9yZXN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
    },
  ]

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}
