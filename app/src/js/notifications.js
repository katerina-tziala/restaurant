class NotificationsManager {
  _displayClassCSS = "display_notification";

  _notificationMessages = {
    clear: {
      title: "",
      message: ""},
    offline: {
      title: "Unable to connect! retrying...",
      message: "You are able to use the Restaurant Reviews app while offline!"},
    offline_noMap: {
      title: "Unable to connect! retrying...",
      message: `You are able to use the Restaurant Reviews app while offline!<br><i><b>Notice: </b>The map is not currently available since it was not loaded yet!<i>`},
    online: {
      title: "You are back online!",
      message: "Internet connection was successfully re-established!"}
  };

  _notificationTimeout = 0;

  constructor() {
    this.createNotificationsHTML();
    this.notificationContainer = document.getElementById("notification_container");
    this.notificationHeader = document.getElementById("notification_header");
    this.notificationTitle = document.getElementById("notification_title");
    this.notificationBody = document.getElementById("notification_body");

  }

  /**
  ** Create HTML for notifications.
  **/
  createNotificationsHTML() {
    const notification_container = document.createElement("div");
    notification_container.setAttribute("id", "notification_container");
    notification_container.classList.add("notification");
    const notification_header = document.createElement("div");
    notification_header.setAttribute("id", "notification_header");
    const notification_bell = document.createElement("i");
    notification_bell.setAttribute("id", "notification_bell");
    notification_bell.classList.add("fas", "fa-bell");
    const notification_title = document.createElement("p");
    notification_title.setAttribute("id", "notification_title");
    notification_header.append(notification_bell, notification_title);
    const notification_body = document.createElement("div");
    notification_body.setAttribute("id", "notification_body");
    notification_container.append(notification_header, notification_body);
    document.body.appendChild(notification_container);
  }

  /**
  ** Display notification.
  **/
  displayNotification() {
    this.notificationContainer.classList.add(this._displayClassCSS);
    this.notificationContainer.setAttribute("role", "alert");
    this.notificationContainer.setAttribute("aria-live", "assertive");
  }

  /**
  ** Hide notification.
  **/
  hideNotification() {
    this.notificationContainer.classList.remove(this._displayClassCSS);
    this.notificationContainer.removeAttribute("role");
    this.notificationContainer.removeAttribute("aria-live");
  }

  /**
  ** Get notification content.
  **/
  getNotificationContent(key) {
    return this._notificationMessages[key];
  }
  /**
  ** Create notification content.
  **/
  createNotificationContent(notification) {
    this.notificationTitle.innerHTML = notification.title;
    this.notificationBody.innerHTML= notification.message;
  }




  /**
  ** Clear notification.
  **/
  clearNotification() {
    this.createNotificationContent(this.getNotificationContent("clear"));

    console.log("clearNotification");
  //  removeFreezer();
    if (this._notificationTimeout > 0) {
      clearTimeout(this._notificationTimeout);
    }
    // if (self.notificationInterval>0) {
    //   clearNotificationCountDown(self.timeoutMessage);
    // }
  };


  /**
  ** Generate basic notification.
  **/
  generateBasicNotification(notification, timeout) {
    this.createNotificationContent(notification);
    this.createGotItButton();
    this.displayNotification();
    this._notificationTimeout = setTimeout(() => {this.hideNotification();}, timeout);
  }










  ///////////////////// CREATE BUTTONS FOR NOTIFICATIONS. /////////////////////
  /**
  ** Create "got it" button for notification.
  **/
  createGotItButton() {
    const container = document.createElement("div");
    container.classList.add("buttons_wrapper");
    const gotitButton = DisplayManager.createButton("btn_gotit", "got it", "close notification", closeNotification);
    gotitButton.classList.add("notification_button", "gotit_btn");
    container.append(gotitButton);
    this.notificationBody.append(container);
  }

}