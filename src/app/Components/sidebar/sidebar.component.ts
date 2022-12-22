import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

sideBarButtonClick(){
  let sidebar = document.querySelector(".sidebar");
  let sidebarLeft = document.getElementById("sidebar-left")
  let mainbody = document.getElementById("main-body")
  if (sidebarLeft.style.width == "18%") {
    sidebarLeft.style.width = "7%"
    mainbody.style.width = "93%"
  }else{
    sidebarLeft.style.width = "18%"
    mainbody.style.width = "82%"
  }
 
    sidebar.classList.toggle("active");
}
}
