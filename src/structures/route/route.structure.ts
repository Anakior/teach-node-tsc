export class RouteStructure<T> {
    //pattern = url
  pattern: string;
  // T = tipage du controller
  controller: T;
  action: string;
  method: "get" | "post" | "delete" | "put";

  constructor(pattern: string, controller: T, action: string, method: "get" | "post" | "delete" | "put") {
    this.pattern = pattern;
    this.controller = controller;
    this.action = action;
    this.method = method;
  }
}
