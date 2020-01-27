<template>
  <div id="app" uk-grid>
    <div class="uk-width-1-4 uk-visible@m">
      <div class="uk-padding" uk-sticky>
        <ul class="uk-nav uk-nav-default">
            <li class="uk-active"><a href="#">Active</a></li>
            <li class="uk-parent">
                <a href="#">Parent</a>
                <ul class="uk-nav-sub">
                    <li><a href="#">Sub item</a></li>
                    <li><a href="#">Sub item</a></li>
                </ul>
            </li>
            <li class="uk-nav-header">Header</li>
            <li><a href="#"><span class="uk-margin-small-right" uk-icon="icon: table"></span> Item</a></li>
            <li><a href="#"><span class="uk-margin-small-right" uk-icon="icon: thumbnails"></span> Item</a></li>
            <li class="uk-nav-divider"></li>
            <li><a href="#"><span class="uk-margin-small-right" uk-icon="icon: trash"></span> Item</a></li>
        </ul>
      </div>
    </div>
    <div class="uk-hidden@m uk-width-1-5">
      <a class="uk-icon-button uk-position-small uk-position-top-left" uk-icon='menu' uk-toggle="target: #offcanvas-nav"></a>

      <div id="offcanvas-nav" uk-offcanvas="overlay: true">
          <div class="uk-offcanvas-bar">

              <ul class="uk-nav uk-nav-default">
                  <li class="uk-active"><a href="#">Active</a></li>
                  <li class="uk-parent">
                      <a href="#">Parent</a>
                      <ul class="uk-nav-sub">
                          <li><a href="#">Sub item</a></li>
                          <li><a href="#">Sub item</a></li>
                      </ul>
                  </li>
                  <li class="uk-nav-header">Header</li>
                  <li><a href="#"><span class="uk-margin-small-right" uk-icon="icon: table"></span> Item</a></li>
                  <li><a href="#"><span class="uk-margin-small-right" uk-icon="icon: thumbnails"></span> Item</a></li>
                  <li class="uk-nav-divider"></li>
                  <li><a href="#"><span class="uk-margin-small-right" uk-icon="icon: trash"></span> Item</a></li>
              </ul>

          </div>
      </div>

    </div>
    <div class="uk-padding">
      <p>main</p><p>main</p><p>main</p><p>main</p><p>main</p><p>main</p><p>main</p><p>main</p><p>main</p><p>main</p><p>main</p><p>main</p><p>main</p><p>main</p><p>main</p><p>main</p><p>main</p><p>main</p><p>main</p><p>main</p><p>main</p><p>main</p><p>main</p><p>main</p><p>main</p><p>main</p><p>main</p><p>main</p><p>main</p><p>main</p><p>main</p><p>main</p>
    </div>
  </div>
</template>

<style lang="scss">
@import '../node_modules/uikit/dist/css/uikit.min.css';
</style>
