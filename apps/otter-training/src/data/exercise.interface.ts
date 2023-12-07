export interface Step {
  title: string,
  content: string
}
export interface Exercise {
  title: string;
  path: string;
  steps: Step[];
}
