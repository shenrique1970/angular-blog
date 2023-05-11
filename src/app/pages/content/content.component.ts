import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string = "http://localhost:4200/assets/angular.jpeg"
  contentTitle:string = "MINHA NOTICIA DE EXEMPLO"
  contentDescription:string = "BLA BLA BLA BLA BLA"


  ngOnInit(): void {
   
  }
  

}
