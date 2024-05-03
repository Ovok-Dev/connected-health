import { Color } from '@/types/colors';
import type { Task } from '@/types/task.types';

export function getTaskColor(taskType: Task): Color {
  let taskColor: Color;
  switch (taskType) {
    case 'caretask':
      taskColor = Color.Blue;
      break;
    case 'consultation':
      taskColor = Color.Yellow;
      break;
    case 'document':
      taskColor = Color.Yellow;
      break;
    case 'learn':
      taskColor = Color.Purple;
      break;
    case 'medication':
      taskColor = Color.Green;
      break;
    case 'questionnaire':
      taskColor = Color.Red;
      break;
    case 'therapy':
      taskColor = Color.Yellow;
      break;
    case 'vitals':
      taskColor = Color.VitalsGreen;
      break;
  }
  return taskColor;
}
