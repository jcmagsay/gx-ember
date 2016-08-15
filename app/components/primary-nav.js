import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nav',
  classNames: ['primary-nav'],
  classNameBindings: ['isVisible:is-visible'],
  isVisible: true,
  navItems: ['home', 'expeditions', 'about', 'donate', 'account']
});
