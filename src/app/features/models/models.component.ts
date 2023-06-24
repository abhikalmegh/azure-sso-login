import { Component, HostListener, OnInit } from '@angular/core';
import { Inject }  from '@angular/core';
import { DOCUMENT } from '@angular/common'; 
import { ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs";
import { ModelCard } from './../../shared/models/card-model';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.scss']
})
export class ModelsComponent implements OnInit {

  search: string = '';
  cardView: boolean = true;

  constructor(
    @Inject(DOCUMENT) document: Document,
    private route : ActivatedRoute) {
   }

  ngOnInit(): void{
    // this.route.data.subscribe((res : {modelData : ModelCard}) => {
    //   console.log('Res ', data.modelData.models);
    // });
  }

  @HostListener('document:mousewheel', ['$event'])
  onDocumentMousewheelEvent(event: any) {
    var header = document.getElementById("stickySearchBar");
    var sticky = 207;//header!.offsetTop;


    if (window.pageYOffset > sticky) {
      header!.classList.add("sticky");
    } else {
      header!.classList.remove("sticky");
    }
  }

  searchModel(): void {
    if (this.search.trim()) {
      this.cardView = false;
    }
  }

  changeView(view: string): void {
    this.cardView = (view == 'block') ? true : false;
  }

}
