import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StorageSync } from '@o3r/core';
import { RuntimeChecks } from '@ngrx/store';
import { Serializer } from '@o3r/core';
import { environment, additionalModules } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { routerReducer } from '@ngrx/router-store';
import { StepPresModule } from '../components/step';
import { ResultPresModule } from '../components/result';
import { ComponentCreationExercisePresModule } from '../components/exercises/one/component-creation-exercise';


const localStorageStates: Record<string, Serializer<any>>[] = [/* Store to register in local storage */];
const storageSync = new StorageSync({
  keys: localStorageStates, rehydrate: true
});

const rootReducers = {
  router: routerReducer
};

const metaReducers = [storageSync.localStorageSync()];
const runtimeChecks: Partial<RuntimeChecks> = {
  strictActionImmutability: false,
  strictActionSerializability: false,
  strictActionTypeUniqueness: !environment.production,
  strictActionWithinNgZone: !environment.production,
  strictStateImmutability: !environment.production,
  strictStateSerializability: false
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    StepPresModule,
    ResultPresModule,
    BrowserModule,
    ComponentCreationExercisePresModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot(rootReducers, {metaReducers, runtimeChecks}),
    StoreRouterConnectingModule.forRoot(),
    additionalModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
