var data = {
  templates: [
    {
      name: 'stl-svetly',
      title: 'St. Louis Blues hosté',
      style: {
        image: './gfx/stl-svetly.png'
      },
      text: [
        {
          name: 'surname',
          controls: {title: 'Příjmení', size: 9},
          style: {
            'font-family': 'new_athletic_m54regular',
            fill: '#00285d',
            stroke: '#ffb924',
            'stroke-width': 4,
            'paint-order': 'stroke',
            'font-size': 34
          }
        },
        {
          name: 'number',
          controls: {title: 'Číslo', size: 2},
          style: {
            'font-family': 'new_athletic_m54regular',
            fill: '#00285d',
            stroke: '#ffb924',
            'stroke-width': 4,
            'paint-order': 'stroke',
            'font-size': 42
          }
        }
      ]
    }
  ]
};

if (window.localStorage) {
  var store = window.localStorage

  if (store.getItem('groups')) {
    data.groups = JSON.parse(store.getItem('groups'));
  }
  else {
    data.groups = [];
  }
}

var app = new Vue({
  el: '#app',
  data: data,
  methods: {
    addGroup: function() {
      var option = document.getElementById("add-group-select");
      var groupName = option.options[option.selectedIndex].value;
      var group = this.templates.filter(function(template) {
        if (template.name === groupName) return true;
      })[0];
      if (group) {
        option.parentNode.classList.remove('has-error');
        this.groups.unshift({
          template: group,
          items: []
        });
      }
      else {
        option.parentNode.classList.add('has-error');
        option.focus();
      }
    },
    addItem: function(index) {
      var group = this.groups.filter(function(group, groupIndex) {
        if (groupIndex === index) return true;
      })[0];
      var fields = [];
      for (text of group.template.text) {
        field = {
          value: '',
          name: text.name,
          title: text.controls.title,
          class: 'col-xs-' + text.controls.size
        };
        fields.push(field);
      }
      group.items.unshift(fields);
    },
    removeItem: function(groupIndex, itemIndex) {
      this.groups[groupIndex].items.splice(itemIndex, 1);
    },
    tabPressed: function(event) {
      console.log(event, this.addItem);
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
