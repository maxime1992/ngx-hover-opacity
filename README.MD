# ngx-hover-opacity
This librairy aims to provide a simple way to "disable" an entire HTML element. 

For example, if you display a given resource and suddenly it is not available anymore (deleted on the server and you just received an event).
Should you redirect the user to the home page? If he was reading it, it's a little brutal, isn't it?

Instead of that, you might want to take a breath and do not remove the element right away.
Just hover it, with a nice opacity so the user cannot interact with it anymore.
(Maybe you could also let him know what's happening with a message, but it's up to you).

## Demo: 

ngx-hover-opacity set to **OFF**  
![An MdCard from material with ngx-hover-opacity set to OFF](https://user-images.githubusercontent.com/4950209/29740631-2ee2ca28-8a5b-11e7-9f61-19681ab07fbd.png)

ngx-hover-opacity set to **ON**  
![An MdCard from material with ngx-hover-opacity set to ON](https://user-images.githubusercontent.com/4950209/29740633-4446d972-8a5b-11e7-9c61-f231d40d803a.png)

You can also [try it live on Stackblitz!](https://stackblitz.com/edit/angular-se17ec)

## Installation

To install this library, run:

```bash
$ yarn add ngx-hover-opacity
```
or
```bash
$ npm install ngx-hover-opacity --save
```

## Setup with Angular

From your Angular module (`AppModule` for example):

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// import the module
import { NgxHoverOpacityModule } from 'ngx-hover-opacity';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // specify it as an import
    NgxHoverOpacityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use the component `ngx-hover-opacity` in your Angular application:

```html
<ngx-hover-opacity [isHoverVisible]="true">
  <div>Your content that might get hidden</div>
</ngx-hover-opacity>
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ yarn run build
```
or
```bash
$ npm run build
```

## License

MIT © [Maxime ROBERT](mailto:maxime.robert1992@gmail.com)
