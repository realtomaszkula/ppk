/* tslint:disable:no-unused-variable */
import { TestBed, async } from '@angular/core/testing';
import { ArticleIntroductionComponent } from './article-introduction.component';

import { ComponentFixture } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';


let component: ArticleIntroductionComponent;
let fixture: ComponentFixture<ArticleIntroductionComponent>;
let titleEl: HTMLElement;
let timeEl: HTMLElement;

describe('Component: ArticleIntroduction', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleIntroductionComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(ArticleIntroductionComponent);
    component = fixture.componentInstance;

    titleEl = fixture.debugElement.query(By.css('.title')).nativeElement;
    timeEl = fixture.debugElement.query(By.css('.time')).nativeElement;

  }))



    it('should create an instance', () => {
      let component = new ArticleIntroductionComponent();
      expect(component).toBeTruthy();
    });

    it('should display title', () => {
      component.title = 'App';
      fixture.detectChanges();
      expect(titleEl.textContent).toContain('App');
    });

    it('should set time correctly', () => {
      component.readTime = 15.4;
      expect(component.readTime).toEqual(15);
    });

    it('should display time when time set', () => {
      component.readTime = 15.4;
      fixture.detectChanges();
      expect(timeEl.textContent).toContain('15', 'time');
      expect(timeEl.textContent).toContain('minute read', 'time');
    });

    it('should NOT display time if time NOT set', () => {
      fixture.detectChanges();
      expect(timeEl.textContent).toContain('');
    });

  
});
