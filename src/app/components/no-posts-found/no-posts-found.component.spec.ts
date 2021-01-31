import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoPostsFoundComponent } from './no-posts-found.component';

describe('NoPostsFoundComponent', () => {
  let component: NoPostsFoundComponent;
  let fixture: ComponentFixture<NoPostsFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoPostsFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoPostsFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
