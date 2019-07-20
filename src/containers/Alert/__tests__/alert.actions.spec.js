import { showAlert, hideAlert } from "../alertActions";
import  * as alertConstants from "../alertActions";

describe(`Alert actions`, () => {
  it(`should display an alert`, () => {
    const alertType = "success";
    const message = "Successfully tested";
    const dispatch = () => ({})
    const expectedAction = {
      type: alertConstants.SHOW_ALERT,
      payload: {
        alertType,
        message
      }
    };
    expect(showAlert(alertType, message, dispatch)).toEqual(expectedAction);
  });

  it(`should clear alert`, () => {
    const expectedAction = { type: alertConstants.HIDE_ALERT };
    expect(hideAlert()).toEqual(expectedAction);
  });
});
