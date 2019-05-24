# Angular Application


Only one default route in 'app.routes'

1 Application models  in models folder "album.models" with 3 models  Person, Album, Image

2 Main Data service in core folder "person-album.service" load and holds all application data for current person and current album
it has 3 BehaviorSubjects for components to subscribe and display on screen;

"com" directory for common components. It has one top selector for person and Album 2 drop down selectors

"gallery/person-gallery" component display  current set of images binded to person and album

 I separated this in component to switch between albums might need animation
