ImageFeed = {
  model: {
    photos: function() {
      var route = m.route
      var quest = m.route.param('quest')
      var task = m.route.param('task')
      return Photos.find({
        quest: quest,
        task: task
      }, {
        sort: {
          createdAt: -1
        }
      }).fetch()

    }
  },
  controller: reactive(function() {
    ctrl = this
    ctrl.css = ImageFeed.stylesheet().classes
    ctrl.photos = ImageFeed.model.photos()
    return ctrl
  }),
  view: function(ctrl) {
    attr = {
      imageFeed: {
        class: ctrl.css.imageFeed
      },
      feed: {
        class: ctrl.css.feed
      },
      photoContainer: {
        class: ctrl.css.photoContainer
      },
      photo: {
        class: ctrl.css.photo
      }

    }
    return m('div.imageFeed', attr.imageFeed, [
      NavBarFixed,
      m('div.feed', attr.feed, [
        ctrl.photos.slice(0, 6).map(function(photo) {
          return m('div', attr.photoContainer, [
            m('img[src=' + photo.image + ']', attr.photo)
          ])
        })
      ])
    ])
  },
  styles: {
    imageFeed: {
      'height': '100%',
      'width': '100%'
    },
    feed: {
      'margin-top': '10%',
      'height': '90%',
      'width': '100%'
    },
    photoContainer: {
      'max-width': '100%'
    },
    photo: {
      'padding': '10px'
    }
  },
  stylesheet: function () {
    this._stylesheet || (this._stylesheet = jss.createStyleSheet(this.styles).attach())
    return this._stylesheet
  }
}