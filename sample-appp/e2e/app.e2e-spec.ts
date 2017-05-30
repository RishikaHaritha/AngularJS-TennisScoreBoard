import { SampleApppPage } from './app.po';

describe('sample-appp App', () => {
  let page: SampleApppPage;

  beforeEach(() => {
    page = new SampleApppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
