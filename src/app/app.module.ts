import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { CardsComponent } from './cards/cards.component';
import { RecipesComponent } from './recipes/recipes.component';
import { DishDetailComponent } from './dish-detail/dish-detail.component';
import { ErrorComponent } from './error/error.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard, AdminGuard } from '../auth.guard';
import { FormsModule } from '@angular/forms';
import { AddDishComponent } from './add-dish/add-dish.component';
import { EditDishComponent } from './edit-dish/edit-dish.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    CardsComponent,
    RecipesComponent,
    DishDetailComponent,
    ErrorComponent,
    ContactComponent,
    LoginComponent,
    AdminComponent,
    AddDishComponent,
    EditDishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    [AuthGuard, AdminGuard]
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
