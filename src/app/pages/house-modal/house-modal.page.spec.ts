import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HouseModalPage } from './house-modal.page';

describe('HouseModalPage', () => {
  let component: HouseModalPage;
  let fixture: ComponentFixture<HouseModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HouseModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
