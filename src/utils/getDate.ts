import { months, weekDays } from "../constants/date";

/**
 * Retorna o nome do dia da semana com base no índice.
 * @param index - Índice do dia da semana (0 para Domingo, 6 para Sábado).
 * @returns Nome do dia da semana.
 */
export const getWeekDay = (index: number): string => weekDays[index];

/**
 * Retorna o nome do mês com base no índice.
 * @param index - Índice do mês (0 para Janeiro, 11 para Dezembro).
 * @returns Nome do mês.
 */
export const getMonthName = (index: number): string => months[index];
