import { platformBrowser }    from '@angular/platform-browser';
import { AppModuleNgFactory } from '../../aot/js/bare-spa/app/app.module.ngfactory';
import { enableProdMode } from '@angular/core';

//window['module2'] = window['module2'] || {}; // For using @Component({moduleId: module.id,

enableProdMode();

//console.log('Running AOT compiled');
//console.log(window['module2']);
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);