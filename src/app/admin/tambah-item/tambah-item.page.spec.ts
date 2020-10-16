import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TambahItemPage } from './tambah-item.page';

describe('TambahItemPage', () => {
  let component: TambahItemPage;
  let fixture: ComponentFixture<TambahItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TambahItemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TambahItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
