import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('expeditions', function() {
    this.route('peru');
    this.route('upcoming');
  });
  this.route('about');
  this.route('donate');
  this.route('account');
});

export default Router;
