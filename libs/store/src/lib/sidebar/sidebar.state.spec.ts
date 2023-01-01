import { TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from "@ngxs/store";
import {
  OrderState,
  SetCreateOrderAction,
  SetCreateOrderValidAction,
  SetIsCollapseAction,
  SidebarState
} from "@star-food/store";

describe('Order State', () => {
  let store: Store;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([SidebarState])]
    });

    store = TestBed.inject(Store);
  });

  it('it set is collapse action true', () => {
    store.dispatch(new SetIsCollapseAction(true));
    const valid = store.selectSnapshot(SidebarState.getIsCollapse);
    expect(valid).toBe(true);
  });

  it('it set is collapse action false', () => {
    store.dispatch(new SetIsCollapseAction(false));
    const valid = store.selectSnapshot(SidebarState.getIsCollapse);
    expect(valid).toBe(false);
  });

});
