import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('shops');
  this.route('shop', {path: 'shops/:slug'});
  this.route('shops', {path: '/'});
  this.route('shops', {path: '*wildcard'});
});

export default Router;
