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

        // Set lastTab to stored lastTab from sessionStorage if the browser supports session storage
        if (typeof(Storage) !== "undefined"){
          if(sessionStorage.lastTab !== undefined){
            lastTab = parseInt(sessionStorage.lastTab);
          } else {
            lastTab = 0;
          }
        }

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
          tab.addEventListener('click', function() {
            // Store the last tab clicked on
            if (typeof(Storage) !== "undefined") sessionStorage.lastTab = idx;

            prevIdx = currentIdx;
            currentIdx = idx;

            if (prevIdx !== currentIdx) {
              s.tab[prevIdx].style.display = 'none';
              s.tab[prevIdx].classList.remove('active');
              s.tabs[prevIdx].classList.remove('active');
              s.tab[currentIdx].style.display = 'block';
              s.tab[currentIdx].classList.add('active');
              s.tabs[currentIdx].classList.add('active');
            }
          });
        });
      }
    }

  }
})();

var wow = new WOW({
  animateClass: 'fade-in'
});

var scrollSave = (function() {
  var scroll = document.body.scrollTop;
  return {

    init: function() {
      scrollSave.restore();
      scrollSave.save();
    },

    save: function() {
      window.onbeforeunload = function() {
        if (typeof(Storage) !== "undefined"){
          if (document.getElementsByTagName("title")[0].innerHTML == "Dylan Huang"){
            sessionStorage.scrollTop = document.body.scrollTop;
          }
        }
      }
    },

    restore: function() {
      if (typeof(Storage) !== "undefined"){
        if (document.getElementsByTagName("title")[0].innerHTML == "Dylan Huang"){
          document.body.scrollTop = sessionStorage.scrollTop;
        }
      }
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
  scrollSave.init();
  GithubTab.init();
  GitHubActivity.feed({
    username: "dphuang2",
    selector: "#feed",
  });
  console.log("Nice to meet you fellow developer.");
});
