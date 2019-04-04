import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkDeleteComponent } from './link-delete.component';

describe('LinkDeleteComponent', () => {
  let component: LinkDeleteComponent;
  let fixture: ComponentFixture<LinkDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
