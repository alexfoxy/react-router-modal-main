

class GalleryVM {

  constructor(router) {
    this.router = router
  }

  willFocus = (params) => {
    console.log("GALLERY FOCUSSED", params)
  }

  showImage = (id) => {
    this.router.navigate('/gallery/' + id)
  }
}

export default GalleryVM