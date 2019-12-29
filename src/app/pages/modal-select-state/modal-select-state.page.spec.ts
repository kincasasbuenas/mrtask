import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalSelectStatePage } from './modal-select-state.page';

describe('ModalSelectStatePage', () => {
  let component: ModalSelectStatePage;
  let fixture: ComponentFixture<ModalSelectStatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalSelectStatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalSelectStatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
