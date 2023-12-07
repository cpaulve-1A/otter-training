import { Exercise } from "./exercise.interface";

const path = 'apps/otter-training/src/components/exercises/one';

export const exerciseOneData: Exercise = {
  title: 'Create your first component',
  path,
  steps: [{
    title: 'Use angular generator',
    content: `
      <p>Let's create your first component using Otter.<br>
      In this exercise, you will only work in the exercise one folder, you should not affect any other files.</p>
      <p>Let's generate your component with your usual angular generator</p>
      <code>ng g component --path ${path}</code>
      <p>Answer the usual questions and check your code. In addition to the Angular component usual code,
      you can see some additional code. <br> This comes from our own generators which intercepted the Angular ones.</p>
  `
  }, {
    title: 'Integrate your component',
    content: `<p>Integrate the component in the ComponentCreationExercise and you will see it appear in the UI below.</p>
    <p> Go to the <mark>${path}/component-creation-exercise</mark> and add your new module in the <mark>ComponentCreationExerciseModule</mark> list of imports.</p>
    You can now add your component selector in the <mark>${path}/component-creation-exercise/component-creation-exercise.html</mark>    </p>
    <code>&lt;app-my-component-pres&gt;&lt;/app-my-component-pres&gt;</code>
    `
  }
]};
