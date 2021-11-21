import HttpRequest from "./http_request";

class UserProvider extends HttpRequest {
  constructor() {
    // api api
    super("http://myjson.dit.upm.es/api/bins/h6u3");
  }

  async getTodoLists() {
    const { data } = await this.get("/");
    return data;
  }

  async createTodolist(todo) {
    await this.create("/create", todo)
  }

  async deleteTodolist(id) {
      await this.delete("/delete", id, "")
  }
}

export default UserProvider;
