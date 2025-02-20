import { Component, OnInit, OnDestroy } from '@angular/core';

interface Service {
  name: string;
  image: string;
  description: string;
  
}

interface Project {
  id: string;
  title: string;
  image: string;
  client?: string;
  contractor?: string;
  engineer?: string;
  CreativeLabs?: string;
  RetailShops?: string;
  MarzouquiVilla?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  selectedService: Service | null = null;
  private images = [
    'hero.jpeg',
    'Slider3.jpg',
    'Slider2.jpg',
  ];
  private currentIndex = 0;
  private intervalId: any;

  ngOnInit() {
    this.startSlideshow();
    this.updateBackgroundImage();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private startSlideshow() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000); // Change slide every 5 seconds
  }

  private updateBackgroundImage() {
    const heroElement = document.querySelector('.hero') as HTMLElement;
    if (heroElement) {
      heroElement.style.backgroundImage = `url(${this.images[this.currentIndex]})`;
    }
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.updateBackgroundImage();
    this.resetTimer();
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.updateBackgroundImage();
    this.resetTimer();
  }

  private resetTimer() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.startSlideshow();
  }

  services: Service[] = [
    {
      name: 'Carpentry Works',
      image: 'Carpenter2.jpg',
      description: 'Expert carpentry services for all your woodworking needs.'
    },
    {
      name: 'Cleaning Services',
      image: 'CW2.jpg',
      description: 'Professional cleaning services for commercial and residential spaces.'
    },
    {
      name: 'Electrical Works',
      image: 'EW2.jpg',
      description: 'Complete electrical solutions for your property.'
    },
    {
      name: 'Fit-out Works',
      image: 'FO4.jpg',
      description: 'Custom fit-out solutions for commercial spaces.'
    },
    {
      name: 'HVAC Works',
      image: 'HVAC3.jpg',
      description: 'Installation and maintenance of HVAC systems.'
    },
    {
      name: 'Maintenance Contracts',
      image: 'MNW1.png',
      description: 'Regular maintenance services for your property.'
    },
    {
      name: 'Masonry Works',
      image: 'TW3.png',
      description: 'Professional masonry services for construction projects.'
    },
    {
      name: 'Painting Works',
      image: 'assets/services/painting.jpg',
      description: 'Quality painting services for interior and exterior.'
    },
    {
      name: 'Plumbing & Sewerage Works',
      image: 'assets/services/plumbing.jpg',
      description: 'Complete plumbing and sewerage solutions.'
    },
    {
      name: 'Structure/Steel Works',
      image: 'assets/services/steel.jpg',
      description: 'Structural steel work for construction projects.'
    },
    {
      name: 'Tiling Works',
      image: 'assets/services/tiling.jpg',
      description: 'Professional tiling services for all surfaces.'
    },
    {
      name: 'Water Proofing Works',
      image: 'assets/services/waterproofing.jpg',
      description: 'Effective waterproofing solutions for your property.'
    }
  ];
  selectService(service: Service) {
    this.selectedService = this.selectedService === service ? null : service;
  }

  projects: Project[] = [
    {
      id: 'creative-lab',
      title: 'CREATIVE LAB - DUBAI POLICE',
      image: '1-3.jpg',
      client: 'Dubai Police Main',
      contractor: 'Speed House',
      engineer: 'Farhan Sh...'
    },
    {
      id: 'villa-01',
      title: 'VILLA - 01 - DUBAI',
      image: '010.jpeg'
    },
    {
      id: 'fardan-villa',
      title: 'FARDAN VILLA - DUBAI',
      image: '1-1.jpg'
    },
    {
      id: 'more-projects',
      title: 'MORE PROJECTS',
      image: 'IMG_E1146.jpg',
      CreativeLabs: 'Dubai Police',
      RetailShops: 'Dubai Al',
     MarzouquiVilla: 'Dubai ...'
    }
  ];


  galleryImages = [
    { url: '3.jpg', alt: 'Project Image 1' },
    { url: '48.jpg', alt: 'Project Image 2' },
    { url: '49.jpg', alt: 'Project Image 3' },
    { url: '33.jpg', alt: 'Project Image 4' },
    { url: '5.jpg', alt: 'Project Image 5' }
  ];

  onSubmit() {
    // Handle form submission
    console.log('Form submitted');
  }
}
