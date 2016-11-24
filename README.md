# Angular CLI ( Angular 2 ) Lazy Loading example.

# Note
- While configuring the lazy loaded paths and modules stop `ng serve` and start it again after.
- If you generate the components with the cli command `ng g c name`, do NOT forget to remove the declaration from app.module.ts, this file should not have any of the lazy loaded components added to the declarations they will be declared in their own module.ts

# Project setup:

![alt tag](https://github.com/virgil-av/Angular-CLI-lazy-load/blob/master/structure.PNG)


**Step 1: Install the loader**
```
npm install angular2-router-loader --save
```
After the install inside the package.json you should have this:

```
"dependencies": {
...
    "angular2-router-loader": "^0.3.4",
...
  },
```
**Step 2: Configure app.routing.ts**
```
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'about', loadChildren: './+about/about.module#AboutModule' },
  { path: 'test1', loadChildren: './+test1/test1.module#Test1Module' },
  { path: 'test2', loadChildren: './+test2/test2.module#Test2Module' },
  { path: 'test3', loadChildren: './+test3/test3.module#Test3Module' },
  { path: 'test4', loadChildren: './+test4/test4.module#Test4Module' },
  { path: 'test5', loadChildren: './+test5/test5.module#Test5Module' },
];
```
**what is this?:**
'./+test1/test1.module#Test1Module'
```
./ - current folder
+test1/ - folder name
test1.module - test1.module.ts from +test1 folder
#Test1Module - the exported class name of test1.module.ts is: Test1Module
```

**Step 3: Create the Lazy Module**
```
const routes: Routes = [
 { path: '', component: Test1Component },
];
```


**Step 4 Optional: Configure nested routing in test1.routing.ts**
```
const routes: Routes = [
  { path: '', component: Test1Component }, // this path is now the root path for the nested lazy load children
  { path: 'test1a', loadChildren: './+test1a/test1a.module#Test1aModule' },
  { path: 'test1b', loadChildren: './+test1b/test1b.module#Test1bModule' }
];
```
**routerLink:**
```
<li><a routerLink="/home" routerLinkActive="active">Home</a></li> //this will load normally

<li><a routerLink="/test1" routerLinkActive="active">Test1 (lazy)</a></li> //this will be lazy loaded on demand 

<li><a routerLink="/test1/test1a" routerLinkActive="active">Test1a (lazy)</a></li> // this will lazy load both test1 and test1a
```

**Primary Lazy Loading:**

![alt tag](https://github.com/virgil-av/Angular-CLI-lazy-load/blob/master/lazy-load1.PNG)


**Nested Lazy Loading**

![alt tag](https://github.com/virgil-av/Angular-CLI-lazy-load/blob/master/lazy-load-nested.PNG)



**This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.21.**

## Build
Run `ng build` to build the project. The build artifacts will be stored in the dist/ directory. Use the -prod flag for a production build.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

