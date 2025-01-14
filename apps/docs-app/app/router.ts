import EmberRouter from '@ember/routing/router';
import config from 'docs-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('cards');
  this.route('faq');
  this.route('marketing');
  this.route('promo');
  this.route('workflow-tray');
  this.route('components', function () {
    this.route('button');
    this.route('card');
    this.route('header');
    this.route('form', function () {
      this.route('checkbox');
      this.route('checkbox-group');
      this.route('phone-input');
      this.route('radio-group');
      this.route('select');
      this.route('text-area');
      this.route('text-input');
    });
    this.route('icon');
    this.route('navbar');
    this.route('footer');
  });
  this.route('helpers');
  this.route('mktg-components', function () {
    this.route('card');
    this.route('card-container');
    this.route('faq');
    this.route('footer');
    this.route('header');
    this.route('promo');
    this.route('promo-container');
    this.route('section-header');
    this.route('service-pricing');
  });
  this.route('modifiers');
  this.route('services');
});
