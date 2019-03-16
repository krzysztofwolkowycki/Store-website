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
        var targets = [];

        each($targets, function ($el) {
            targets.push({
                $target: $el,
                state: $el.classList.contains(toggleClass)
            });
        });

        if (hideBeforeSelector) {
            var $hideBeforeTargets = document.querySelectorAll(hideBeforeSelector);

            each($hideBeforeTargets, function ($el) {
                $el.classList.remove(toggleClass);
            });
        }

        each(targets, function (details) {
            if (details.state) {
                details.$target.classList.remove(toggleClass);
            } else {
                details.$target.classList.add(toggleClass);
            }
        });
    };

    each($btns, function ($btn) {
        $btn.addEventListener('click', onBtnClick, false);
    });
})();