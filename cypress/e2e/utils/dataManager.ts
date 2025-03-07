export class DataManager {
  static getTestData(key: string): any {
    const testData = require('../fixtures/testData.json');
    return testData[key];
  }
}