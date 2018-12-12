function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

var Tabs = (function() {
    var s;
    var lastTab = 0;

    return {
        settings: {
            tabs: document.getElementsByClassName('tabs__item'),
            tab: document.getElementsByClassName('tab')
        },

        init: function() {
            s = this.settings;
            this.display();
            this.click();
        },

        display: function() {
            if (s.tab.length) {
                [].forEach.call(s.tab, function(tab) {
                    tab.style.display = 'none';
                });

                lastTab = 0;
                // Set lastTab to stored lastTab
                if(getCookie("lastTab"))
                    lastTab = parseInt(getCookie("lastTab"));
                s.tab[lastTab].style.display = 'block';
                s.tab[lastTab].classList.add('active');
                s.tabs[lastTab].classList.add('active');
            }
        },

        click: function() {
            if (s.tabs.length) {
                var currentIdx = lastTab,
                    prevIdx = currentIdx;
                [].forEach.call(s.tabs, function(tab, idx) {
                    changeTab = function() {
                        prevIdx = currentIdx;
                        currentIdx = idx;

                        s.tab[prevIdx].style.display = 'none';
                        s.tab[prevIdx].classList.remove('active');
                        s.tabs[prevIdx].classList.remove('active');
                        s.tab[currentIdx].style.display = 'block';
                        s.tab[currentIdx].classList.add('active');
                        s.tabs[currentIdx].classList.add('active');

                        // Store the last tab clicked on
                        setCookie("lastTab", currentIdx, 1);
                    };
                    tab.addEventListener('click', changeTab);
                    tab.addEventListener('touchstart', changeTab, {passive: true});
                });
            }
        }
    }
})();

var wow = new WOW({
    animateClass: 'fade-in'
});

var scrollSave = (function() {
    return {

        init: function() {
            if (document.getElementsByTagName("title")[0].innerHTML == "Dylan Huang"){
                scrollSave.restore();
                scrollSave.save();
            }
        },

        save: function() {
            window.onbeforeunload = function() {
                setCookie("scrollTop", document.documentElement.scrollTop, 1);
            }
        },

        restore: function() {
            document.documentElement.scrollTop = getCookie("scrollTop");
        }

    }
})();

var GithubTab = (function() {
    var state = false;
    tab = document.getElementById('gh-button');
    wrapper = document.getElementById('gh-wrapper');
    return {
        init: function() {
            tab.addEventListener('click', function() {
                if(state){
                    wrapper.style.left = "-17.3em";
                    tab.style.cursor = "e-resize";
                    state = false; // Hidden
                } else {
                    tab.style.cursor = "w-resize";
                    wrapper.style.left = "0em";
                    state = true; // Expanded
                }
            });
        }
    }
})();

document.addEventListener('DOMContentLoaded', function() {
    Tabs.init();
    wow.init();
    GithubTab.init();
    GitHubActivity.feed({
        username: "dphuang2",
        selector: "#feed",
    });
    scrollSave.init();
    console.log("Nice to meet you fellow developer.");
});
