import {Component, OnInit, ViewChild} from '@angular/core';
import {CommonService} from '../../core/services/common.service';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {
  @ViewChild('sidenav') public sidenav: MatSidenav;
  constructor(private commonService: CommonService) {
  }

  ngOnInit() {
    // this.commonService.sidebar.subscribe((click) => {
    //   console.log('toggle working main layout');
    //   this.sidenav.toggle();
    // });
  }


}
