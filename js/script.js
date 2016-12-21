var data = {
  templates: {
    'stl-svetly': {
      title: 'St. Louis Blues hosté',
      style: {
        image: './gfx/stl-svetly.png'
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
    'stl-tmavy': {
        title: 'St. Louis Blues domácí',
        style: {
          image: './gfx/stl-tmavy.png'
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
              'font-family': 'new_athletic_m54regular',
              'fill': '#fff',
              'stroke': '#00285d',
              'stroke-width': 7,
              'paint-order': 'stroke',
              'font-size': 42
            }
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
}

var app = new Vue({
  el: '#app',
  data: data,
  computed: {
    availableTemplates: function() {
      var out = {};
      for (group in this.templates) {
        if (!this.groups[group].length) {
          out[group] = this.templates[group].title;
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
        $$("[data-group-index='"+ groupIndex +"']")[0].getElement('input').focus();
      });
    },
    removeItem: function(groupIndex, itemIndex) {
      this.groups[groupIndex].splice(itemIndex, 1);
    },

    tabPressed: function(event) {
      var inputs = event.target.getParent('.form-group').getElements('input');
      if (inputs.getLast() === event.target) {
        event.preventDefault();
        this.addItem(event.target.getParent('.group-control').get('data-group-index'));
      }
    }
  }
});

if (store) {
  app.$watch('groups', function(groups) {
    store.setItem('groups', JSON.stringify(groups))
  }, {
    deep: true
  })
}
