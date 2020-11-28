(function ($) {
    $.fn.serializeFormJSON = function () {

        var o = {};
        var a = this.serializeArray();
        $.each(a, function () {
            if (o[this.name]) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };
})(jQuery);

$('form').submit(function (e) {
    e.preventDefault();
    var data = $(this).serializeFormJSON();
    console.log(data);

});

console.log("hello");
fetch('user-data-test.json')  
	.then(function(resp) { return resp.json() }) // Convert data to json
	.then(function(data) {
        console.log(data.FirstName);
        console.log(data.LastName);
        console.log(data);
        console.log(data.userdata.Date)
    })
	.catch(function() {
		// catch any errors
	});
