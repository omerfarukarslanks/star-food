import { TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from "@ngxs/store";
import { PageConfigState, SetPageTitle } from "@star-food/store";

describe('Order State', () => {
  let store: Store;
  const dummyTitle = 'Test Title';
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([PageConfigState])]
    });

    store = TestBed.inject(Store);
  });

  it('it title validation', () => {
    store.dispatch(new SetPageTitle(dummyTitle));
    const title = store.selectSnapshot(PageConfigState.getPageTitle);
    expect(title).toBe(dummyTitle);
  });

});
