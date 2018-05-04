(function(window){

    var APP = {

        onScroll: [],
        activeProject: 0,
        headlineTrack: document.getElementById("headline-track"),
        headlines: [],
        projects: [
            {
                title: '<span class="faded">Hi, I create</span><br/> things <span class="faded">for<br/>the web.</span>',
            },
            { 
                title: 'Hester Street Collaborative',
                description: 'Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada feugiat. Donec sollicitudin molestie malesuada.',
                url: 'http://hesterstreet.org/',
                url_text: 'hesterstreet.org',
                meta: {
                    role: 'Primary Developer',
                    platform: 'Wordpress'
                },
                color: '#3266CC',
                fill: '#DFE6F1'
            },
            { 
                title: 'Gibney',
                description: 'Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada feugiat. Donec sollicitudin molestie malesuada.',
                url: 'http://gibneydance.org/',
                url_text: 'gibneydance.org',
                meta: {
                    role: 'Primary Developer',
                    platform: 'Wordpress'
                },
                color: '#000000',
                fill: '#E8E8E8'
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
                title: 'Orpheus Chamber Orchestra',
                description: 'Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada feugiat. Donec sollicitudin molestie malesuada.',
                url: 'http://orpheusnyc.org/',
                url_text: 'orpheusnyc.org',
                meta: {
                    role: 'Primary Developer',
                    platform: 'Wordpress'
                },
                color: '#C48014',
                fill: '#EEE9DF'
            },
            { 
                title: 'Claremont Graduate University',
                description: 'Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada feugiat. Donec sollicitudin molestie malesuada.',
                url: 'http://cgu.edu/',
                url_text: 'cgu.edu',
                meta: {
                    role: 'Primary Developer',
                    platform: 'Wordpress'
                },
                color: '#AF1E27',
                fill: '#ECDFE1'
            },
            {
                title: 'Let\'s Chat'
            },
        ]
    
    };

    window.APP = APP;

})(this);