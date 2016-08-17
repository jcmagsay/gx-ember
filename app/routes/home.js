import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      heroes: [
        {
          'id': 'story',
          'title': 'HUMAN STORY',
          'body': '[CONTENT HERE]',
          'anchorTxt': 'NEXT'
        },
        {
          'id': 'tools',
          'title': 'TOOLS AND RESOURCES',
          'body': '[CONTENT HERE]',
          'anchorTxt': 'NEXT'
        },
        {
          'id': 'history',
          'title': 'RICH HISTORY',
          'body': '[CONTENT HERE]',
          'anchorTxt': 'NEXT'
        },
        {
          'id': 'goals',
          'title': 'BIG GOAL',
          'body': '[CONTENT HERE]',
          'anchorTxt': 'NEXT'
        }
      ]
    }
  }
});
