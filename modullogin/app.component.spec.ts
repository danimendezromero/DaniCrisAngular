import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ModulloginComponent } from './modullogin.component';

describe('ModulloginComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ModulloginComponent
      ],
    }).compileComponents();
  }));

  it('should create the modullogin', () => {
    const fixture = TestBed.createComponent(ModulloginComponent);
    const modullogin = fixture.debugElement.componentInstance;
    expect(modullogin).toBeTruthy();
  });

  it(`should have as title 'pokedex'`, () => {
    const fixture = TestBed.createComponent(ModulloginComponent);
    const modullogin = fixture.debugElement.componentInstance;
    expect(modullogin.title).toEqual('pokedex');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(ModulloginComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to pokedex!');
  });
});
