# Angular Custom Carousel

Angular-Custom-Carousel is A simple solution for carousel or slider.
HTML is yours, it allows you to 100% customization on your css and html. 

you are not forced to use any styles.


[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-ivy-ohaphc)


<a href="https://www.npmjs.com/package/angular-custom-carousel"><img src="https://img.shields.io/badge/npm-v1.0.0-blue" alt="npm latest version" ></a>



## Installation

Install the npm package.
```
  npm i angular-carousel
```
Import module:
```ts
  import { NgCarouselModule } from 'angular-custom-carousel';

  @NgModule({
      imports: [
      NgCarouselModule
      .....
      ]
  })
```


## Usage

- add the directive selector (bassCarouselInit) on container div that have 'ul'
    and give it the inputs it need 
    (carousalContainerClass, carousalULClass, carousalPreviousClass, carousalNextClass).

- add Previous button and give it directive selector (bassCarouselPrevious)
    (carousalContainerClass, carousalULClass, carousalPreviousClass, carousalNextClass, pxPerClick)

- add Next button and give it directive selector (bassCarouselNext)
    (carousalContainerClass, carousalULClass, carousalPreviousClass, carousalNextClass, pxPerClick)

  ex:
```html
<div class="mt-5">
  <div class="d-flex justify-content-center">
    <div class="d-flex  overflow-hidden demoContainer" style="width: 500px;height: 500px;" 
      bassCarouselInit [carousalContainerClass]="'demoContainer'" [carousalULClass]="'demoUL'" [carousalPreviousClass]="'demoprev'"
      [carousalNextClass]="'demonext'">

      <ul class="d-flex align-items-center bg-primary text-white demoUL overflow-hidden">
        <div style="min-width: 500px;">sliedr 1</div>
        <div style="min-width: 500px;">sliedr 2</div>
        <div style="min-width: 500px;">sliedr 3</div>
      </ul>
    </div>
  </div>
  <div class="d-flex justify-content-center">
    <button type="button" class="btn btn-warning mr-5 demoprev" 
    bassCarouselPrevious [carousalContainerClass]="'demoContainer'" 
    [pxPerClick]="250" [carousalULClass]="'demoUL'" [carousalPreviousClass]="'demoprev'" [carousalNextClass]="'demonext'">Previous</button>

    <button type="button" class="btn btn-warning demonext" 
    bassCarouselNext [carousalContainerClass]="'demoContainer'"
      [pxPerClick]="250" [carousalULClass]="'demoUL'" [carousalPreviousClass]="'demoprev'"
      [carousalNextClass]="'demonext'">Next</button>
  </div>
</div>
```

## Directive options ( inputs )
- carousalContainerClass : container class of the div that hold the ul.
- carousalULClass        : class of ul.
- carousalPreviousClass  : class of the Previous button.
- carousalNextClass      : class of the Next button.
- pxPerClick             : the px you want to scroll (250 px to the left.. etc).
