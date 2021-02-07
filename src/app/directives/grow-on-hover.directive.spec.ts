import { GrowOnHoverDirective } from './grow-on-hover.directive';
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <div growOnHover id="elementToGrow"></div>
  `
})
class GrowOnHoverTestingComponent { }

fdescribe('GrowOnHoverDirective', () => {
  let component: GrowOnHoverTestingComponent;
  let fixture: ComponentFixture<GrowOnHoverTestingComponent>;
  let elementToGrow: DebugElement;
  let elementToGrowById: DebugElement;

  it('should create an instance', () => {
    const directive = new GrowOnHoverDirective();
    expect(directive).toBeTruthy();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ GrowOnHoverDirective, GrowOnHoverTestingComponent ]
    });

    fixture = TestBed.createComponent(GrowOnHoverTestingComponent);
    component = fixture.componentInstance;

    // the element that has "growOnHover" directive, found by the directive
    elementToGrow = fixture.debugElement.query(By.directive(GrowOnHoverDirective));

    // the element that has "growOnHover" directive, found by its id
    elementToGrowById = fixture.debugElement.query(By.css('#elementToGrow'));
  });

  it('should grow the scale property of the element by a factor of 1.5', () => {
    elementToGrow.triggerEventHandler('mouseover', null);
    fixture.detectChanges();
    expect(elementToGrow.nativeElement.style.transform).not.toEqual('inherit');
    expect(elementToGrow.nativeElement.style.transform).toEqual('scale(1.5)');
  });

  it('should return the scale property of the element to normal', () => {
    elementToGrow.triggerEventHandler('mouseout', null);
    fixture.detectChanges();
    expect(elementToGrow.nativeElement.style.transform).toEqual('inherit');
    expect(elementToGrow.nativeElement.style.transform).not.toEqual('scale(1.5)');
  });

  it('by id - should grow the scale property of the element by a factor of 1.5', () => {
    elementToGrowById.triggerEventHandler('mouseover', null);
    fixture.detectChanges();
    expect(elementToGrowById.nativeElement.style.transform).not.toEqual('inherit');
    expect(elementToGrowById.nativeElement.style.transform).toEqual('scale(1.5)');
  });

  it('by id - should return the scale property of the element to normal', () => {
    elementToGrowById.triggerEventHandler('mouseout', null);
    fixture.detectChanges();
    expect(elementToGrowById.nativeElement.style.transform).toEqual('inherit');
    expect(elementToGrowById.nativeElement.style.transform).not.toEqual('scale(1.5)');
  });
});
