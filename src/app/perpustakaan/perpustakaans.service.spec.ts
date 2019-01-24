import { TestBed } from '@angular/core/testing';
import {PerpustakaansService} from './perpustakaans.service';

describe('PerpustakaansService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PerpustakaansService 
    = TestBed.get(PerpustakaansService);
    expect(service).toBeTruthy();
  });
});
