tableCheck = {
  init: function() {
    $(".layui-form-checkbox").click(function(event) {
      if($(this).hasClass('layui-form-checked')) {
        $(this).removeClass('layui-form-checked');
        var header={}
        $.each($(".layui-form-checkbox"),function(i,val){
          if(i==0){
            header=val;
          }
        });
        $(header).removeClass('layui-form-checked');
        if($(this).hasClass('header')) {
          $(".layui-form-checkbox").removeClass('layui-form-checked');
        }
      } else {
        $(this).addClass('layui-form-checked');
        if($(this).hasClass('header')) {
          $(".layui-form-checkbox").addClass('layui-form-checked');
        }
      }
    });
  },
  getData: function() {
    var obj = $(".layui-form-checked").not('.header');
    var arr = [];
    obj.each(function(index, el) {
      arr.push(obj.eq(index).attr('data-id'));
    });
    return arr;
  }
}
//开启表格多选
tableCheck.init();
