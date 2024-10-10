

class UserVM {

  constructor(router) {
    this.router = router
  }

  willFocus = (params) => {
    console.log("user focussed", params)
  }
}

export default UserVM