import { SampleHttpappPage } from './app.po';

describe('sample-httpapp App', () => {
  let page: SampleHttpappPage;

  beforeEach(() => {
    page = new SampleHttpappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
