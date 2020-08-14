import { CensoringService } from './censoring.service';

describe('CensoringService', () => {
  let service: CensoringService;

  beforeEach(() => {
    service = new CensoringService(['foo', 'bar']);
  });

  it('should return false on swear word', (done) => {
    service.isAllowed('foo').subscribe((allowed) => {
      expect(allowed).toBe(false);
      done();
    });
  });

  it('should return false on not swear word', (done) => {
    service.isAllowed('baz').subscribe((allowed) => {
      expect(allowed).toBe(true);
      done();
    });
  });
});
