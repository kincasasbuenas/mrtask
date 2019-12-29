import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsernamePipe } from '../pipes/username/username.pipe';
import { StatusPipe } from './status/status.pipe';


@NgModule({
  declarations: [UsernamePipe, StatusPipe],
  imports: [
    CommonModule
  ],
  exports:[UsernamePipe,StatusPipe]
})
export class SharedpipesModule { }
