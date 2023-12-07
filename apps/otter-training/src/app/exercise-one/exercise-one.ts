const path = 'app/otter-training/src/components/exercises/component';

export interface Exercise {
  title: string,
  workFolder: string,
  steps: {title: string, content: string}[]
};

export const data: Exercise = {
  "title": "Otter Training - Create a component",
  "workFolder": path,
  "steps": [{
    "title": "Step 1",
    "content": `
      <p>Welcome to the hands-on part of the Otter training.</p>
      <p>After spending a day learning about theory, it is now time to put your newly acquired knowledge in practice.<p>
      <p>In this example, we will create a new component using the otter schematics.</p>
      <p class="instructions">First of all your will need to work in the ${path} folder</p>
      <code>cd ${path}</code>
    `
    },
    {
      "title": "Step 2",
      "content": `
        <p>Now that you are in the correct folder, you just need to call the angular component generation<p>
        <p>Note the otter schematic will intercept the Angular component generator and will add some code to make it compatible with the
        different extractors<p>
        <code>ng g component --path ${path}</code>
        <p>You can see that your component has been created in your worktree.</p>
        <p>Go to your component folder and replace your template with 'Hello world'</p>
      `
      }]
};
