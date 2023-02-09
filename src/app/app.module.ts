import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './server/servers/servers.component';
import { Module2Component } from './module2/module2.component';
import { MyProjectComponent } from './my-project/my-project.component';
import { HeaderComponent } from './my-project/header/header.component';
import { RecipesComponent } from './my-project/recipes/recipes.component';
import { ShoppingListComponent } from './my-project/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './my-project/shopping-list/shopping-edit/shopping-edit.component';
import { RecipeListComponent } from './my-project/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './my-project/recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailsComponent } from './my-project/recipes/recipe-details/recipe-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    Module2Component,
    MyProjectComponent,
    HeaderComponent,
    RecipesComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
