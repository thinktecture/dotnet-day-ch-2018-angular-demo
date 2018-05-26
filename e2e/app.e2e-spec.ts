import {DotNetDayChDemoPage} from './app.po';

describe('dotnetday-demo App', () => {
    let page: DotNetDayChDemoPage;

    beforeEach(() => {
        page = new DotNetDayChDemoPage();
    });

    it('should display message saying app works', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('app works!');
    });
});
