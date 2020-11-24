import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CotizationPage } from './cotization.page';

describe('CotizationPage', () => {
  let component: CotizationPage;
  let fixture: ComponentFixture<CotizationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CotizationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CotizationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
