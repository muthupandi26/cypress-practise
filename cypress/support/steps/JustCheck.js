import { Homepage } from "../pages/actions/homepage.po";
import { BaseAction } from "../common/baseAction";
import { Constant } from "../common/constants";



const baseAction = new BaseAction();

When("Visit on any website", () => {
    baseAction.openBrowser(Constant.BASE_URL);
    // homepage.loginWith(login.username, login.password);
});