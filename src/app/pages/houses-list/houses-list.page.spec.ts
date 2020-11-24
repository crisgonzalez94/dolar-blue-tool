import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HousesListPage } from './houses-list.page';

describe('HousesListPage', () => {
  let component: HousesListPage;
  let fixture: ComponentFixture<HousesListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HousesListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HousesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
