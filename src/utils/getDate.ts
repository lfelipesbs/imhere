import { months, weekDays } from "../constants/date";

export const getWeekDay = (index: number): string => weekDays[index];

export const getMonthName = (index: number): string => months[index];
