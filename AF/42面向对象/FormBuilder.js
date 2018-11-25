
  var FormBuilder = function(data) {
    this.data = data;
  };
  FormBuilder.prototype.create = function() {
    var html = '';
    for (var key in this.data) {
      var item = {tag: '', text: '', attr: {}, option: null};
      for (var n in this.data[key]) {
        item[n] = this.data[key][n];
      }
      html += builder.toHTML(item);
    }
    return '<table>' + html + '</table>';
  };
  var builder = {
    toHTML: function(obj) {
      var html = this.item[obj.tag](this.attr(obj.attr), obj.option);
      return '<tr><th>' + obj.text + '</th><td>' + html + '</td></tr>';
    },
    attr: function(attr) {
      var html = '';
      for(var k in attr) {
        html += k + '="' + attr[k] + '" ';
      }
      return html;
    },
    item: {
      input: function(attr, option) {
        var html = '';
        if (option === null) {
           html += '<input ' + attr + '>';
        } else {
          for (var k in option) {
            html += '<label><input ' + attr + 'value="'  + k + '"' + '>' + option[k] + '</label>';
          }
        }
        return html;
      },
      select: function(attr, option) {
        var html = '';
        for (var k in option) {
          html += '<option value="' + k + '">' + option[k] + '</option>';
        }
        return '<select ' + attr +'>' + html + '</select>';
      },
      textarea: function(attr) {
        return '<textarea ' + attr + '></textarea>';
      }
    }
  };

  var elements = [
    { tag: 'input', text: '姓名', attr: { type: 'text', name: 'user' } },
    { tag: 'input', text: '性别', attr: { type: 'radio', name: 'gender' }, option: { m: '男', w: '女' } },
    { tag: 'input', text: '爱好', attr: { type: 'checkbox', name: 'hobby[]' }, option: { swimming: '游泳', reading: '阅读', running: '跑步' } },
    { tag: 'select', text: '地区', attr: { name: 'area' }, option: { '': '--请选择--', bj: '北京', sh: '上海', sz: '深圳' } },
    { tag: 'textarea', text: '自我介绍', attr: { name: 'introduce', cols: '50', rows: '5' } },
    { tag: 'input', attr: { type: 'submit', value: '提交' } }
  ];
  document.getElementById('form').innerHTML = new FormBuilder(elements).create();
 
