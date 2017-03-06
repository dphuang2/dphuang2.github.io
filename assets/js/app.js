var Tabs = (function() {
  var s;
  var lastTab;
  
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
          if(sessionStorage.lastTab !== "undefined"){
            lastTab = parseInt(sessionStorage.lastTab);
          } else {
            lastTab = 0; // If not, just default lastTab to 0
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

var Preview = (function() {
  var s;

  return {
    settings: {
      img: document.getElementsByClassName('preview__img'),
      post: document.getElementsByClassName('preview')
    },

    init: function() {
      s = this.settings;
      this.display();
      this.mouseenter();
    },

    display: function() {
      if (s.img.length) {
        [].forEach.call(s.img, function(img) {
          img.style.display = 'none';
        });
        s.img[0].style.display = 'block';
      }
    },

    mouseenter: function() {
      if (s.post.length) {
        var currentIdx = 0,
            prevIdx = currentIdx;

        [].forEach.call(s.post, function(preview, idx) {
          preview.addEventListener('mouseenter', function() {
            prevIdx = currentIdx;
            currentIdx = idx;

          });
        });
      }
    }
  }
})();

var wow = new WOW({
  animateClass: 'fade-in'
});

document.addEventListener('DOMContentLoaded', function() {
  Tabs.init();
  Preview.init();
  wow.init();
});
