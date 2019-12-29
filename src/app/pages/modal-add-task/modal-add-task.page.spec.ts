import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalAddTaskPage } from './modal-add-task.page';

describe('ModalAddTaskPage', () => {
  let component: ModalAddTaskPage;
  let fixture: ComponentFixture<ModalAddTaskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAddTaskPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalAddTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
