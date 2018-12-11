function fetchdata() {
	
$.ajax({ 
    type: 'GET', 
    url: 'http://127.0.0.1:9001/patients', 
    data: { get_param: 'value' }, 
    dataType: 'json',
    success: function (data) { 
        $.each(data, function(index, element) {
            $('body').append($('<div>', {
                text: element.name
            }));
        });
    }
});

}