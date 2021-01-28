import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {CommonService} from '../../services/common.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @ViewChild('sidenav') public sidenav: MatSidenav;

  constructor(private commonService: CommonService) {
  }

  ngOnInit(): void {
    this.commonService.sidebar.subscribe(() => this.sidenav.toggle());
  }

}
