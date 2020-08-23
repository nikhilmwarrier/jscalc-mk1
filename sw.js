const staticCacheName = 'calculator-static';
const assets = [
                '/',
                '/index.html',
                '/main.js',
                'jquery.js',
                '/styles.css',
                '/images/logo192.png',
                '/images/logo144.png',
                '/images/logo512.png'
               ];

//Install service worker
self.addEventListener('install', e =>{ 
     console.log('Service Worker: Installed!');
     e.waituntil(
     caches.open(staticCacheName).then(cache => {
         console.log('caching core assets...');
         cache.addAll(assets);
     });
    });
            );

//Activate service worker
self.addEventListener('activate', e =>{ 
     console.log('Service Worker: Activated!');
    });
   
//Fetch event
self.addEventListener('fetch', e =>{ 
     console.log('Fetch event detected :', e);
    });