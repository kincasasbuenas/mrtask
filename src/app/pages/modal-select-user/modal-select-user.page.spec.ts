import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalSelectUserPage } from './modal-select-user.page';

describe('ModalSelectUserPage', () => {
  let component: ModalSelectUserPage;
  let fixture: ComponentFixture<ModalSelectUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalSelectUserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalSelectUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
