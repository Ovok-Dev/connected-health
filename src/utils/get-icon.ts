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
  }
  return icon;
}
