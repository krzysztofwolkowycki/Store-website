(function () {
    var $btns = document.querySelectorAll('[data-toggle]');
    var i = 0;
    var btnsLength = $btns.length;
    var onBtnClick = function () {
        var targetSelector = this.getAttribute('data-toggle');
        var $targets = document.querySelectorAll(targetSelector);
        var toggleClass = this.getAttribute('data-toggle-class')||'on';
        var i = 0;
        var targetsLength = $targets.length;

        for (i = 0; i < targetsLength; i++) {
            $targets[i].classList.toggle(toggleClass);
        }
    };

    for (i = 0; i <btnsLength; i++) {
        $btns[i].addEventListener('click', onBtnClick, false);
    }
})();