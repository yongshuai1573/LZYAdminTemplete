
var r = 0;
$('.active').click(function () {
    r += 180;
    $(this).children('.inner-list').toggle();
    $(this).children('.icon-down-trangle').css('transform','rotate('+ r +'deg)');
});

layui.use(['form','upload'], function(){
    var form = layui.form;
    var upload = layui.upload;
    //监听提交
    form.on('submit(formDemo)', function(data){
        layer.msg(JSON.stringify(data.field),{
            icon:1,
            time:1000  //设定等待时间
        });
        return false;
    });
    var uploadInst = upload.render({
        elem: '#test2' //绑定元素
        ,url: '/upload/' //上传接口
        ,multiple: true
        ,before: function(obj){
            //预读本地文件示例，不支持ie8
            obj.preview(function(index, file, result){
                $('#demo2').append('<div class="add-demo"><img src="'+ result +'" alt="'+ file.name +'" class="layui-upload-img"><div class="mask-layer"><i></i></div></div>')
                $('.add-demo').mouseenter(function () {
                    $(this).children('.mask-layer').animate({'top':'0','opacity':'0.8'});
                });
                $('.add-demo').mouseleave(function () {
                    $(this).children('.mask-layer').animate({'top':'-20px','opacity':'0'});
                });
                $('.mask-layer').click(function () {
                    $(this).parent('.add-demo').remove()
                })
            });
        }
        ,done: function(res){
            //上传完毕
        }
    });
});


$('.email').click(function (){
    $('#email-list').toggle().siblings().hide();
});
$('.notice').click(function (){
    $('#notice-list').toggle().siblings().hide();
});
$('.setting').click(function (){
    $('#setting-list').toggle().siblings().hide();
});

layui.use('layedit', function(){
    var layedit = layui.layedit;
    layedit.build('demo'); //建立编辑器
});


