(function(window){
    
    function tagNameFn() {
        return ( this.last ) ? this.name : this.name + '<br/>';
    }

    var APP_FRAMES = [
        {
            id: 'hello',
            headline: '<small>See the goods</small>',
            template: 'intro'
        },
        { 
            id: 'hester-street',
            headline: 'Hester Street Collaborative',
            text: 'Hester Street is an urban planning, design and development nonprofit based in the Lower East Side of Manhattan. After a rebranding process, we built a website which allows them to showcase their impact on the communities they serve.',
            url: 'http://hesterstreet.org/',
            urlText: 'hesterstreet.org',
            video: {
                atts: 'loop muted preload="preload"',
                webm: 'assets/video/hester-project-scroll.webm',
                mp4: 'assets/video/hester-project-scroll.mp4',
                width: '1584',
                height: '898'
            },
            tags: [
                { name: 'Wordpress' },
                { name: 'Mapbox' },
                { name: 'vue.js', last: true  }
            ],
            tagName: tagNameFn,
            role: 'Primary Developer',
            color: '#3266CC',
            fill: '#3266CC'
        },
        { 
            id: 'gibney',
            headline: 'Gibney',
            text: 'Gibney, formerly Gibney Dance, is an organization whose mission is to bring the possibility of movement where it otherwise would not exist. Their new site seeks to emphasize the full scope of Gibney, acting as a portal connecting users to the myriads of performances, workshops, and weekly events.',
            url: 'http://gibneydance.org/',
            urlText: 'gibneydance.org',
            video: {
                atts: 'loop muted preload="preload"',
                webm: 'assets/video/gibney-flow.webm',
                mp4: 'assets/video/gibney-flow.mp4',
                width: '1422',
                height: '958'
            },
            tags: [
                { name: 'Wordpress' },
                { name: 'Events Calendar' },
                { name: 'slick.js', last: true }
            ],
            tagName: tagNameFn,
            role: 'Primary Developer',
            color: '#000000',
            fill: '#111'
        },
        { 
            id: 'transit-center',
            headline: 'TransitCenter',
            text: 'TransitCenter is a foundation dedicated to urban mobility. They needed a website which would help them communicate with communities and policy makers in urban areas to affect change. We developed a modular system of content with which they can publish online reports about transit use. In addition, the site is also a place to search grant recipients, see upcoming events, and read their blog.',
            url: 'http://transitcenter.org/',
            urlText: 'transitcenter.org',
            video: {
                atts: 'loop muted preload="preload"',
                webm: 'assets/video/transit-center-flow.webm',
                mp4: 'assets/video/transit-center-flow.mp4',
                width: '1422',
                height: '810'
            },
            tags: [
                { name: 'Wordpress' },
                { name: 'AJAX' },
                { name: 'Modular Content', last: true }
            ],
            tagName: tagNameFn,
            role: 'Primary Developer',         
            color: '#5E28B2',
            fill: '#5E28B2'
        },
        { 
            id: 'orpheus',
            headline: 'Orpheus Chamber Orchestra',
            text: 'Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada feugiat. Donec sollicitudin molestie malesuada.',
            url: 'http://orpheusnyc.org/',
            urlText: 'orpheusnyc.org',
            video: {
                atts: 'loop muted preload="preload"',
                webm: 'assets/video/orpheus-flow-1.webm',
                mp4: 'assets/video/orpheus-flow-1.mp4',
                width: '1678',
                height: '942'
            },
            tags: [
                // { name: '', last: true }
            ],
            tagName: tagNameFn,
            role: 'Primary Developer',         
            color: '#C48014',
            fill: '#C48014'
        },
        { 
            id: 'cgu',
            headline: 'Claremont Graduate University',
            text: 'Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada feugiat. Donec sollicitudin molestie malesuada.',
            url: 'http://cgu.edu/',
            urlText: 'cgu.edu',
            video: {
                atts: 'loop muted preload="preload"',
                webm: 'assets/video/cgu-flow.webm',
                mp4: 'assets/video/cgu-flow.mp4',
                width: '1424',
                height: '956'
            },
            tags: [
                // { name: '', last: true }
            ],
            tagName: tagNameFn,
            role: 'Lead Front-End Developer',           
            color: '#AF1E27',
            fill: '#AF1E27'
        },
        {
            id: 'lets-chat',
            headline: 'Let\'s Chat',
            template: 'outro'
        },
    ];

    window.APP_FRAMES = APP_FRAMES;

})(this);