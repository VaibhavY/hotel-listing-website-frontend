
import { Component, OnInit,OnDestroy } from '@angular/core';
import { ServiceService } from '../service/service.service';
declare var $: any;
import { Router } from '@angular/router';
import {from, noop, of, Subject} from 'rxjs';
import {map, mergeAll, mergeMap, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit,OnDestroy {

  destroy$ = new Subject();
  blogs:any = [];

  constructor(
    private router: Router,
    private appService: ServiceService,
  ) { }

  ngOnDestroy(): void {
    this.destroy$.complete();
  }

  ngOnInit(): void {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    this.getBlogs();
  }
  getBlogs(){
    const data = {
      type:'News',
      page:'InnerPage'
    };
    this.appService.login('blogs/list',data).pipe(takeUntil(this.destroy$)).subscribe(res=>{
      var r:any=res;
      if(r.success){
          this.blogs = r.blogs;
      }else{

      }
    },error =>{

    });
  }

}
