/* eslint-disable @typescript-eslint/naming-convention */
import { Component } from '@angular/core';
import { google } from 'googleapis';
import { environment } from '../../environments/environment';
declare var gapi : any;

@Component({
  selector: 'app-calendar',
  templateUrl: 'calendar.page.html',
  styleUrls: ['calendar.page.scss']
})

export class CalendarPage {

  // Discovery doc URL for APIs used by the quickstart
  DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest';

  // Authorization scopes required by the API; multiple scopes can be
  // included, separated by spaces.
  SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';

  tokenClient;
  gapiInited = false;
  gisInited = false;

  constructor() {
    document.getElementById('authorize_button').style.visibility = 'hidden';
    document.getElementById('signout_button').style.visibility = 'hidden';
  }

  /**
   * Callback after api.js is loaded.
   */
  gapiLoaded() {
    gapi.load('client', this.intializeGapiClient);
  }

  /**
   * Callback after the API client is loaded. Loads the
   * discovery doc to initialize the API.
   */
  async intializeGapiClient() {
    await gapi.client.init({
      apiKey: environment.GOOGLE_CAL_API_KEY,
      discoveryDocs: [this.DISCOVERY_DOC],
    });
    this.gapiInited = true;
    this.maybeEnableButtons();
  }

  /**
   * Callback after Google Identity Services are loaded.
   */
  gisLoaded() {
    const tokenClient = google.accounts.oauth2.initTokenClient({
      client_id: environment.GOOGLE_CAL_CLIENT_ID,
      scope: this.SCOPES,
      callback: '', // defined later
    });
    this.gisInited = true;
    this.maybeEnableButtons();
  }

  /**
   * Enables user interaction after all libraries are loaded.
   */
  maybeEnableButtons() {
    if (this.gapiInited && this.gisInited) {
      document.getElementById('authorize_button').style.visibility = 'visible';
    }
  }

  /**
   *  Sign in the user upon button click.
   */
  handleAuthClick() {
    this.tokenClient.callback = async (resp) => {
      if (resp.error !== undefined) {
        throw (resp);
      }
      document.getElementById('signout_button').style.visibility = 'visible';
      document.getElementById('authorize_button').innerText = 'Refresh';
      await this.listUpcomingEvents();
    };

    if (gapi.client.getToken() === null) {
      // Prompt the user to select a Google Account and ask for consent to share their data
      // when establishing a new session.
      this.tokenClient.requestAccessToken({prompt: 'consent'});
    } else {
      // Skip display of account chooser and consent dialog for an existing session.
      this.tokenClient.requestAccessToken({prompt: ''});
    }
  }

  /**
   *  Sign out the user upon button click.
   */
  handleSignoutClick() {
    const token = gapi.client.getToken();
    if (token !== null) {
      google.accounts.oauth2.revoke(token.access_token);
      gapi.client.setToken(token);
      document.getElementById('content').innerText = '';
      document.getElementById('authorize_button').innerText = 'Authorize';
      document.getElementById('signout_button').style.visibility = 'hidden';
    }
  }

  /**
   * Print the summary and start datetime/date of the next ten events in
   * the authorized user's calendar. If no events are found an
   * appropriate message is printed.
   */
  async listUpcomingEvents() {
    let response;
    try {
      const request = {
        calendarId: 'primary',
        timeMin: (new Date()).toISOString(),
        showDeleted: false,
        singleEvents: true,
        maxResults: 10,
        orderBy: 'startTime',
      };
      response = await gapi.client.calendar.events.list(request);
    } catch (err) {
      document.getElementById('content').innerText = err.message;
      return;
    }

    const events = response.result.items;
    if (!events || events.length === 0) {
      document.getElementById('content').innerText = 'No events found.';
      return;
    }
    // Flatten to string to display
    const output = events.reduce(
        (str, event) => `${str}${event.summary} (${event.start.dateTime || event.start.date})\n`,
        'Events:\n');
    document.getElementById('content').innerText = output;
  }
}
