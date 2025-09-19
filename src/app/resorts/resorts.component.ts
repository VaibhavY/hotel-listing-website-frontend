import { Component, OnInit,OnDestroy } from '@angular/core';
import { ServiceService } from '../service/service.service';
declare var $: any;
import { Router } from '@angular/router';
import {from, noop, of, Subject} from 'rxjs';
import {map, mergeAll, mergeMap, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-resorts',
  templateUrl: './resorts.component.html',
  styleUrls: ['./resorts.component.css']
})
export class ResortsComponent implements OnInit,OnDestroy {

  destroy$ = new Subject();
  properties:any = [];
  p: number = 1;
  total: number = 0;
  type = 'Domestic';

  constructor(
    private router: Router,
    private appService: ServiceService,
  ) { }

  ngOnDestroy(): void {
    this.destroy$.complete();
  }

  ngOnInit(): void {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    this.getProperty();
  }
  setType(typeData:any){
      this.type = typeData
  }
  pageChangeEvent(event: number){
    this.p = event;
    this.getProperty();
  }
  getProperty(){
    const data = {
      category_id:2,
      page:this.p,
      type:this.type,
      d_location:$('#d_location').val(),
      d_terrain:$('#d_terrain').val(),
      i_location:$('#i_location').val(),
      i_terrain:$('#i_terrain').val(),
    };
    this.appService.login('property/list',data).pipe(takeUntil(this.destroy$)).subscribe(res=>{
      var r:any=res;
      if(r.success){
          this.properties = r.hotels.data;
          this.total = r.hotels.total;
      }else{

      }
    },error =>{

    });
  }

}






