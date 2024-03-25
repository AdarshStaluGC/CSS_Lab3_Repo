window.onload = function() {
    var tabs = document.querySelectorAll('.tabs ul li');
    var panels = document.querySelectorAll('.tabs div[role="tabpanel"]');


    tabs[0].classList.add('active');
    panels[0].classList.add('active');

    tabs.forEach(function(tab, index) {
        tab.addEventListener('click', function() {
            
            tabs.forEach(function(tab) {
                tab.classList.remove('active');
            });
            panels.forEach(function(panel) {
                panel.classList.remove('active');
            });

            
            tab.classList.add('active');
            panels[index].classList.add('active');
        });
    });
}