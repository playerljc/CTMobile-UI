# ListView

* [布局](#listview-layout)
  - [Simple List](#listview-layout-simple)
  - [Links List](#listview-layout-linkslist)
  - [List With Icons](#listview-layout-listwithicons)
  - [Links](#listview-layout-links)
  - [Links, Header, Footer](#listview-layout-linksheaderfooter)
  - [Links Without Icons](#listview-layout-linkswithouticons)
  - [Grouped with sticky titles](#listview-layout-groupedwithstickytitles)
  - [Mixed and nested](#listview-layout-mixedandnested)
  - [Mixed, inset](#listview-layout-mixedinset)
  - [Tablet inset](#listview-layout-tabletinset)
  - [Media List / Songs](#listview-layout-medialistsongs)
  - [Media List / Mail App](#listview-layout-medialistmailapp)
  - [With centered chevron icon](#listview-layout-withcenteredchevronicon)
  - [Media List / Something more simple](#listview-layout-medialistsomethingmoresimple)
  - [Media List / Inset](#listview-layout-medialistinset)
* [例子](#listview-demo)

## 布局

### Simple List

```

    <div class="ct-list ios simple-list">
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        ...
      </ul>
    </div>

```

### Links List

```

    <div class="ct-list ios links-list">
      <ul>
        <li>
          <a href="#">Link Item 1</a>
        </li>
        <li>
          <a href="#">Link Item 2</a>
        </li>
        <li>
          <a href="#">Link Item 3</a>
        </li>
        ...
      </ul>
    </div>

```

### List With Icons

```

    <div class="ct-list ios">
      <ul>
        <li>
          <div class="item-content">

            <div class="item-inner">
              <div class="item-title">Ivan Petrov</div>
              <div class="item-after">CEO</div>
            </div>
          </div>
        </li>
        <li>
          <div class="item-content">

            <div class="item-inner">
              <div class="item-title">John Doe</div>
              <div class="item-after"> <span class="badge">5</span></div>
            </div>
          </div>
        </li>
        <li>
          <div class="item-content">

            <div class="item-inner">
              <div class="item-title">Jenna Smith</div>
            </div>
          </div>
        </li>
      </ul>
    </div>

```

### Links

```

    <div class="ct-list ios">
      <ul>
        <li>
          <a href="#" class="item-link item-content">

            <div class="item-inner">
              <div class="item-title">Ivan Petrov</div>
              <div class="item-after">CEO</div>
            </div>
          </a>
        </li>
        <li>
          <a href="#" class="item-link item-content">

            <div class="item-inner">
              <div class="item-title">John Doe</div>
              <div class="item-after">Cleaner</div>
            </div>
          </a>
        </li>
        <li>
          <a href="#" class="item-link item-content">

            <div class="item-inner">
              <div class="item-title">Jenna Smith</div>
            </div>
          </a>
        </li>
      </ul>
    </div>

```

### Links, Header, Footer

```

    <div class="ct-list ios">
      <ul>
        <li>
          <a href="#" class="item-link item-content">

            <div class="item-inner">
              <div class="item-title">
                <div class="item-header">Name</div>
                John Doe
              </div>
              <div class="item-after">Edit</div>
            </div>
          </a>
        </li>
        <li>
          <a href="#" class="item-link item-content">

            <div class="item-inner">
              <div class="item-title">
                <div class="item-header">Phone</div>
                +7 90 111-22-3344
              </div>
              <div class="item-after">Edit</div>
            </div>
          </a>
        </li>
        <li>
          <a href="#" class="item-link item-content">

            <div class="item-inner">
              <div class="item-title">
                <div class="item-header">Email</div>
                john@doe
                <div class="item-footer">Home</div>
              </div>
              <div class="item-after">Edit</div>
            </div>
          </a>
        </li>
        <li>
          <a href="#" class="item-link item-content">

            <div class="item-inner">
              <div class="item-title">
                <div class="item-header">Email</div>
                john@framework7
                <div class="item-footer">Work</div>
              </div>
              <div class="item-after">Edit</div>
            </div>
          </a>
        </li>
      </ul>
    </div>

```

### Links Without Icons

```

    <div class="ct-list ios">
      <ul>
        <li>
          <a href="#" class="item-link item-content">
            <div class="item-inner">
              <div class="item-title">Ivan Petrov</div>
            </div>
          </a>
        </li>
        <li>
          <a href="#" class="item-link item-content">
            <div class="item-inner">
              <div class="item-title">John Doe</div>
            </div>
          </a>
        </li>
        <li class="item-divider">Divider Here</li>
        <li>
          <a href="#" class="item-link item-content">
            <div class="item-inner">
              <div class="item-title">Ivan Petrov</div>
            </div>
          </a>
        </li>
        <li>
          <a href="#" class="item-link item-content">
            <div class="item-inner">
              <div class="item-title">Jenna Smith</div>
            </div>
          </a>
        </li>
      </ul>
    </div>

```

### Grouped with sticky titles

```

    <div class="ct-list ios">
      <div class="list-group">
        <ul>
          <li class="list-group-title">A</li>
          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">Aaron </div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">Abbie</div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">Adam</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="list-group">
        <ul>
          <li class="list-group-title">B</li>
          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">Bailey</div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">Barclay</div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">Bartolo</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="list-group">
        <ul>
          <li class="list-group-title">C</li>
          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">Caiden</div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">Calvin</div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">Candy</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

```

### Mixed and nested

```

    <div class="ct-list ios">
      <ul>
        <li>
          <a href="#" class="item-link item-content">

            <div class="item-inner">
              <div class="item-title">Ivan Petrov</div>
              <div class="item-after">CEO</div>
            </div>
          </a>
        </li>
        <li>
          <a href="#" class="item-link item-content">

            <div class="item-inner">
              <div class="item-title">Two icons here</div>
            </div>
          </a>
        </li>
        <li>
          <div class="item-content">
            <div class="item-inner">
              <div class="item-title">No icons here</div>
            </div>
          </div>
          <ul>
            <li>
              <a href="#" class="item-link item-content">

                <div class="item-inner">
                  <div class="item-title">Ivan Petrov</div>
                  <div class="item-after">CEO</div>
                </div>
              </a>
            </li>
            <li>
              <a href="#" class="item-link item-content">

                <div class="item-inner">
                  <div class="item-title">Two icons here</div>
                </div>
              </a>
            </li>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title">No icons here</div>
                </div>
              </div>
            </li>
            <li>
              <a href="#" class="item-link item-content">

                <div class="item-inner">
                  <div class="item-title">Ultra long text goes here, no, it is really really long</div>
                </div>
              </a>
            </li>
            <li>
              <div class="item-content">

                <div class="item-inner">
                  <div class="item-title">With toggle</div>

                </div>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" class="item-link item-content">

            <div class="item-inner">
              <div class="item-title">Ultra long text goes here, no, it is really really long</div>
            </div>
          </a>
        </li>
        <li>
          <div class="item-content">

            <div class="item-inner">
              <div class="item-title">With toggle</div>

            </div>
          </div>
        </li>
      </ul>
    </div>

```

### Mixed, inset

```

    <div class="list inset">
      <ul>
        <li>
          <a href="#" class="item-link item-content">

            <div class="item-inner">
              <div class="item-title">Ivan Petrov</div>
              <div class="item-after">CEO</div>
            </div>
          </a>
        </li>
        <li>
          <a href="#" class="item-link item-content">

            <div class="item-inner">
              <div class="item-title">Two icons here</div>
            </div>
          </a>
        </li>
        <li>
          <a href="#" class="item-link item-content">

            <div class="item-inner">
              <div class="item-title">Ultra long text goes here, no, it is really really long</div>
            </div>
          </a>
        </li>
        <li>
          <div class="item-content">

            <div class="item-inner">
              <div class="item-title">With toggle</div>

            </div>
          </div>
        </li>
      </ul>
    </div>

```

### Tablet inset

```

    <div class="ct-list ios tablet-inset">
      <ul>
        <li>
          <a href="#" class="item-link item-content">

            <div class="item-inner">
              <div class="item-title">Ivan Petrov</div>
              <div class="item-after">CEO</div>
            </div>
          </a>
        </li>
        <li>
          <a href="#" class="item-link item-content">

            <div class="item-inner">
              <div class="item-title">Two icons here</div>
            </div>
          </a>
        </li>
        <li>
          <a href="#" class="item-link item-content">

            <div class="item-inner">
              <div class="item-title">Ultra long text goes here, no, it is really really long</div>
            </div>
          </a>
        </li>
      </ul>
      <div class="block-footer">
        <p>This list block will look like "inset" only on tablets (iPad)</p>
      </div>
    </div>

```

### Media List / Songs

```

    <div class="ct-list ios media-list">
      <ul>
        <li>
          <a href="#" class="item-link item-content">

            <div class="item-inner">
              <div class="item-title-row">
                <div class="item-title">Yellow Submarine</div>
                <div class="item-after">$15</div>
              </div>
              <div class="item-subtitle">Beatles</div>
              <div class="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus.</div>
            </div></a></li>
        <li>
          <a href="#" class="item-link item-content">

            <div class="item-inner">
              <div class="item-title-row">
                <div class="item-title">Don't Stop Me Now</div>
                <div class="item-after">$22</div>
              </div>
              <div class="item-subtitle">Queen</div>
              <div class="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus.</div>
            </div>
          </a>
        </li>
        <li>
          <a href="#" class="item-link item-content">

            <div class="item-inner">
              <div class="item-title-row">
                <div class="item-title">Billie Jean</div>
                <div class="item-after">$16</div>
              </div>
              <div class="item-subtitle">Michael Jackson</div>
              <div class="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus.</div>
            </div>
          </a>
        </li>
      </ul>
    </div>

```

### Media List / Mail App

```

    <div class="ct-list media-list">
      <ul>
        <li>
          <a href="#" class="item-link item-content">
            <div class="item-inner">
              <div class="item-title-row">
                <div class="item-title">Facebook</div>
                <div class="item-after">17:14</div>
              </div>
              <div class="item-subtitle">New messages from John Doe</div>
              <div class="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus.</div>
            </div>
          </a>
        </li>
        <li>
          <a href="#" class="item-link item-content">
            <div class="item-inner">
              <div class="item-title-row">
                <div class="item-title">John Doe (via Twitter)</div>
                <div class="item-after">17:11</div>
              </div>
              <div class="item-subtitle">John Doe (@_johndoe) mentioned you on Twitter!</div>
              <div class="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus.</div>
            </div>
          </a>
        </li>
        <li>
          <a href="#" class="item-link item-content">
            <div class="item-inner">
              <div class="item-title-row">
                <div class="item-title">Facebook</div>
                <div class="item-after">16:48</div>
              </div>
              <div class="item-subtitle">New messages from John Doe</div>
              <div class="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus.</div>
            </div>
          </a>
        </li>
        <li>
          <a href="#" class="item-link item-content">
            <div class="item-inner">
              <div class="item-title-row">
                <div class="item-title">John Doe (via Twitter)</div>
                <div class="item-after">15:32</div>
              </div>
              <div class="item-subtitle">John Doe (@_johndoe) mentioned you on Twitter!</div>
              <div class="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus.</div>
            </div>
          </a>
        </li>
      </ul>
    </div>

```

### With centered chevron icon

```

    <div class="ct-list ios media-list chevron-center">
      <ul>
        <li>
          <a href="#" class="item-link item-content">
            <div class="item-inner">
              <div class="item-title-row">
                <div class="item-title">Facebook</div>
                <div class="item-after">17:14</div>
              </div>
              <div class="item-subtitle">New messages from John Doe</div>
              <div class="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus.</div>
            </div>
          </a>
        </li>
        <li>
          <a href="#" class="item-link item-content">
            <div class="item-inner">
              <div class="item-title-row">
                <div class="item-title">John Doe (via Twitter)</div>
                <div class="item-after">17:11</div>
              </div>
              <div class="item-subtitle">John Doe (@_johndoe) mentioned you on Twitter!</div>
              <div class="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus.</div>
            </div>
          </a>
        </li>
      </ul>
    </div>

```

### Media List / Something more simple

```

    <div class="ct-list media-list">
      <ul>
        <li>
          <div class="item-content">

            <div class="item-inner">
              <div class="item-title-row">
                <div class="item-title">Yellow Submarine</div>
              </div>
              <div class="item-subtitle">Beatles</div>
            </div>
          </div>
        </li>
        <li>
          <a href="#" class="item-link item-content">

            <div class="item-inner">
              <div class="item-title-row">
                <div class="item-title">Don't Stop Me Now</div>
              </div>
              <div class="item-subtitle">Queen</div>
            </div>
          </a>
        </li>
        <li>
          <div class="item-content">

            <div class="item-inner">
              <div class="item-title-row">
                <div class="item-title">Billie Jean</div>
              </div>
              <div class="item-subtitle">Michael Jackson</div>
            </div>
          </div>
        </li>
      </ul>
    </div>

```

### Media List / Inset

```

    <div class="ct-list media-list inset">
      <ul>
        <li>
          <a href="#" class="item-link item-content">

            <div class="item-inner">
              <div class="item-title-row">
                <div class="item-title">Yellow Submarine</div>
              </div>
              <div class="item-subtitle">Beatles</div>
            </div>
          </a>
        </li>
        <li>
          <a href="#" class="item-link item-content">

            <div class="item-inner">
              <div class="item-title-row">
                <div class="item-title">Don't Stop Me Now</div>
              </div>
              <div class="item-subtitle">Queen</div>
            </div>
          </a>
        </li>
        <li>
          <a href="#" class="item-link item-content">

            <div class="item-inner">
              <div class="item-title-row">
                <div class="item-title">Billie Jean</div>
              </div>
              <div class="item-subtitle">Michael Jackson</div>
            </div>
          </a>
        </li>
      </ul>
    </div>

```

## 例子

#### html

```

        <dl>
            <dt><h1>iOS</h1></dt>
            <dd>

              <!--Simple List-->
              <h3>Simple List</h3>
              <div class="ct-list ios simple-list">
                <ul>
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ul>
              </div>

              <!--Links List-->
              <h3>Links List</h3>
              <div class="ct-list ios links-list">
                <ul>
                  <li><a href="#">Link 1</a></li>
                  <li><a href="#">Link 2</a></li>
                  <li><a href="#">Link 3</a></li>
                </ul>
              </div>

              <!--List With Icons-->
              <h3>List With Icons</h3>
              <div class="ct-list ios">
                <ul>
                  <li>
                    <div class="item-content">

                      <div class="item-inner">
                        <div class="item-title">Ivan Petrov</div>
                        <div class="item-after">CEO</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">

                      <div class="item-inner">
                        <div class="item-title">John Doe</div>
                        <div class="item-after"><span class="badge">5</span></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">

                      <div class="item-inner">
                        <div class="item-title">Jenna Smith</div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <!--Links-->
              <h3>Links</h3>
              <div class="ct-list ios">
                <ul>
                  <li>
                    <a href="#" class="item-link item-content">

                      <div class="item-inner">
                        <div class="item-title">Ivan Petrov</div>
                        <div class="item-after">CEO</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="item-link item-content">

                      <div class="item-inner">
                        <div class="item-title">John Doe</div>
                        <div class="item-after">Cleaner</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="item-link item-content">

                      <div class="item-inner">
                        <div class="item-title">Jenna Smith</div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              <!--Links, Header, Footer-->
              <h3>Links, Header, Footer</h3>
              <div class="ct-list ios">
                <ul>
                  <li>
                    <a href="#" class="item-link item-content">

                      <div class="item-inner">
                        <div class="item-title">
                          <div class="item-header">Name</div>
                          John Doe
                        </div>
                        <div class="item-after">Edit</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="item-link item-content">

                      <div class="item-inner">
                        <div class="item-title">
                          <div class="item-header">Phone</div>
                          +7 90 111-22-3344
                        </div>
                        <div class="item-after">Edit</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="item-link item-content">

                      <div class="item-inner">
                        <div class="item-title">
                          <div class="item-header">Email</div>
                          john@doe
                          <div class="item-footer">Home</div>
                        </div>
                        <div class="item-after">Edit</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="item-link item-content">

                      <div class="item-inner">
                        <div class="item-title">
                          <div class="item-header">Email</div>
                          john@framework7
                          <div class="item-footer">Work</div>
                        </div>
                        <div class="item-after">Edit</div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              <!--Links Without Icons-->
              <h3>Links Without Icons</h3>
              <div class="ct-list ios">
                <ul>
                  <li>
                    <a href="#" class="item-link item-content">
                      <div class="item-inner">
                        <div class="item-title">Ivan Petrov</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="item-link item-content">
                      <div class="item-inner">
                        <div class="item-title">John Doe</div>
                      </div>
                    </a>
                  </li>
                  <li class="item-divider">Divider Here</li>
                  <li>
                    <a href="#" class="item-link item-content">
                      <div class="item-inner">
                        <div class="item-title">Ivan Petrov</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="item-link item-content">
                      <div class="item-inner">
                        <div class="item-title">Jenna Smith</div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              <!--Grouped with sticky titles-->
              <h3>Grouped with sticky titles</h3>
              <div class="ct-list ios">
                <div class="list-group">
                  <ul>
                    <li class="list-group-title">A</li>
                    <li>
                      <div class="item-content">
                        <div class="item-inner">
                          <div class="item-title">Aaron</div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="item-content">
                        <div class="item-inner">
                          <div class="item-title">Abbie</div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="item-content">
                        <div class="item-inner">
                          <div class="item-title">Adam</div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="list-group">
                  <ul>
                    <li class="list-group-title">B</li>
                    <li>
                      <div class="item-content">
                        <div class="item-inner">
                          <div class="item-title">Bailey</div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="item-content">
                        <div class="item-inner">
                          <div class="item-title">Barclay</div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="item-content">
                        <div class="item-inner">
                          <div class="item-title">Bartolo</div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="list-group">
                  <ul>
                    <li class="list-group-title">C</li>
                    <li>
                      <div class="item-content">
                        <div class="item-inner">
                          <div class="item-title">Caiden</div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="item-content">
                        <div class="item-inner">
                          <div class="item-title">Calvin</div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="item-content">
                        <div class="item-inner">
                          <div class="item-title">Candy</div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <!--Mixed and nested-->
              <h3>Mixed and nested</h3>
              <div class="ct-list ios">
                <ul>
                  <li>
                    <a href="#" class="item-link item-content">

                      <div class="item-inner">
                        <div class="item-title">Ivan Petrov</div>
                        <div class="item-after">CEO</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="item-link item-content">

                      <div class="item-inner">
                        <div class="item-title">Two icons here</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <div class="item-content">
                      <div class="item-inner">
                        <div class="item-title">No icons here</div>
                      </div>
                    </div>
                    <ul>
                      <li>
                        <a href="#" class="item-link item-content">

                          <div class="item-inner">
                            <div class="item-title">Ivan Petrov</div>
                            <div class="item-after">CEO</div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="item-link item-content">

                          <div class="item-inner">
                            <div class="item-title">Two icons here</div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <div class="item-content">
                          <div class="item-inner">
                            <div class="item-title">No icons here</div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <a href="#" class="item-link item-content">

                          <div class="item-inner">
                            <div class="item-title">Ultra long text goes here, no, it is really really long</div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <div class="item-content">

                          <div class="item-inner">
                            <div class="item-title">With toggle</div>

                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#" class="item-link item-content">

                      <div class="item-inner">
                        <div class="item-title">Ultra long text goes here, no, it is really really long</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <div class="item-content">

                      <div class="item-inner">
                        <div class="item-title">With toggle</div>

                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <!--Mixed, inset-->
              <h3>Mixed, inset</h3>
              <div class="ct-list ios inset">
                <ul>
                  <li>
                    <a href="#" class="item-link item-content">

                      <div class="item-inner">
                        <div class="item-title">Ivan Petrov</div>
                        <div class="item-after">CEO</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="item-link item-content">

                      <div class="item-inner">
                        <div class="item-title">Two icons here</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="item-link item-content">

                      <div class="item-inner">
                        <div class="item-title">Ultra long text goes here, no, it is really really long</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <div class="item-content">

                      <div class="item-inner">
                        <div class="item-title">With toggle</div>

                      </div>
                    </div>
                  </li>
                </ul>
                <div class="block-footer">
                  <p>Here comes some useful information about list above</p>
                </div>
              </div>

              <!--Tablet inset-->
              <h3>Tablet inset</h3>
              <div class="ct-list ios tablet-inset">
                <ul>
                  <li>
                    <a href="#" class="item-link item-content">

                      <div class="item-inner">
                        <div class="item-title">Ivan Petrov</div>
                        <div class="item-after">CEO</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="item-link item-content">

                      <div class="item-inner">
                        <div class="item-title">Two icons here</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="item-link item-content">

                      <div class="item-inner">
                        <div class="item-title">Ultra long text goes here, no, it is really really long</div>
                      </div>
                    </a>
                  </li>
                </ul>
                <div class="block-footer">
                  <p>This list block will look like "inset" only on tablets (iPad)</p>
                </div>
              </div>

              <!--Media List / Songs-->
              <h3>Media List / Songs</h3>
              <div class="ct-list ios media-list">
                <ul>
                  <li>
                    <a href="#" class="item-link item-content">

                      <div class="item-inner">
                        <div class="item-title-row">
                          <div class="item-title">Yellow Submarine</div>
                          <div class="item-after">$15</div>
                        </div>
                        <div class="item-subtitle">Beatles</div>
                        <div class="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut
                          turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit
                          amet,
                          pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui
                          laoreet, commodo augue id, pulvinar lacus.
                        </div>
                      </div>
                    </a></li>
                  <li>
                    <a href="#" class="item-link item-content">

                      <div class="item-inner">
                        <div class="item-title-row">
                          <div class="item-title">Don't Stop Me Now</div>
                          <div class="item-after">$22</div>
                        </div>
                        <div class="item-subtitle">Queen</div>
                        <div class="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut
                          turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit
                          amet,
                          pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui
                          laoreet, commodo augue id, pulvinar lacus.
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="item-link item-content">

                      <div class="item-inner">
                        <div class="item-title-row">
                          <div class="item-title">Billie Jean</div>
                          <div class="item-after">$16</div>
                        </div>
                        <div class="item-subtitle">Michael Jackson</div>
                        <div class="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut
                          turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit
                          amet,
                          pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui
                          laoreet, commodo augue id, pulvinar lacus.
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              <!--Media List / Mail App-->
              <h3>Media List / Mail App-</h3>
              <div class="ct-list ios media-list">
                <ul>
                  <li>
                    <a href="#" class="item-link item-content">
                      <div class="item-inner">
                        <div class="item-title-row">
                          <div class="item-title">Facebook</div>
                          <div class="item-after">17:14</div>
                        </div>
                        <div class="item-subtitle">New messages from John Doe</div>
                        <div class="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut
                          turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit
                          amet,
                          pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui
                          laoreet, commodo augue id, pulvinar lacus.
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="item-link item-content">
                      <div class="item-inner">
                        <div class="item-title-row">
                          <div class="item-title">John Doe (via Twitter)</div>
                          <div class="item-after">17:11</div>
                        </div>
                        <div class="item-subtitle">John Doe (@_johndoe) mentioned you on Twitter!</div>
                        <div class="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut
                          turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit
                          amet,
                          pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui
                          laoreet, commodo augue id, pulvinar lacus.
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="item-link item-content">
                      <div class="item-inner">
                        <div class="item-title-row">
                          <div class="item-title">Facebook</div>
                          <div class="item-after">16:48</div>
                        </div>
                        <div class="item-subtitle">New messages from John Doe</div>
                        <div class="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut
                          turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit
                          amet,
                          pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui
                          laoreet, commodo augue id, pulvinar lacus.
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="item-link item-content">
                      <div class="item-inner">
                        <div class="item-title-row">
                          <div class="item-title">John Doe (via Twitter)</div>
                          <div class="item-after">15:32</div>
                        </div>
                        <div class="item-subtitle">John Doe (@_johndoe) mentioned you on Twitter!</div>
                        <div class="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut
                          turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit
                          amet,
                          pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui
                          laoreet, commodo augue id, pulvinar lacus.
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              <!--With centered chevron icon-->
              <h3>With centered chevron icon</h3>
              <div class="ct-list ios media-list chevron-center">
                <ul>
                  <li>
                    <a href="#" class="item-link item-content">
                      <div class="item-inner">
                        <div class="item-title-row">
                          <div class="item-title">Facebook</div>
                          <div class="item-after">17:14</div>
                        </div>
                        <div class="item-subtitle">New messages from John Doe</div>
                        <div class="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut
                          turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit
                          amet,
                          pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui
                          laoreet, commodo augue id, pulvinar lacus.
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="item-link item-content">
                      <div class="item-inner">
                        <div class="item-title-row">
                          <div class="item-title">John Doe (via Twitter)</div>
                          <div class="item-after">17:11</div>
                        </div>
                        <div class="item-subtitle">John Doe (@_johndoe) mentioned you on Twitter!</div>
                        <div class="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut
                          turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit
                          amet,
                          pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui
                          laoreet, commodo augue id, pulvinar lacus.
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              <!--Media List / Something more simple-->
              <h3>Media List / Something more simple</h3>
              <div class="ct-list ios media-list">
                <ul>
                  <li>
                    <div class="item-content">

                      <div class="item-inner">
                        <div class="item-title-row">
                          <div class="item-title">Yellow Submarine</div>
                        </div>
                        <div class="item-subtitle">Beatles</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="#" class="item-link item-content">

                      <div class="item-inner">
                        <div class="item-title-row">
                          <div class="item-title">Don't Stop Me Now</div>
                        </div>
                        <div class="item-subtitle">Queen</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <div class="item-content">

                      <div class="item-inner">
                        <div class="item-title-row">
                          <div class="item-title">Billie Jean</div>
                        </div>
                        <div class="item-subtitle">Michael Jackson</div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <!--Media List / Inset-->
              <h3>Media List / Inset</h3>
              <div class="ct-list ios media-list inset">
                <ul>
                  <li>
                    <a href="#" class="item-link item-content">

                      <div class="item-inner">
                        <div class="item-title-row">
                          <div class="item-title">Yellow Submarine</div>
                        </div>
                        <div class="item-subtitle">Beatles</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="item-link item-content">

                      <div class="item-inner">
                        <div class="item-title-row">
                          <div class="item-title">Don't Stop Me Now</div>
                        </div>
                        <div class="item-subtitle">Queen</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="item-link item-content">

                      <div class="item-inner">
                        <div class="item-title-row">
                          <div class="item-title">Billie Jean</div>
                        </div>
                        <div class="item-subtitle">Michael Jackson</div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </dd>
          </dl>
        <dl>
            <dt><h1>material</h1></dt>
            <dd>

              <!--Simple List-->
              <h3>Simple List</h3>
              <div class="ct-list md simple-list">
                <ul>
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ul>
              </div>

              <!--Links List-->
              <h3>Links List</h3>
              <div class="ct-list md links-list">
                <ul>
                  <li><a href="#">Link 1</a></li>
                  <li><a href="#">Link 2</a></li>
                  <li><a href="#">Link 3</a></li>
                </ul>
              </div>

              <!--List With Icons-->
              <h3>List With Icons</h3>
              <div class="ct-list md">
                <ul>
                  <li>
                    <div class="item-content">

                      <div class="item-inner">
                        <div class="item-title">Ivan Petrov</div>
                        <div class="item-after">CEO</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">

                      <div class="item-inner">
                        <div class="item-title">John Doe</div>
                        <div class="item-after"><span class="badge">5</span></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">

                      <div class="item-inner">
                        <div class="item-title">Jenna Smith</div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <!--Links-->
              <h3>Links</h3>
              <div class="ct-list md">
                <ul>
                  <li>
                    <a href="#" class="item-link item-content">

                      <div class="item-inner">
                        <div class="item-title">Ivan Petrov</div>
                        <div class="item-after">CEO</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="item-link item-content">

                      <div class="item-inner">
                        <div class="item-title">John Doe</div>
                        <div class="item-after">Cleaner</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="item-link item-content">

                      <div class="item-inner">
                        <div class="item-title">Jenna Smith</div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              <!--Links, Header, Footer-->
              <h3>Links, Header, Footer</h3>
              <div class="ct-list md">
                <ul>
                  <li>
                    <a href="#" class="item-link item-content">

                      <div class="item-inner">
                        <div class="item-title">
                          <div class="item-header">Name</div>
                          John Doe
                        </div>
                        <div class="item-after">Edit</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="item-link item-content">

                      <div class="item-inner">
                        <div class="item-title">
                          <div class="item-header">Phone</div>
                          +7 90 111-22-3344
                        </div>
                        <div class="item-after">Edit</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="item-link item-content">

                      <div class="item-inner">
                        <div class="item-title">
                          <div class="item-header">Email</div>
                          john@doe
                          <div class="item-footer">Home</div>
                        </div>
                        <div class="item-after">Edit</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="item-link item-content">

                      <div class="item-inner">
                        <div class="item-title">
                          <div class="item-header">Email</div>
                          john@framework7
                          <div class="item-footer">Work</div>
                        </div>
                        <div class="item-after">Edit</div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              <!--Links Without Icons-->
              <h3>Links Without Icons</h3>
              <div class="ct-list md">
                <ul>
                  <li>
                    <a href="#" class="item-link item-content">
                      <div class="item-inner">
                        <div class="item-title">Ivan Petrov</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="item-link item-content">
                      <div class="item-inner">
                        <div class="item-title">John Doe</div>
                      </div>
                    </a>
                  </li>
                  <li class="item-divider">Divider Here</li>
                  <li>
                    <a href="#" class="item-link item-content">
                      <div class="item-inner">
                        <div class="item-title">Ivan Petrov</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="item-link item-content">
                      <div class="item-inner">
                        <div class="item-title">Jenna Smith</div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              <!--Grouped with sticky titles-->
              <h3>Grouped with sticky titles</h3>
              <div class="ct-list md">
                <div class="list-group">
                  <ul>
                    <li class="list-group-title">A</li>
                    <li>
                      <div class="item-content">
                        <div class="item-inner">
                          <div class="item-title">Aaron</div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="item-content">
                        <div class="item-inner">
                          <div class="item-title">Abbie</div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="item-content">
                        <div class="item-inner">
                          <div class="item-title">Adam</div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="list-group">
                  <ul>
                    <li class="list-group-title">B</li>
                    <li>
                      <div class="item-content">
                        <div class="item-inner">
                          <div class="item-title">Bailey</div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="item-content">
                        <div class="item-inner">
                          <div class="item-title">Barclay</div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="item-content">
                        <div class="item-inner">
                          <div class="item-title">Bartolo</div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="list-group">
                  <ul>
                    <li class="list-group-title">C</li>
                    <li>
                      <div class="item-content">
                        <div class="item-inner">
                          <div class="item-title">Caiden</div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="item-content">
                        <div class="item-inner">
                          <div class="item-title">Calvin</div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="item-content">
                        <div class="item-inner">
                          <div class="item-title">Candy</div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <!--Mixed and nested-->
              <h3>Mixed and nested</h3>
              <div class="ct-list md">
                <ul>
                  <li>
                    <a href="#" class="item-link item-content">

                      <div class="item-inner">
                        <div class="item-title">Ivan Petrov</div>
                        <div class="item-after">CEO</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="item-link item-content">

                      <div class="item-inner">
                        <div class="item-title">Two icons here</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <div class="item-content">
                      <div class="item-inner">
                        <div class="item-title">No icons here</div>
                      </div>
                    </div>
                    <ul>
                      <li>
                        <a href="#" class="item-link item-content">

                          <div class="item-inner">
                            <div class="item-title">Ivan Petrov</div>
                            <div class="item-after">CEO</div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="item-link item-content">

                          <div class="item-inner">
                            <div class="item-title">Two icons here</div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <div class="item-content">
                          <div class="item-inner">
                            <div class="item-title">No icons here</div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <a href="#" class="item-link item-content">

                          <div class="item-inner">
                            <div class="item-title">Ultra long text goes here, no, it is really really long</div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <div class="item-content">

                          <div class="item-inner">
                            <div class="item-title">With toggle</div>

                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#" class="item-link item-content">

                      <div class="item-inner">
                        <div class="item-title">Ultra long text goes here, no, it is really really long</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <div class="item-content">

                      <div class="item-inner">
                        <div class="item-title">With toggle</div>

                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <!--Mixed, inset-->
              <h3>Mixed, inset</h3>
              <div class="ct-list md inset">
                <ul>
                  <li>
                    <a href="#" class="item-link item-content">

                      <div class="item-inner">
                        <div class="item-title">Ivan Petrov</div>
                        <div class="item-after">CEO</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="item-link item-content">

                      <div class="item-inner">
                        <div class="item-title">Two icons here</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="item-link item-content">

                      <div class="item-inner">
                        <div class="item-title">Ultra long text goes here, no, it is really really long</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <div class="item-content">

                      <div class="item-inner">
                        <div class="item-title">With toggle</div>

                      </div>
                    </div>
                  </li>
                </ul>
                <div class="block-footer">
                  <p>Here comes some useful information about list above</p>
                </div>
              </div>

              <!--Tablet inset-->
              <h3>Tablet inset</h3>
              <div class="ct-list md tablet-inset">
                <ul>
                  <li>
                    <a href="#" class="item-link item-content">

                      <div class="item-inner">
                        <div class="item-title">Ivan Petrov</div>
                        <div class="item-after">CEO</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="item-link item-content">

                      <div class="item-inner">
                        <div class="item-title">Two icons here</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="item-link item-content">

                      <div class="item-inner">
                        <div class="item-title">Ultra long text goes here, no, it is really really long</div>
                      </div>
                    </a>
                  </li>
                </ul>
                <div class="block-footer">
                  <p>This list block will look like "inset" only on tablets (iPad)</p>
                </div>
              </div>

              <!--Media List / Songs-->
              <h3>Media List / Songs</h3>
              <div class="ct-list md media-list">
                <ul>
                  <li>
                    <a href="#" class="item-link item-content">

                      <div class="item-inner">
                        <div class="item-title-row">
                          <div class="item-title">Yellow Submarine</div>
                          <div class="item-after">$15</div>
                        </div>
                        <div class="item-subtitle">Beatles</div>
                        <div class="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut
                          turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit
                          amet,
                          pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui
                          laoreet, commodo augue id, pulvinar lacus.
                        </div>
                      </div>
                    </a></li>
                  <li>
                    <a href="#" class="item-link item-content">

                      <div class="item-inner">
                        <div class="item-title-row">
                          <div class="item-title">Don't Stop Me Now</div>
                          <div class="item-after">$22</div>
                        </div>
                        <div class="item-subtitle">Queen</div>
                        <div class="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut
                          turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit
                          amet,
                          pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui
                          laoreet, commodo augue id, pulvinar lacus.
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="item-link item-content">

                      <div class="item-inner">
                        <div class="item-title-row">
                          <div class="item-title">Billie Jean</div>
                          <div class="item-after">$16</div>
                        </div>
                        <div class="item-subtitle">Michael Jackson</div>
                        <div class="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut
                          turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit
                          amet,
                          pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui
                          laoreet, commodo augue id, pulvinar lacus.
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              <!--Media List / Mail App-->
              <h3>Media List / Mail App-</h3>
              <div class="ct-list md media-list">
                <ul>
                  <li>
                    <a href="#" class="item-link item-content">
                      <div class="item-inner">
                        <div class="item-title-row">
                          <div class="item-title">Facebook</div>
                          <div class="item-after">17:14</div>
                        </div>
                        <div class="item-subtitle">New messages from John Doe</div>
                        <div class="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut
                          turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit
                          amet,
                          pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui
                          laoreet, commodo augue id, pulvinar lacus.
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="item-link item-content">
                      <div class="item-inner">
                        <div class="item-title-row">
                          <div class="item-title">John Doe (via Twitter)</div>
                          <div class="item-after">17:11</div>
                        </div>
                        <div class="item-subtitle">John Doe (@_johndoe) mentioned you on Twitter!</div>
                        <div class="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut
                          turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit
                          amet,
                          pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui
                          laoreet, commodo augue id, pulvinar lacus.
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="item-link item-content">
                      <div class="item-inner">
                        <div class="item-title-row">
                          <div class="item-title">Facebook</div>
                          <div class="item-after">16:48</div>
                        </div>
                        <div class="item-subtitle">New messages from John Doe</div>
                        <div class="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut
                          turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit
                          amet,
                          pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui
                          laoreet, commodo augue id, pulvinar lacus.
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="item-link item-content">
                      <div class="item-inner">
                        <div class="item-title-row">
                          <div class="item-title">John Doe (via Twitter)</div>
                          <div class="item-after">15:32</div>
                        </div>
                        <div class="item-subtitle">John Doe (@_johndoe) mentioned you on Twitter!</div>
                        <div class="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut
                          turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit
                          amet,
                          pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui
                          laoreet, commodo augue id, pulvinar lacus.
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              <!--With centered chevron icon-->
              <h3>With centered chevron icon</h3>
              <div class="ct-list md media-list chevron-center">
                <ul>
                  <li>
                    <a href="#" class="item-link item-content">
                      <div class="item-inner">
                        <div class="item-title-row">
                          <div class="item-title">Facebook</div>
                          <div class="item-after">17:14</div>
                        </div>
                        <div class="item-subtitle">New messages from John Doe</div>
                        <div class="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut
                          turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit
                          amet,
                          pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui
                          laoreet, commodo augue id, pulvinar lacus.
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="item-link item-content">
                      <div class="item-inner">
                        <div class="item-title-row">
                          <div class="item-title">John Doe (via Twitter)</div>
                          <div class="item-after">17:11</div>
                        </div>
                        <div class="item-subtitle">John Doe (@_johndoe) mentioned you on Twitter!</div>
                        <div class="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut
                          turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit
                          amet,
                          pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui
                          laoreet, commodo augue id, pulvinar lacus.
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              <!--Media List / Something more simple-->
              <h3>Media List / Something more simple</h3>
              <div class="ct-list md media-list">
                <ul>
                  <li>
                    <div class="item-content">

                      <div class="item-inner">
                        <div class="item-title-row">
                          <div class="item-title">Yellow Submarine</div>
                        </div>
                        <div class="item-subtitle">Beatles</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="#" class="item-link item-content">

                      <div class="item-inner">
                        <div class="item-title-row">
                          <div class="item-title">Don't Stop Me Now</div>
                        </div>
                        <div class="item-subtitle">Queen</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <div class="item-content">

                      <div class="item-inner">
                        <div class="item-title-row">
                          <div class="item-title">Billie Jean</div>
                        </div>
                        <div class="item-subtitle">Michael Jackson</div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <!--Media List / Inset-->
              <h3>Media List / Inset</h3>
              <div class="ct-list md media-list inset">
                <ul>
                  <li>
                    <a href="#" class="item-link item-content">

                      <div class="item-inner">
                        <div class="item-title-row">
                          <div class="item-title">Yellow Submarine</div>
                        </div>
                        <div class="item-subtitle">Beatles</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="item-link item-content">

                      <div class="item-inner">
                        <div class="item-title-row">
                          <div class="item-title">Don't Stop Me Now</div>
                        </div>
                        <div class="item-subtitle">Queen</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="item-link item-content">

                      <div class="item-inner">
                        <div class="item-title-row">
                          <div class="item-title">Billie Jean</div>
                        </div>
                        <div class="item-subtitle">Michael Jackson</div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </dd>
        </dl>

```
