# NgPreloadStrategy

This is just to test preload strategy in angular 

Preloading in Angular means loading the Lazy loaded Modules in the background asynchronously, while user is interacting with the app. This will help boost up the loading time of the app


By Lazy loading the modules, we can reduce the initial download size of the app, and thus making app load quickly. This is very useful in case of big apps. But when user navigates to a lazy loaded part of the app, the angular will have to download the module from the server, which means that user will have to wait for the download to finish.

By Preloading the lazy loaded module, the user do not have to wait for the module to be downloaded as the module is already downloaded in the background.

The Angular provides two built in strategies out of the box. one is PreloadAllModules and other one is NoPreloading

## usage of preloading strategy
With PreloadAllModules all the modules are preloaded, which may actually create a bottleneck if the application has large no of modules to be loaded.

The better way strategy would be :

* Eagerly Load the modules required at startup. For Example authentication module, core module, shared module etc
* Preload all frequently used modules, may be after some delay
* Lazy load remaining modules

## Run project 
you can run the project using : npm run start 
you will notice the follwoing in the console : 
 * admin module will be loaded afger 5000 ms
 * and user module will be loaded after 1000 ms  
due to the custom pre load strategy implemented