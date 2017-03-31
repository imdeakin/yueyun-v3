/**
 * Created by Deakin on 2017/3/17 0017.
 */
import { Component, AfterViewInit } from '@angular/core';

import { PartnerItemData } from '../partner-item/partner-item-data';
import { boardIds } from '../../home/board-ids';

declare let $: any;

@Component({
  selector: 'board-partner',
  templateUrl: 'board-partner.component.html',
  styleUrls: ['board-partner.component.css']
})
export class BoardPartnerComponent implements AfterViewInit {
  public id = boardIds.partner;
  public hColor;
  public hTitle = '合作伙伴';
  public partnerList: PartnerItemData[] = [
    {img: 'assets/img/partner_01.png'},
    {img: 'assets/img/partner_02.png'},
    {img: 'assets/img/partner_03.png'},
    {img: 'assets/img/partner_04.png'},
    {img: 'assets/img/partner_05.png'},
    {img: 'assets/img/partner_06.png'},
    {img: 'assets/img/partner_07.png'},
    {img: 'assets/img/partner_08.png'},
    {img: 'assets/img/partner_09.png'},
    {img: 'assets/img/partner_10.png'},
    {img: 'assets/img/partner_11.png'},
    {img: 'assets/img/partner_12.png'},
    {img: 'assets/img/partner_13.png'},
    {img: 'assets/img/partner_14.png'},
    {img: 'assets/img/partner_15.png'}
  ];

  public ngAfterViewInit(): void {
    this.toggleCover();
    this.hoverCover();
  }

  public toggleCover() {
    $('#' + this.id + ' .list .item').hover(function () {
      $(this).find('.con > img').stop().animate({top: '-100%'}, 500);
    }, function () {
      $(this).find('.con > img').stop().animate({top: '0'}, 500);
    });
  }

  public hoverCover() {
    let items = $('#' + this.id + ' .list .item');
    let boxBor = $('#' + this.id + ' .boxBor');
    items.bind('mouseover', function () {
      let oPosition = $(this).position();
      let oThis = $(this);
      boxBor.queue('fnHide');
      if (boxBor.attr('data-switch') !== 'true') {
        boxBor.attr('data-switch', 'true');
        boxBor.css({
          width: '100%',
          height: $(window).height(),
          left: 0,
          top: 0,
          opacity: 0,
          display: 'block'
        })
      }
      boxBor.stop(false, false).animate({
        opacity: 0.5,
        left: oPosition.left,
        top: oPosition.top,
        width: oThis.width(),
        height: oThis.height()
      }, 200);
    });
  }
}
