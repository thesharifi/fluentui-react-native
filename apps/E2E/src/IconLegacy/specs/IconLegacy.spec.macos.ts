import NavigateAppPage from '../../common/NavigateAppPage';
import IconLegacyPageObject from '../pages/IconLegacyPageObject';
import { PAGE_TIMEOUT, BOOT_APP_TIMEOUT } from '../../common/consts';

// Before testing begins, allow up to 60 seconds for app to open
describe('Icon Legacy Testing Initialization', function () {
  it('Wait for app load', async () => {
    await NavigateAppPage.waitForPageDisplayed(BOOT_APP_TIMEOUT);
    await expect(await NavigateAppPage.isPageLoaded()).toBeTruthy();
  });

  it('Click and navigate to Icon Legacy test page', async () => {
    await IconLegacyPageObject.waitForButtonDisplayed(PAGE_TIMEOUT);

    /* Click on component button to navigate to test page */
    await NavigateAppPage.clickAndGoToIconPage();
    await IconLegacyPageObject.waitForPageDisplayed(PAGE_TIMEOUT);

    await expect(await IconLegacyPageObject.isPageLoaded()).toBeTruthy();
  });
});