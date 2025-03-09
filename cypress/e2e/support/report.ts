import addContext from 'mochawesome/addContext';

Cypress.on('test:after:run', (test, runnable) => {
  if (test.state === 'failed') {
    const screenshotFileName = `${Cypress.spec.name}/${runnable.parent.title} -- ${test.title} (failed).png`;
    const screenshotPath = `../screenshots/${screenshotFileName}`;
    addContext({ test }, screenshotPath);
  }
});
