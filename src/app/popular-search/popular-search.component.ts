import { Component, OnInit,OnDestroy } from '@angular/core';
import { ServiceService } from '../service/service.service';
declare var $: any;
import { Router } from '@angular/router';
import {from, noop, of, Subject} from 'rxjs';
import {map, mergeAll, mergeMap, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-popular-search',
  templateUrl: './popular-search.component.html',
  styleUrls: ['./popular-search.component.css']
})
export class PopularSearchComponent implements OnInit,OnDestroy {

  destroy$ = new Subject();
  cities:any = [];
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
  getProperty(){
    const data = {};
    this.appService.login('popular-search',data).pipe(takeUntil(this.destroy$)).subscribe(res=>{
      var r:any=res;
      if(r.success){
          this.cities = r.cities;
          //this.total = r.hotels.total;
      }else{

      }
    },error =>{

    });
  }

}


