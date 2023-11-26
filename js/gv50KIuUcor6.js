// ----------------------------------------------
// Half and Half
// ----------------------------------------------

var HalfHalf = (function () {
    // Product handle -> Sauce handle
    var sauce_handles;

    var preselectSauce = function () {
        var product_handle = $j('[data-side=1] select option:selected').val(),
            sauce_handle = sauce_handles[product_handle];
        $j('input[name="item[sauce]"][value="' + sauce_handle + '"]').prop('checked', true);
        sauceSelected();
    };

    var sauceSelected = function () {
        var selected_sauce_handle = $j('input[name="item[sauce]"]:checked').val();

        $j('[data-side] select').each(function () {
            var select = $j(this);
            select.find('option').each(function () {
                var option = $j(this),
                    product_handle = option.val(),
                    sauce_handle = sauce_handles[product_handle],
                    enabled = (sauce_handle == selected_sauce_handle);
                option.attr('data-removed', enabled ? null : '');
            });

            // If the selected pizza has been removed, select the first available
            if (select.find('option:selected').attr('data-removed') != undefined) {
                select.find('option:not([data-removed]):first').prop('selected', true).change();
            }

            NiceSelect.updateFromSelect(select);
        });
    };

    return {
        init: function (_sauce_handles) {
            sauce_handles = _sauce_handles;
            preselectSauce();
            $j('input[name="item[sauce]"]').change(sauceSelected);
        }
    };
})();

// ----------------------------------------------
// HomepageEqualize
// ----------------------------------------------
var HomepageEqualize = (function () {
    function is_mobile() {
        return ($j('.header__burger-menu:visible').length > 0);
    }

    function equalize_row(elements) {
        var max = 0;
        $j(elements).css('height', '');
        if (!is_mobile()) {
            elements.each(function () {
                if ($j(this).height() > max) {
                    max = $j(this).height();
                }
            });
            elements.height(max);
        }
    }

    function perform() {
        equalize_row($j('.index-highlight article'));
        equalize_row($j('.index-promo article'));
    }

    function init() {
        $j(window).on('load resize', perform);
        perform();
    }

    return {
        init: init
    };
})();
