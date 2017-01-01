var data = {
  templates: {
    'stl-2015-home': {
      title: 'St. Louis Blues 2015 domácí',
      style: {
        image: 'src/gfx/stl-2015-home.png'
      },
      text: {
        'surname': {
          controls: {
            placeholder: 'Příjmení',
            parentClass: 'col-xs-9'
          },
          style: {
            'x': 150,
            'y': 261,
            'text-anchor': 'middle',
            'font-family': 'new_athletic_m54',
            'fill': '#fff',
            'stroke': '#00285d',
            'stroke-width': 7,
            'paint-order': 'stroke',
            'font-size': 34
          }
        },
        'number': {
          controls: {
            placeholder: 'Číslo',
            parentClass: 'col-xs-2'
          },
          style: {
            'x': 190,
            'y': 105,
            'text-anchor': 'middle',
            'font-family': 'new_athletic_m54',
            'fill': '#fff',
            'stroke': '#00285d',
            'stroke-width': 7,
            'paint-order': 'stroke',
            'font-size': 42
          }
        }
      }
    },
    'stl-2015-away': {
      title: 'St. Louis Blues 2015 hosté',
      style: {
        image: 'src/gfx/stl-2015-away.png'
      },
      text: {
        'surname': {
          controls: {
            placeholder: 'Příjmení',
            parentClass: 'col-xs-9'
          },
          style: {
            'x': 150,
            'y': 261,
            'text-anchor': 'middle',
            'font-family': 'new_athletic_m54regular',
            'fill': '#00285d',
            'stroke': '#ffb924',
            'stroke-width': 4,
            'paint-order': 'stroke',
            'font-size': 34
          }
        },
        'number': {
          controls: {
            placeholder: 'Číslo',
            parentClass: 'col-xs-2'
          },
          style: {
            'x': 190,
            'y': 105,
            'text-anchor': 'middle',
            'font-family': 'new_athletic_m54regular',
            'fill': '#00285d',
            'stroke': '#ffb924',
            'stroke-width': 4,
            'paint-order': 'stroke',
            'font-size': 42
          }
        }
      }
    },
    'stl-2013-home': {
      title: 'St. Louis Blues 2013 domácí',
      style: {
        image: 'src/gfx/stl-2013-home.png'
      },
      text: {
        'name': {
          controls: {
            placeholder: 'Jméno',
            parentClass: 'col-xs-4'
          },
          style: {
            'x': 150,
            'y': 78,
            'text-anchor': 'middle',
            'font-family': 'jersey_m54',
            'fill': '#fff',
            'font-size': 18.6
          }
        },
        'surname': {
          controls: {
            placeholder: 'Příjmení',
            parentClass: 'col-xs-5'
          },
          style: {
            'x': 150,
            'y': 254,
            'text-anchor': 'middle',
            'font-family': 'jersey_m54',
            'fill': '#fff',
            'stroke': '#f6c93b',
            'stroke-width': 6,
            'paint-order': 'stroke',
            'font-size': 35
          },
          clone: [
            {'stroke': '#234190', 'stroke-width': 3}
          ]
        },
        'number': {
          controls: {
            placeholder: 'Číslo',
            parentClass: 'col-xs-2'
          },
          style: {
            'x': 255,
            'y': 165,
            'text-anchor': 'middle',
            'font-family': 'jersey_m54',
            'fill': '#fff',
            'stroke': '#f6c93b',
            'stroke-width': 5,
            'paint-order': 'stroke',
            'font-size': 44
          },
          clone: [
            {'fill': 'none', 'stroke': '#234190', 'stroke-width': 2},
            {'x': 45, 'stroke': '#f6c93b', 'stroke-width': 5},
            {'x': 45, 'fill': 'none', 'stroke': '#234190', 'stroke-width': 2}
          ]
        }
      }
    },
    'stl-2013-away': {
      title: 'St. Louis Blues 2013 hosté',
      style: {
        image: 'src/gfx/stl-2013-away.png'
      },
      text: {
        'name': {
          controls: {
            placeholder: 'Jméno',
            parentClass: 'col-xs-4'
          },
          style: {
            'x': 150,
            'y': 78,
            'text-anchor': 'middle',
            'font-family': 'jersey_m54',
            'fill': '#000',
            'font-size': 18.6
          }
        },
        'surname': {
          controls: {
            placeholder: 'Příjmení',
            parentClass: 'col-xs-5'
          },
          style: {
            'x': 150,
            'y': 254,
            'text-anchor': 'middle',
            'font-family': 'jersey_m54',
            'fill': 'none',
            'stroke': '#000',
            'stroke-width': 4,
            'paint-order': 'stroke',
            'font-size': 35
          },
          clone: [
            {'fill': 'black', 'stroke': '#fff', 'stroke-width': 2}
          ]
        },
        'number': {
          controls: {
            placeholder: 'Číslo',
            parentClass: 'col-xs-2'
          },
          style: {
            'x': 255,
            'y': 165,
            'text-anchor': 'middle',
            'font-family': 'jersey_m54',
            'fill': 'none',
            'stroke': '#000',
            'stroke-width': 4,
            'paint-order': 'stroke',
            'font-size': 44
          },
          clone: [
            {'fill': 'black', 'stroke': '#fff', 'stroke-width': 2},
            {'x': 45},
            {'x': 45, 'fill': 'black', 'stroke': '#fff', 'stroke-width': 2}
          ]
        }
      }
    }
  }
};

if (window.localStorage) {
  var store = window.localStorage

  if (store.getItem('groups')) {
  // if (0 && store.getItem('groups')) {
    data.groups = JSON.parse(store.getItem('groups'));
  }
  else {
    data.groups = {};
  }

  if (store.getItem('settings')) {
  // if (0 && store.getItem('groups')) {
    data.settings = JSON.parse(store.getItem('settings'));
  }
  else {
    data.settings = {
      'previewSize': 100
    };
  }
}

Vue.component('preview-item', {
  props: ['item', 'settings'],
  template: '#preview-item-template'
})

var app = new Vue({
  el: '#app',
  data: data,
  computed: {
    availableTemplates: function() {
      var out = {};
      for (group in this.templates) {
        if (!(this.groups[group] && this.groups[group].length)) {
          out[group] = this.templates[group].title;
        }
      }
      return out;
    },

    previewItems: function() {
      var out = [];
      for (groupIndex in this.groups) {
        var groupTemplate = this.templates[groupIndex];
        var group = this.groups[groupIndex];

        for (itemIndex in group) {
          var item = group[itemIndex];

          var outItem = {
            index: groupIndex + '-' +itemIndex,
            style: groupTemplate.style,
            previewSize: this.settings.previewSize,
            texts: []
          };

          for (textIndex in groupTemplate.text) {
            var text = groupTemplate.text[textIndex];

            outItem.texts.push({
              text: item[textIndex],
              style: text.style
            });

            for (cloneIndex in text.clone) {
              var clone = text.clone[cloneIndex];
              outItem.texts.push({
                text: item[textIndex],
                style: Object.assign({}, text.style, clone)
              });
            }
          }
          out.push(outItem);
        }
      }
      return out;
    }
  },
  methods: {
    addGroup: function() {
      var option = document.getElementById("add-group-select");
      var group = option.options[option.selectedIndex].value;
      if (group) {
        option.selectedIndex = 0;
        option.parentNode.classList.remove('has-error');
        this.$set(this.groups, group, []);
        this.addItem(group);
      }
      else {
        option.parentNode.classList.add('has-error');
        option.focus();
      }
    },

    addItem: function(groupIndex) {
      var template = this.templates[groupIndex];
      var item = {};
      for (text in template.text) {
        item[text] = '';
      }
      this.groups[groupIndex].unshift(item);

      Vue.nextTick(function() {
        $("[data-group-index='"+ groupIndex +"'] input:first").focus();
      });
    },
    removeItem: function(groupIndex, itemIndex) {
      this.groups[groupIndex].splice(itemIndex, 1);
      if (this.groups[groupIndex].length === 0) {
        delete this.groups[groupIndex];
      }
    },

    tabPressed: function(event) {
      var target = $(event.target);
      if (target.hasClass("last-field")) {
        event.preventDefault();
        this.addItem(target.closest('.group-control').attr('data-group-index'));
      }
    },

    print: function() {
      window.print();
    },

    viewSettings: function() {

    }
  },

  mounted: function() {
    $('#app-loader').addClass('hidden');
    $('#app').removeClass('hidden');
  }
});

if (store) {
  app.$watch('groups', function(groups) {
    store.setItem('groups', JSON.stringify(groups))
  }, {
    deep: true
  })


  app.$watch('settings', function(settings) {
    store.setItem('settings', JSON.stringify(settings))
  }, {
    deep: true
  })
}
