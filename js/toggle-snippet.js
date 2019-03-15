(function () {
    var $btns = document.querySelectorAll('[data-toggle]');
    var each = function ($targets, modifier) {
        var i = 0;
        var targetsLength = $targets.length;

        for (i = 0; i < targetsLength; i++) {
            modifier($targets[i]);
        }
    };
    var onBtnClick = function () {
        var targetSelector = this.getAttribute('data-toggle');
        var hideBeforeSelector = this.getAttribute('data-toggle-hide-before');
        var $targets = document.querySelectorAll(targetSelector);
        var toggleClass = this.getAttribute('data-toggle-class')||'on';

        if (hideBeforeSelector) {
            var $hideBeforeTargets = document.querySelectorAll(hideBeforeSelector);

            each($hideBeforeTargets, function ($el) {
                $el.classList.remove(toggleClass);
            });
        }

        each($targets, function ($el) {
            $el.classList.toggle(toggleClass);
        });
    };

    each($btns, function ($btn) {
        $btn.addEventListener('click', onBtnClick, false);
    });

    for (i = 0; i < btnsLength; i++) {
        
    }
})();