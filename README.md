# ngx-hover-opacity

This librairy aims to provide a simple way to visually "disable" an entire HTML element.

For example, if you display a given resource and suddenly it's not available anymore (deleted on the server and you just received an event).
Should you redirect the user to the home page? If he was reading it, it's a little rough, isn't it?

Instead of that, you might want to hover it, with a nice opacity, so the user cannot interact with it anymore.
(Maybe you could also let him know what's happening with a message, but it's up to you).

## Demo:

ngx-hover-opacity set to **OFF**  
![A MatCard from material with ngx-hover-opacity set to OFF](https://user-images.githubusercontent.com/4950209/29740631-2ee2ca28-8a5b-11e7-9f61-19681ab07fbd.png)

ngx-hover-opacity set to **ON**  
![A MatCard from material with ngx-hover-opacity set to ON](https://user-images.githubusercontent.com/4950209/29740633-4446d972-8a5b-11e7-9c61-f231d40d803a.png)

You can also [try it live on Stackblitz!](https://stackblitz.com/edit/ngx-hover-opacity)

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
  declarations: [AppComponent],
  imports: [
    BrowserModule,

    // specify it as an import
    NgxHoverOpacityModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

Once your library is imported, you can use the component `ngx-hover-opacity` in your Angular application:

```html
<ngx-hover-opacity [isHoverVisible]="true">
  <div>Your content that might get hidden</div>
</ngx-hover-opacity>
```

## License

MIT © [Maxime ROBERT](mailto:maxime.robert1992@gmail.com)
