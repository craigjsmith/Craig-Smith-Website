document.addEventListener("DOMContentLoaded", function (e) {
    // Open skill modal
    function openModal() {
        $('#skill-modal').modal('toggle')
    }

    // Load remote content in skill modal
    $('.skill-btn').on('click', function (e) {
        e.preventDefault();
        document.querySelector("#skill-modal-title").innerHTML = ($(this).attr('name'));
        $('#skill-modal').find('.modal-body').load($(this).attr('remote'), openModal);
    });

    // Action listener modal
    $(".skill-btn-inner").hover(function () {
        $(this).find('.skill').addClass("skill-hover");
    }, function () {
        $(this).find('.skill').removeClass("skill-hover");
    });

    // Set copyright date in footer to current year
    var date = new Date();
    document.querySelector('footer').innerHTML = "<h4>&copy; Craig Smith 2018-" + date.getFullYear() + "</h4>";
});