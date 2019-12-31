import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalEditTaskPage } from './modal-edit-task.page';

describe('ModalEditTaskPage', () => {
  let component: ModalEditTaskPage;
  let fixture: ComponentFixture<ModalEditTaskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEditTaskPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalEditTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
