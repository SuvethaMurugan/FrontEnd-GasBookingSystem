import { TestBed } from '@angular/core/testing';

import { LoginIdServiceService } from './login-id-service.service';

describe('LoginIdServiceService', () => {
  let service: LoginIdServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginIdServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
