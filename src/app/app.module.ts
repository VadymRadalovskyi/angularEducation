import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyProjectComponent } from './my-project/my-project.component';
import { HeaderComponent } from './my-project/header/header.component';
import { RecipesComponent } from './my-project/recipes/recipes.component';
import { ShoppingListComponent } from './my-project/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './my-project/shopping-list/shopping-edit/shopping-edit.component';
import { RecipeListComponent } from './my-project/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './my-project/recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailsComponent } from './my-project/recipes/recipe-details/recipe-details.component';
import { Module2Component } from './module2/module2.component';
import { Module2ServerComponent } from './module2/module2-server/module2-server.component';
import { Module2ServersComponent } from './module2/module2-server/module2-servers/module2-servers.component';
import { Module5Component } from './module5/module5.component';
import { Module5CockpitComponent } from './module5/module5-cockpit/module5-cockpit.component';
import { Module5ServerElementComponent } from './module5/module5-server-element/module5-server-element.component';
import { Module5AssignmentGameControlComponent } from './module5/module5-assignment-game-control/module5-assignment-game-control.component';
import { Module5AssignmentOddComponent } from './module5/module5-assignment-odd/module5-assignment-odd.component';
import { Module5AssignmentEvenComponent } from './module5/module5-assignment-even/module5-assignment-even.component';
import { Module7Component } from './module7/module7.component';
import { Module7BasicHighlightDirective } from './module7/basic-highlight/basic.highlight.directive';
import { Module7BetterHighlightDirective } from './module7/module7-better-highlight.directive';
import { Module7UnlessDirective } from './module7/module7-unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyProjectComponent,
    HeaderComponent,
    RecipesComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,
    Module2Component,
    Module2ServerComponent,
    Module2ServersComponent,
    Module5Component,
    Module5CockpitComponent,
    Module5ServerElementComponent,
    Module5AssignmentGameControlComponent,
    Module5AssignmentOddComponent,
    Module5AssignmentEvenComponent,
    Module7Component,
    Module7BasicHighlightDirective,
    Module7BetterHighlightDirective,
    Module7UnlessDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
