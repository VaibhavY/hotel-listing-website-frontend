import { Component, OnInit,OnDestroy } from '@angular/core';
import { ServiceService } from '../service/service.service';
declare var $: any;
import { Router } from '@angular/router';
import {from, noop, of, Subject} from 'rxjs';
import {map, mergeAll, mergeMap, takeUntil} from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  destroy$ = new Subject();
  showpopup = false;
  packages:any = [];
  topSection:any = [];
  heroSection:any = [];
  blockOne:any = [];
  blockTwo:any = [];

  constructor(
    private router: Router,
    private appService: ServiceService,
  ) { }

  ngOnInit(): void {
    this.getHeroSection();
    this.getTopSection();
    this.getBlockOneSection();
    this.getBlockTwoSection();
    $('html, body').animate({ scrollTop: 0 }, 'slow');

      $('.pick-some-imgslider').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots:false,
        video:true,
        lazyLoad:true,
        center: true,
        items:8.5,
        autoplay: true,
        responsive: {
            0: {
                items:2.5
            },
            600: {
                items: 4
            },

            700: {
                items: 5.2
            },

            1000: {
                items: 8.5
            },
            
        }
    });
  }
  ngOnDestroy(): void {
    this.destroy$.complete();
  }
  getTopSection(){
    const data = {id:12};
    this.appService.login('page/data/get',data).pipe(takeUntil(this.destroy$)).subscribe(res=>{
      var r:any=res;
      if(r.success){
          this.topSection = r.record;
      }else{

      }
    },error =>{

    });
  }
  getHeroSection(){
    const data = {id:16};
    this.appService.login('page/data/get',data).pipe(takeUntil(this.destroy$)).subscribe(res=>{
      var r:any=res;
      if(r.success){
          this.heroSection = r.record;
      }else{

      }
    },error =>{

    });
  }
  getBlockOneSection(){
    const data = {id:13};
    this.appService.login('page/data/get',data).pipe(takeUntil(this.destroy$)).subscribe(res=>{
      var r:any=res;
      if(r.success){
          this.blockOne = r.record;
      }else{

      }
    },error =>{

    });
  }
  getBlockTwoSection(){
    const data = {id:14};
    this.appService.login('page/data/get',data).pipe(takeUntil(this.destroy$)).subscribe(res=>{
      var r:any=res;
      if(r.success){
          this.blockTwo = r.record;
      }else{

      }
    },error =>{

    });
  }

}



