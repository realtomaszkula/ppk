/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { LineBreakComponent } from './line-break.component';
import { ComponentFixture } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement, Component }    from '@angular/core';


let component: LineBreakComponent;
let fixture: ComponentFixture<LineBreakComponent>;
let el: DebugElement;


describe('Component: LineBreak', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LineBreakComponent]
    }).compileComponents();
  
    fixture = TestBed.createComponent(LineBreakComponent);
    component = fixture.componentInstance;
  
  }));

  const getLineBreak = () => fixture.debugElement.queryAll(By.css('.line-break'));

  it('should create line break when ten items left ', () => {
    // last item in arr is arr.length - 1, so passing length 10 + 1;
    component.index = 24;
    component.length = 35;

    fixture.detectChanges();
    expect(getLineBreak().length).toBe(1);
    expect(component.show).toBe(true);

    component.index = 34;
    component.length = 45;

    fixture.detectChanges();
    expect(getLineBreak().length).toBe(1);
    expect(component.show).toBe(true);

    component.index = 44;
    component.length = 55;

    fixture.detectChanges();
    expect(getLineBreak().length).toBe(1);
    expect(component.show).toBe(true);
  });

  it('should NOT create line break for first 20 items', () => {
      component.index = 4;
      component.length = 35;

      fixture.detectChanges();
      expect(getLineBreak().length).toBe(0); 
      expect(component.show).toBe(false);

      component.index = 4;
      component.length = 35;

      fixture.detectChanges();
      expect(getLineBreak().length).toBe(0);
      expect(component.show).toBe(false);

  });

  it('should NOT create line break when ten items left but length < 15', () => {
    component.index = 4;
    component.length = 14;

    fixture.detectChanges();
    expect(getLineBreak().length).toBe(0);
    expect(component.show).toBe(false);
  });


  it('should NOT craete line break after last item', () => {
    component.index = 44;
    component.length = 45;

    fixture.detectChanges();
    expect(getLineBreak().length).toBe(0);
    expect(component.show).toBe(false);
  });
});
