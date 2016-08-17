import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      heroes: [
        {
          'id': 'story',
          'title': 'HUMAN STORY',
          'body': '[CONTENT HERE]',
          'anchorTxt': 'NEXT',
          'scrollTo': '#tools'
        },
        {
          'id': 'tools',
          'title': 'TOOLS AND RESOURCES',
          'body': '[CONTENT HERE]',
          'anchorTxt': 'NEXT',
          'scrollTo': '#history'
        },
        {
          'id': 'history',
          'title': 'RICH HISTORY',
          'body': '[CONTENT HERE]',
          'anchorTxt': 'NEXT',
          'scrollTo': '#goals'
        },
        {
          'id': 'goals',
          'title': 'BIG GOAL',
          'body': '[CONTENT HERE]',
          'anchorTxt': 'BACK TO TOP',
          'scrollTo': '#story'
        }
      ]
    };
  }
});
