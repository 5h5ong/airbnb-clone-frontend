type CalendarDefaultStateType = {
  year: number;
  month: number;
  firstDay: number;
  lastDate: number;
};
type CalendarAction =
  | { type: 'CHANGE_YEAR'; payload: number }
  | { type: 'CHANGE_MONTH'; payload: number }
  | { type: 'CHANGE_FIRSTDAY'; payload: number }
  | { type: 'CHANGE_LASTDATE'; payload: number };
