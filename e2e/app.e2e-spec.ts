import { BetterNotesFlexPage } from './app.po';

describe('better-notes-flex App', function() {
  let page: BetterNotesFlexPage;

  beforeEach(() => {
    page = new BetterNotesFlexPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
