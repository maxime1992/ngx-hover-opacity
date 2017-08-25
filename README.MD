# ngx-hover-opacity

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
