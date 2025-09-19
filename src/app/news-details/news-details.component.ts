
import { Component, OnInit,OnDestroy } from '@angular/core';
import { ServiceService } from '../service/service.service';
declare var $: any;
import { Router,ActivatedRoute } from '@angular/router';
import {from, noop, of, Subject} from 'rxjs';
import {map, mergeAll, mergeMap, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit,OnDestroy {

  destroy$ = new Subject();
  blogs:any = [];
  blogData:any;
  slug:any;

  constructor(
    private router: Router,
    private appService: ServiceService,
    private route: ActivatedRoute
  ) { }

  ngOnDestroy(): void {
    this.destroy$.complete();
  }

  ngOnInit(): void {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    this.slug = this.route.snapshot.params['slug'];
    this.getBlog();
  }
  getBlog(){
    const data = {
      type:'Blog',
      slug:this.slug
    };
    this.appService.login('blog/get',data).pipe(takeUntil(this.destroy$)).subscribe(res=>{
      var r:any=res;
      if(r.success){
        this.blogData = r.blogData;
          this.blogs = r.blogs;
      }else{

      }
    },error =>{

    });
  }

}

