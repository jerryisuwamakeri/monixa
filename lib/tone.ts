export type Tone = "indigo" | "orange" | "red" | "ink";

/** Cycles the brand tones so a grid of icon tiles reads with colour. */
const CYCLE: Tone[] = ["indigo", "orange", "red", "ink"];

export function toneFor(i: number): Tone {
  return CYCLE[i % CYCLE.length] as Tone;
}
