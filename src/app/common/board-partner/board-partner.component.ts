/**
 * Created by Deakin on 2017/3/17 0017.
 */
import { Component } from '@angular/core';

import { PartnerItemData } from '../partner-item/partner-item-data';
import { boardIds } from '../../home/board-ids';

@Component({
  selector: 'board-partner',
  templateUrl: 'board-partner.component.html',
  styleUrls: ['board-partner.component.css']
})
export class BoardPartnerComponent {
  public id = boardIds.partner;
  public hColor;
  public hTitle = '合作伙伴';
  public partnerList: PartnerItemData[] = [
    {img: ''}
  ];
}
