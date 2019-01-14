function sansify(el) {
    var text = el.innerText;
    var wordContainer = '<div class="cssans__word">';
    var accessibleText = '<div class="cssans__accessible">' + text + '</div>';
    var sansified = accessibleText + wordContainer;

    for(var i in text) {
        var letter = text[i];

        if (letter == ' ') {
            sansified += '</div>' + wordContainer;
        }
        else {
            sansified += '<span class="cssans-'+ letter +'"></span>';
        }
    }

    el.style.lineHeight = "0px";
    el.innerHTML = sansified + '</div>';
}

var els = document.querySelectorAll('.sansify');

for( var element in els ) sansify(els[element]);

