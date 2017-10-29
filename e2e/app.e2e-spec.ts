import { GithubProfilerPage } from './app.po';

describe('github-profiler App', () => {
  let page: GithubProfilerPage;

  beforeEach(() => {
    page = new GithubProfilerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
