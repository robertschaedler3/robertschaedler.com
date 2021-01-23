import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TerminalRoutingModule } from './terminal-routing.module';
import { TerminalComponent } from './terminal.component';
import { SharedModule } from '../../shared/shared.module';

// Components
import { CliComponent } from './components/cli/cli.component';
import { CommandComponent } from './components/command/command.component';


@NgModule({
  declarations: [TerminalComponent, CommandComponent, CliComponent],
  imports: [CommonModule, TerminalRoutingModule, SharedModule],
})
export class TerminalModule {}
