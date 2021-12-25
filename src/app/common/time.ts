export interface Time {
  hours: number;
  minutes: number;
}

export function equalTime(t1: Time, t2: Time): boolean {
  return t1.hours === t2.hours && t1.minutes === t2.minutes;
}
