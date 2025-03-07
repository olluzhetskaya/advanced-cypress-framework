export default class TestDataBuilder {
  private data: any = {};

  setUsername(username: string) {
    this.data.username = username;
    return this;
  }

  setPassword(password: string) {
    this.data.password = password;
    return this;
  }

  build() {
    return this.data;
  }
}