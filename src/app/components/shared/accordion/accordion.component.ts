import { Component, OnInit, Input } from '@angular/core';

import { Config, Menu } from './types';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  @Input() options;
  @Input() menus: Menu[];
  config: Config;

  ngOnInit() {
    this.config = this.mergeConfig(this.options);
  }

  mergeConfig(options: Config) {
    const config = {
      multi: true,
    };

    return { ...config, ...options };
  }

  onClick(e: Event, menu: Menu, i: number) {
    if (menu.clickAction) {
      menu.clickAction(e, menu);
    } else {
      this.toggle(i);
    }
  }

  toggle(index: number) {
    if (!this.config.multi) {
      this.menus.filter((menu, i) => i !== index && menu.active).forEach(menu => (menu.active = !menu.active));
    }

    this.menus[index].active = !this.menus[index].active;
  }
}
