export function getIcon(iconName: string) {
  let icon;
  switch (iconName) {
    case 'monitoring':
      icon = require('../../assets/images/icon-monitoring.png');
      break;
    case 'care':
      icon = require('../../assets/images/icon-care.png');
      break;
    case 'team':
      icon = require('../../assets/images/icon-team.png');
      break;
    case 'activities':
      icon = require('../../assets/images/icon-activities.png');
      break;
    case 'hiv-monitoring':
      icon = require('../../assets/images/image-hiv-monitoring.png');
      break;
    case 'arrow-right':
      icon = require('../../assets/images/icon-arrow-right.png');
      break;
    case 'medication':
      icon = require('../../assets/images/icon-medication.png');
      break;
    case 'questionnaire':
      icon = require('../../assets/images/icon-questionnaire.png');
      break;
    case 'learn':
      icon = require('../../assets/images/icon-learn.png');
      break;
    case 'bell':
      icon = require('../../assets/images/icon-bell.png');
      break;
    case 'grace':
      icon = require('../../assets/images/icon-grace.png');
      break;
    case 'loop':
      icon = require('../../assets/images/icon-loop.png');
      break;
    case 'heart':
      icon = require('../../assets/images/icon-heart.png');
      break;
    case 'pressure':
      icon = require('../../assets/images/icon-pressure.png');
      break;
    case 'temperature':
      icon = require('../../assets/images/icon-temperature.png');
      break;
    case 'weight':
      icon = require('../../assets/images/icon-weight.png');
      break;
  }
  return icon;
}
