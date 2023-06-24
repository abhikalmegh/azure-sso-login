import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'side-nav-menu',
  templateUrl: './side-nav-menu.component.html',
  styleUrls: ['./side-nav-menu.component.scss']
})
export class SideNavMenuComponent implements OnInit {

  sideMenuItems = [
    { name : 'Home', route : '/dashboard', icon:'fas fa-home'},
    { name : 'Models', route : '/models', icon:'fa-solid fa-list'},
    { name : 'Datasets', route : '/dashboard', icon:'fa-solid fa-network-wired'},
    { name : 'Other', route : '', icon:'fa-solid fa-network-wired'}
  ];

  constructor(
    private elementRef: ElementRef
  ) { }

  // @HostListener('click', ['$event.target']) onClick(e: any){
  //   const matches = document.querySelectorAll(".menu-item");
  //   console.log(matches)
  //   matches.forEach((element: any) => {
  //     element.classList.remove('active'); 
  //   });
  //   const selected = document.getElementsByTagName(e);
  //   console.log('ID ',e.currentTarget.id);
  // }

  // @HostListener('document:click', ['$event.target'])
  // onClickEvent(event: MouseEvent){
  //   const selected = document.getElementsByTagName(event);
  //   console.log(selected);
  // }

  ngOnInit(): void {
  }

}
