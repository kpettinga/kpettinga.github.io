(function(window){

    var APP = {

        onScroll: [],
        activeProject: 0,
        headlineTrack: document.getElementById("headline-track"),
        headlines: [],
        projects: [
            {
                title: '<span class="faded">Hi, I create</span><br/> systems &amp; interfaces<br/><span class="faded">for the web.</span>',
                fill: '#f3f5f7',
            },
            { 
                title: 'Orpheus Chamber Orchestra',
                description: 'Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada feugiat. Donec sollicitudin molestie malesuada.',
                url: 'http://orpheusnyc.org/',
                url_text: 'orpheusnyc.org',
                meta: {
                    role: 'Primary Developer',
                    platform: 'Wordpress'
                },
                color: '#C63714',
                fill: '#F8E7E3'
            },
            { 
                title: 'TransitCenter',
                description: 'Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada feugiat. Donec sollicitudin molestie malesuada.',
                url: 'http://transitcenter.org/',
                url_text: 'transitcenter.org',
                meta: {
                    role: 'Primary Developer',
                    platform: 'Wordpress'
                },
                color: '#5E28B2',
                fill: '#EFE9F7'
            },
            {
                title: 'Let\'s Chat',
                fill: '#f3f5f7',
            },
        ]
    
    };

    window.APP = APP;

})(this);