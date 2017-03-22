/**
 * Created by Deakin on 2017/3/17 0017.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'case-nav',
  templateUrl: 'case-nav.component.html',
  styleUrls: ['case-nav.component.css']
})
export class CaseNavComponent {
  public items = [
    {
      id: '1',
      title: '智能家居'
    },
    {
      id: '2',
      title: '电商'
    },
    {
      id: '3',
      title: '医疗'
    },
    {
      id: '4',
      title: '社交'
    },
    {
      id: '5',
      title: '直播'
    },
    {
      id: '6',
      title: '企业'
    }
  ];
}
