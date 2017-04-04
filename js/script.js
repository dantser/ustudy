$('.dropdown').click(function (e) {
	e.preventDefault();
	$(this).siblings('.dropdown-content').toggleClass('dropdown-content__active');
});