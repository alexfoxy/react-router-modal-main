

class ImageVM {

  constructor(router) {
    this.router = router
  }

  willFocus = (params) => {
    console.log("image focussed", params)
  }
}

export default ImageVM